import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Gioco } from 'src/models/Gioco';

@Component({
  selector: 'app-giochiutente',
  templateUrl: './giochiutente.component.html',
  styleUrls: ['./giochiutente.component.css']
})
export class GiochiutenteComponent {


  @Input() giochi? : Gioco[];
  gioco? : Gioco;
  selected : number = -1;

  
  constructor(private http : HttpClient)
  {
    this.http = http;
    this.getAllGiochi();
  }

  aggiungiAlCarrello(id : number){
    let token = sessionStorage.getItem("token");
    //Evitiamo di passare il token all'header con un null
    console.log("A", token);
    if(token == null){
      console.log("B");
      token = "";
    }
    console.log("C");
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token
      }
    )
    console.log("D", headers);
    const params = new HttpParams().set('idGioco', id).set('quantita', 1);

    this.http.get("http://localhost:8080/api/areautente/carrello/insertgioco", {headers, params}).subscribe(risposta =>{
      console.log(risposta);
      this.gioco = risposta as Gioco;
    })

    alert("Gioco aggiunto al carrello");

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

    this.http.get<Gioco[]>("http://localhost:8080/api/areautente/allgiochi", {headers}).subscribe(risposta =>{
      this.giochi = risposta;
    })

  }


  //REINDIRIZZAMENTO
  dettaglio(id : number){
    this.selected = id;
  }

  chiudi() {
    this.selected = -1;
  }
  back(){
    
    window.location.href="/areautente";
  }
  carrello() {
    window.location.href="/carrello";
  }
}
