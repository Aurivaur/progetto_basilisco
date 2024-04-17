import { Component } from '@angular/core';

@Component({
  selector: 'app-giochiutente',
  templateUrl: './giochiutente.component.html',
  styleUrls: ['./giochiutente.component.css']
})
export class GiochiutenteComponent {


  back(){
    
    window.location.href="/areautente";
  }
}
