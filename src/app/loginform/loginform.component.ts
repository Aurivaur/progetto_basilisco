import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginStatus } from 'src/models/LoginStatus';
import { Persona } from 'src/models/Persona';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  @Output() nomeutente = new EventEmitter<Persona>();


  loginForm : FormGroup;

  constructor(private http : HttpClient, private formBuilder : FormBuilder){
    
    this.http = http;
    this.loginForm = formBuilder.group(
      {
        username : "",
        password : ""
      }
    )
  }

  submitForm(){
    const formValues = this.loginForm.value;
    const body = JSON.stringify(formValues);

    //compongo l'headers
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json'}
    )
    this.http.post("http://localhost:8080/api/login/signin", body, {headers}).subscribe(risposta =>{
      console.log(risposta)


      let loginStatus : LoginStatus = risposta as LoginStatus;
      //In base al ruolo mandiamo su paginastudenti o su paginadirigenti

      if(loginStatus.ruolo != "NONE"){
        //Il sesssionStorage permette di salvare nel brawser alcune informazioni, noi ci salviamo il token
        //che utilizzeremo per fare tutte le richieste che richiedono un'autorizzazione
        sessionStorage.setItem("token", loginStatus.token);
        if(loginStatus.ruolo == "ADMIN"){
          console.log("Vai alla pagina amministratore");
          //windows.location.href permette di fare un redirect in automatico ad un url che specifichiamo come stringa
          window.location.href="/areaamministratore";
        }
        else if(loginStatus.ruolo == "USER"){
          console.log("Vai alla pagina utente");
          window.location.href="/areautente";
  
        }
      }
      else{
        alert("ERRORE: Username o Password errate!");
      }
      
    })

  






  }




}
