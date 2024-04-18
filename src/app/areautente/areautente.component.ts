import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Disco } from 'src/models/Disco';
import { Gioco } from 'src/models/Gioco';
import { Libro } from 'src/models/Libro';
import { LoginStatus } from 'src/models/LoginStatus';
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
  @Input() libri? : Libro[];
  @Input() giochi? : Gioco[];
  @Input() dischi? : Disco[];
  @Input() token? : LoginStatus;

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
          this.getRecentiDischi();
          this.getRecentiGiochi();
          this.getRecentiLibri();
          //richieste per informazini necessarie - DA FARE
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


  //LISTE
  getRecentiLibri(){
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

    this.http.get<Libro[]>("http://localhost:8080/api/areautente/recentilibri", {headers}).subscribe(risposta =>{
      this.libri = risposta;
    })
  }

  getRecentiGiochi(){
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

    this.http.get<Gioco[]>("http://localhost:8080/api/areautente/recentigiochi", {headers}).subscribe(risposta =>{
      this.giochi = risposta;
    })
  }

  getRecentiDischi(){
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

    this.http.get<Disco[]>("http://localhost:8080/api/areautente/recentidischi", {headers}).subscribe(risposta =>{
      this.dischi = risposta;
    })
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
