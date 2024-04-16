import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(private http : HttpClient, private formBuider : FormBuilder){
    this.http = http;
  }

  

}
