import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utente } from 'src/models/Utente';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent {

  @Input() utenti? : Utente[];
  formInserisciUtente : FormGroup;


  constructor(private http : HttpClient, private formBuilder : FormBuilder){
    
    this.http = http;
    this.formInserisciUtente = formBuilder.group(
      {
        ruolo : "user",
        nome : "",
        cognome : "",
        datanascita : "",
        mail :"",
        username : "",
        password : ""
      }
    )
  }

  //inserimento nuovo utente
  submitForm(){
    const formValues = this.formInserisciUtente.value;

    //jsonifica i dati
    const body = JSON.stringify(formValues);

    //let token = sessionStorage.getItem("token");
    //if(token == null){
      //token = "";
    //}

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        //'token': token as string
      }
    );

    this.http.post<Utente>("http://localhost:8080/api/utente/registrati", body, {headers}).subscribe(risposta =>{

      if(!risposta){
        alert("Errore durante l'esecuzione della richiesta");
      }
      else{
       this.utenti?.push(risposta);
      }

      this.formInserisciUtente.patchValue(
        {
          ruolo : "user",
          nome : "",
          cognome : "",
          datanascita : "",
          mail : "",
          username : "",
          password : "",
        }
      )

      window.location.href="/areautente";

      
    })
  }





  }


  





