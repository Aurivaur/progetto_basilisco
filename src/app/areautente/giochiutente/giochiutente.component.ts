import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //SISTEMARE HTTP
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
}
