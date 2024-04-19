import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prodotto } from 'src/models/Prodotto';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  //avrò una lista di prodotti che aggiungo da vari componenti
  //@Input() carrello? : Prodotto[];

  carrello! : Prodotto[];


  constructor(private http : HttpClient){

    this.http = http;
  }

  aggiugniAlCarrello(prodotto: Prodotto)
  {
    this.carrello.push(prodotto);
  }

  //metto qui ma non so
  acquista(prodotto : Prodotto)
  {
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

    this.http.get<Prodotto>("http://localhost:8080/api/areautente/carrelloinsert", {headers}).subscribe(risposta =>{
      //this.carrello = risposta;
    })

  }
}
