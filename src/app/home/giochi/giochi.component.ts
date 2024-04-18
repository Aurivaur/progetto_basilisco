import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Gioco } from 'src/models/Gioco';

@Component({
  selector: 'app-giochi',
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.css']
})
export class GiochiComponent {

  @Input() giochi? : Gioco[];
  selected : number = -1;
d: any;

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

    this.http.get<Gioco[]>("http://localhost:8080/api/home/allgiochi", {headers}).subscribe(risposta =>{
      this.giochi = risposta;
    })

  }

  back(){
    
    window.location.href="/home";
  }

  dettaglio(id : number){
    this.selected = id;
  }

  chiudi() {
    this.selected = -1;
  }

}
