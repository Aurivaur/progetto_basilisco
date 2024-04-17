import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Disco } from 'src/models/Disco';
import { Gioco } from 'src/models/Gioco';
import { Libro } from 'src/models/Libro';
import { Persona } from 'src/models/Persona';
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
  @Input() admin? : Persona[];
  @Input() libri? : Libro[];
  @Input() dischi? : Disco[];
  @Input() giochi? : Gioco[];

  isLibro = false;
  isGioco = false;
  isDisco = false;
  isUtente = false;
  
  
  constructor(private http : HttpClient){
    this.http = http;
    this.checkLogin();
  }
  //LISTA UTENTI, ADMIN E PRODOTTI VISIBILI DALL'ADMIN
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

    this.http.get<Utente[]>("http://localhost:8080/api/admin/allutenti", {headers}).subscribe(risposta =>{
      this.utenti = risposta;
    })
  }

  getAllAdmin(){
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

    this.http.get<Persona[]>("http://localhost:8080/api/admin/alladmin", {headers}).subscribe(risposta =>{
      this.admin = risposta;
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

    this.http.get<Prodotto[]>("http://localhost:8080/api/admin/allprodotti", {headers}).subscribe(risposta =>{
      this.prodotti = risposta;
    })
  }

  //LISTE SEPARATE
  getAllLibri(){
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

    this.http.get<Libro[]>("http://localhost:8080/api/admin/alllibri", {headers}).subscribe(risposta =>{
      this.libri = risposta;
    })

    this.toggleVediLibri();
  }

  getAllDischi(){
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

    this.http.get<Disco[]>("http://localhost:8080/api/admin/alldischi", {headers}).subscribe(risposta =>{
      this.dischi = risposta;
    })

    this.toggleVediDischi();
  }

  getAllGiochi(){
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

    this.http.get<Gioco[]>("http://localhost:8080/api/admin/allgiochi", {headers}).subscribe(risposta =>{
      this.giochi = risposta;
    })

    this.toggleVediGiochi();
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

      this.http.get("http://localhost:8080/api/login/login", {headers}).subscribe(risposta =>{
        let check = risposta as boolean;
        if(!check){
          alert("Non sei autorizzato ad accedere a questa pagina")
          window.location.href="/";
        }
        else{
          let id = token?.split("-")[1] as string;
          
          //richieste per informazini necessarie
          //this.getAllProdotti();
          this.getAllUtenti();
          this.getAllDischi();
          this.getAllGiochi();
          this.getAllLibri();
          //this.getAllAdmin();
          
        }
      })
    }
  }

  //TOGGLE PER VEDERE LE LISTE 
  toggleVediLibri(){
    this.isLibro = !this.isLibro;
  }

  toggleVediGiochi(){
    this.isGioco = !this.isGioco;
  }

  toggleVediDischi(){
    this.isDisco = !this.isDisco;
  }

  toggleVediUtenti(){
    this.isUtente = !this.isUtente;
  }
 

  //LOGOUT

  logout(){
    sessionStorage.clear();
    window.location.href="/";
  }




}
