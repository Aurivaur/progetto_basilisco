import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utente } from 'src/models/Utente';

@Component({
  selector: 'app-tabellautenti',
  templateUrl: './tabellautenti.component.html',
  styleUrls: ['./tabellautenti.component.css']
})
export class TabellautentiComponent {

  @Input() utenti? : Utente[];

  formInserisciUtente : FormGroup;
  formModificaUtente? : FormGroup;
  isInserisciUtente = false;

  isUtente = false;

  constructor(private http : HttpClient, private formBuider : FormBuilder ){
    this.http = http;
    this.formInserisciUtente = formBuider.group(
      {
        nome : "",
        cognome : "",
        datanascita : "",
        email : "",
        ruolo : "",
        username : "",
        password : "1234"
      }
    )
  }


  //TOGGLE
  toggleVediUtenti(){
    this.isUtente = !this.isUtente;
  }

  toggleInsertUtente(){
    this.isInserisciUtente = !this.isInserisciUtente;
  }

  //CANCELLA UTENTI
  deleteUtenti(id : number){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );

    const params = new HttpParams().set('idUtente', id);

    this.http.get<boolean>("http://localhost:8080/api/admin/delete", {headers, params}).subscribe(risposta =>{
      if(risposta){
        alert("Eliminazione avvenuta con successo");
        let pos = this.utenti?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.utenti?.splice(pos!, 1);
        }
      }
    })
  }

  //INSERT UTENTE
  submitInserisciUtente(){

    const nome = this.formInserisciUtente.get('nome')!.value + "";
    const cognome = this.formInserisciUtente.get('cognome')!.value + "";

    // concatena nome e cognome
    const defaultUsername = nome.toLowerCase() + "." + cognome.toLowerCase();

    // imposta username default
    this.formInserisciUtente.get('username')!.setValue(defaultUsername)

    const formValues = this.formInserisciUtente?.value;
  
    const body = JSON.stringify(formValues);
  
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }
  
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );
  
    this.http.post<Utente>("http://localhost:8080/api/admin/insertutente", body, {headers}).subscribe(risposta =>{
  
      if(!risposta){
        alert("Errore durante l'esecuzione della richiesta");
      }
      else{
       this.utenti?.push(risposta);
      }
  
      this.formInserisciUtente?.patchValue(
        {
          nome : "",
          cognome : "",
          datanascita : "",
          email : "",
          ruolo : "",
          username : "",
          password : ""
        }
      )
      this.toggleInsertUtente();
    })
    
  }

}
