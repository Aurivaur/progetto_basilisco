import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Disco } from 'src/models/Disco';

@Component({
  selector: 'app-dischiutente',
  templateUrl: './dischiutente.component.html',
  styleUrls: ['./dischiutente.component.css']
})
export class DischiutenteComponent {
  
  
  @Input() dischi? : Disco[];

  constructor(private http : HttpClient)
  {
    this.http = http;
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

    this.http.get<Disco[]>("http://localhost:8080/api/areautente/alldischi", {headers}).subscribe(risposta =>{
      this.dischi = risposta;
    })

  }


  //REINDIRIZZAMENTO
  back(){
    
    window.location.href="/areautente";
  }

}
