import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prodotto } from 'src/models/Prodotto';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {

  //avrò una lista di prodotti che aggiungo da vari componenti
  @Input() carrello? : Prodotto[];

  //listacarrello! : Prodotto[];

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

    this.http.get<Prodotto[]>("http://localhost:8080/api/areautente/carrello/all", {headers}).subscribe(risposta =>{
      this.carrello = risposta;
      console.log(this.carrello);
      //this.listacarrello = Array.from(this.carrello.keys());
    })

  }

  elimina(id : number) {
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

    const params = new HttpParams().set('idProdotto', id);

    this.http.get<boolean>("http://localhost:8080/api/areautente/carrello/deleteprodotto", {headers, params}).subscribe(risposta =>{
      if(risposta){
        alert("Eliminazione avvenuta con successo");
        let pos = this.carrello?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.carrello?.splice(pos!, 1);
        }
      }
    })
  }


  acquista() {
    alert("Grazie per l'acquisto!");
    this.svuota();
    window.location.href="/areautente";
  }

  svuota() {
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

    //const params = new HttpParams().set('idProdotto', id);

    this.http.get<boolean>("http://localhost:8080/api/areautente/carrello/svuota", {headers}).subscribe(risposta =>{
      //this.carrello = [];
      console.log(risposta);
    })
  }

}
