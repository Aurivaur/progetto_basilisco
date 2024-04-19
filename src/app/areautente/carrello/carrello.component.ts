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
  @Input() carrello? : Map<Prodotto, number>;

  listacarrello! : Prodotto[];

  //carrello! : Prodotto[];


  constructor(private http : HttpClient){
    this.http = http;
    this.getCarrello();
  }

  getCarrello(){
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

    this.http.post<Map<Prodotto,number>>("http://localhost:8080/api/areautente/carrello/all", {headers}).subscribe(risposta =>{
      this.carrello = risposta;
    })

  }


  acquista() {
    alert("Grazie per l'acquisto!");
    window.location.href="/areautente";
  }

}
