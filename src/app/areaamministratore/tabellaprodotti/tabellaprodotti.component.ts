import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Disco } from 'src/models/Disco';
import { Gioco } from 'src/models/Gioco';
import { Libro } from 'src/models/Libro';
import { Persona } from 'src/models/Persona';
import { Prodotto } from 'src/models/Prodotto';
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




}
