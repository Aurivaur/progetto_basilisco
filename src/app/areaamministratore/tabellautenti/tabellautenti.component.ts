import { Component, Input } from '@angular/core';
import { Utente } from 'src/models/Utente';

@Component({
  selector: 'app-tabellautenti',
  templateUrl: './tabellautenti.component.html',
  styleUrls: ['./tabellautenti.component.css']
})
export class TabellautentiComponent {

  @Input() utenti? : Utente[];

  isUtente = false;

  toggleVediUtenti(){
    this.isUtente = !this.isUtente;
  }

}
