import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Prodotto } from 'src/models/Prodotto';
import { Utente } from 'src/models/Utente';

@Component({
  selector: 'app-areaamministratore',
  templateUrl: './areaamministratore.component.html',
  styleUrls: ['./areaamministratore.component.css']
})
export class AreaamministratoreComponent {

  @Input() prodotti? : Prodotto[];
  @Input() utenti? : Utente[];

  constructor(private http : HttpClient){
    this.http = http;
  }

  //LISTA UTENTI E PRODOTTI VISIBILI DALL'ADMIN
  getAllUtenti(){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }
    
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token,
      }
    )

    this.http.get<Utente[]>("http://localhost:8080/api/utenti/all", {headers}).subscribe(risposta =>{
      this.utenti = risposta;
    })
  }

  getAllProdotti(){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }
    
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token,
      }
    )

    this.http.get<Prodotto[]>("http://localhost:8080/api/prodotti/all", {headers}).subscribe(risposta =>{
      this.prodotti = risposta;
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
          'role' : 'ADMIN'
        }
      );

      this.http.get("http://localhost:8080/api/login/checklogin", {headers}).subscribe(risposta =>{
        let check = risposta as boolean;
        if(!check){
          alert("Non sei autorizzato ad accedere a questa pagina")
          window.location.href="/";
        }
        else{
          let id  = token?.split("-")[1] as string;
          
          //richieste per informazini necessarie
          this.getAllProdotti();
          this.getAllUtenti();
          
        }
      })
    }
  }
 

  //LOGOUT

  logout(){
    sessionStorage.clear();
    window.location.href="/";
  }




}
