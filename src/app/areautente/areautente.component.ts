import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/models/Prodotto';
import { Utente } from 'src/models/Utente';

@Component({
  selector: 'app-areautente',
  templateUrl: './areautente.component.html',
  styleUrls: ['./areautente.component.css']
})
export class AreautenteComponent {

  user? : Utente;
  prodotto? : Prodotto[];

  isDatiPersonali = false;
  isCarrello = false;

  constructor(private http : HttpClient){
    this.http = http;
    this.checkLogin();
  }

  //fare getUtenteById per leggere le info dell'utente da parte dell'utente
  getUtente(id : string){
    let token = sessionStorage.getItem("token");
    //Evitiamo di passare il token all'header con un null
    if(token == null){
      token = "";
    }

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token
      }
    )

    const params = new HttpParams().set('idUser', id);

    this.http.get("http://localhost:8080/api/utente/byId", {headers, params},).subscribe(risposta =>{
      console.log(risposta);
    
      this.user = risposta as Utente;

    })

  }

  //CHECKLOGIN che ti fa entrare nella pagina 
  checkLogin(){
    let token = sessionStorage.getItem("token");
    if(token == null){
      alert("NON HAI EFFETTUATO UN LOGIN VALIDO!")
      sessionStorage.clear();
      window.location.href="/home";
      return;
    }
    else{
      //Compongo gli headers della richiesta, inserendo il token e il ruolo che mi aspetto 
      //(in questo caso DIRIGENTE perchè sto accedendo alla pagina dei dirigenti)
      const headers = new HttpHeaders(
        {
          'Content-Type' : 'application/json',
          'token' : token,
          'role' : 'USER'
        }
      );

      this.http.get("http://localhost:8080/api/login/login", {headers}).subscribe(risposta =>{
        let check = risposta as boolean;
        if(!check){
          alert("Non sei autorizzato ad accedere a questa pagina")
          window.location.href="/";
        }
        else{
          let id = token?.split("-")[1] as string;
          this.getUtente(id);
          //richieste per informazini necessarie - DA FARE
          //this.getAllProdotti();
          //this.getAllDischi();
          //this.getAllGiochi();
          //this.getAllLibri();
          
        }
      })
    }
  }

  //TOGGLE PER DATI PERSONALI E CARRELLO
  toggleVediDati(){
    this.isDatiPersonali = !this.isDatiPersonali;
  }

  toggleVediCarrello(){
    this.isCarrello = !this.isCarrello;
  }

  //BOTTONI LISTE
  arealibriu(){
    
    window.location.href="/arealibriutenti";
  }
  areadischiu(){
    
    window.location.href="/areadischiutenti";
  }
  areagiochiu(){
    
    window.location.href="/areagiochiutenti";
  }

  
  //LOGOUT
  logout(){
    sessionStorage.clear();
    window.location.href="/";
  }

}
