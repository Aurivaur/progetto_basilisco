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

  constructor(private http : HttpClient)
  {
    this.http = http;
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
  back(){
    
    window.location.href="/areautente";
  }
}
