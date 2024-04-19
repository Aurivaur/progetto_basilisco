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

  aggiungiAlCarrello(prodotto: Prodotto)
  {
    this.carrello.push(prodotto);
  }

  acquista() {
    this.carrello = [];
    alert("Grazie per l'acquisto!");
    window.location.href="/areautente";
  }

}
