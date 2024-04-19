import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from 'src/models/Libro';
import { Prodotto } from 'src/models/Prodotto';

@Component({
  selector: 'app-libriutente',
  templateUrl: './libriutente.component.html',
  styleUrls: ['./libriutente.component.css']
})
export class LibriutenteComponent {


  @Input() libri? : Libro[];
  libro? : Libro;
  selected : number = -1;
  
  @Output() carrello = new EventEmitter<Prodotto>();

  constructor(private http : HttpClient)
  {
    this.http = http;
    this.getAllLibri();
  }

  /*aggiungiCarrello(id : number) {
    this.carrello.next(getLibroById(id));
  }*/

  aggiungiLibro(id : number){
    let token = sessionStorage.getItem("token");
    //Evitiamo di passare il token all'header con un null
    if(token == null){
      token = "";
    }
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token
      }
    )
    const params = new HttpParams().set('idLibro', id);

    this.http.get("http://localhost:8080/api/areautente/carrello/insertlibro", {headers, params},).subscribe(risposta =>{
      console.log(risposta);
      this.libro = risposta as Libro;
    })

    this.carrello.next(this.libro!);

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

