import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Disco } from 'src/models/Disco';


@Component({
  selector: 'app-dischi',
  templateUrl: './dischi.component.html',
  styleUrls: ['./dischi.component.css']
})
export class DischiComponent {

  @Input() dischi? : Disco[];
  selected : number = -1;

  constructor(private http : HttpClient)
  {
    this.http = http;
    this.getAllDischi();
  }

  //SISTEMARE HTTP
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

    this.http.get<Disco[]>("http://localhost:8080/api/home/alldischi", {headers}).subscribe(risposta =>{
      this.dischi = risposta;
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
