import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-libri',
  templateUrl: './libri.component.html',
  styleUrls: ['./libri.component.css']
})
export class LibriComponent {


  @Input() libri? : Libro[];
  libro? : Libro;
  selected : number = -1;

  constructor(private http : HttpClient)
  {
    this.http = http;
    this.getAllLibri();
  }

 

  getAllLibri(){
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

    this.http.get<Libro[]>("http://localhost:8080/api/home/alllibri", {headers}).subscribe(risposta =>{
      this.libri = risposta;
    })

  }


   //TOGGLE PER DETTAGLIO
   dettaglio(id : number){
    this.selected = id;
  }

  chiudi() {
    this.selected = -1;
  }
  back(){
    
    window.location.href="/home";
  }
}
