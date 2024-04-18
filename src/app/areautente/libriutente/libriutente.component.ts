import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Libro } from 'src/models/Libro';

@Component({
  selector: 'app-libriutente',
  templateUrl: './libriutente.component.html',
  styleUrls: ['./libriutente.component.css']
})
export class LibriutenteComponent {


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

    this.http.get<Libro[]>("http://localhost:8080/api/areautente/alllibri", {headers}).subscribe(risposta =>{
      this.libri = risposta;
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

