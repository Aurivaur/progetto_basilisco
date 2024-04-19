import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Disco } from 'src/models/Disco';

@Component({
  selector: 'app-dischiutente',
  templateUrl: './dischiutente.component.html',
  styleUrls: ['./dischiutente.component.css']
})
export class DischiutenteComponent {
  
  
  @Input() dischi? : Disco[];
  disco? : Disco;
  selected : number = -1;


  constructor(private http : HttpClient)
  {
    this.http = http;
    this.getAllDischi();
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
    const params = new HttpParams().set('idDisco', id).set('quantita', 1);

    this.http.get("http://localhost:8080/api/areautente/carrello/insertdisco", {headers, params}).subscribe(risposta =>{
      console.log(risposta);
      this.disco = risposta as Disco;
    })

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

    this.http.get<Disco[]>("http://localhost:8080/api/areautente/alldischi", {headers}).subscribe(risposta =>{
      this.dischi = risposta;
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
