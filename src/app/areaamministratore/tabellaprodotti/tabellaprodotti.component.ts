import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Disco } from 'src/models/Disco';
import { Gioco } from 'src/models/Gioco';
import { Libro } from 'src/models/Libro';
import { Utente } from 'src/models/Utente';

@Component({
  selector: 'app-tabellaprodotti',
  templateUrl: './tabellaprodotti.component.html',
  styleUrls: ['./tabellaprodotti.component.css']
})
export class TabellaprodottiComponent {

  @Input() libri? : Libro[];
  @Input() giochi? : Gioco[];
  @Input() dischi? : Disco[];

  constructor(private http : HttpClient, private formBuider : FormBuilder){
    this.http = http;
  }


  isLibro = false;
  
  toggleVediLibri(){
    this.isLibro = !this.isLibro;
  }

  isGioco = false;
  
  toggleVediGiochi(){
    this.isGioco = !this.isGioco;
  }

  isDisco = false;
  
  toggleVediDischi(){
    this.isDisco = !this.isDisco;
  }

  //ELIMINAZIONE VARI PRODOTTI
  deleteDischi(id : number){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );

    const params = new HttpParams().set('idAdmin', id);

    this.http.get<boolean>("http://localhost:8080/api/admin/delete", {headers, params}).subscribe(risposta =>{
      if(risposta){
        alert("Eliminazione avvenuta con successo");
        let pos = this.dischi?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.dischi?.splice(pos!, 1);
        }
      }
    })

  }

  deleteLibri(id : number){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );

    const params = new HttpParams().set('idAdmin', id);

    this.http.get<boolean>("http://localhost:8080/api/admin/delete", {headers, params}).subscribe(risposta =>{
      if(risposta){
        alert("Eliminazione avvenuta con successo");
        let pos = this.libri?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.libri?.splice(pos!, 1);
        }
      }
    })

  }

  deleteGiochi(id : number){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token': token as string
      }
    );

    const params = new HttpParams().set('idAdmin', id);

    this.http.get<boolean>("http://localhost:8080/api/admin/delete", {headers, params}).subscribe(risposta =>{
      if(risposta){
        alert("Eliminazione avvenuta con successo");
        let pos = this.giochi?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.giochi?.splice(pos!, 1);
        }
      }
    })

  }




}
