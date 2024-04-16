import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utente } from 'src/models/Utente';

@Component({
  selector: 'app-tabellautenti',
  templateUrl: './tabellautenti.component.html',
  styleUrls: ['./tabellautenti.component.css']
})
export class TabellautentiComponent {

  @Input() utenti? : Utente[];

  isUtente = false;

  constructor(private http : HttpClient, private formBuider : FormBuilder){
    this.http = http;
  }


  toggleVediUtenti(){
    this.isUtente = !this.isUtente;
  }

  //CANCELLA UTENTI
  deleteUtenti(id : number){
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
        let pos = this.utenti?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.utenti?.splice(pos!, 1);
        }
      }
    })

  }

}
