import { Component } from '@angular/core';

@Component({
  selector: 'app-libriutente',
  templateUrl: './libriutente.component.html',
  styleUrls: ['./libriutente.component.css']
})
export class LibriutenteComponent {


  back(){
    
    window.location.href="/areautente";
  }
}
