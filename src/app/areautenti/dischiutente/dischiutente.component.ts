import { Component } from '@angular/core';

@Component({
  selector: 'app-dischiutente',
  templateUrl: './dischiutente.component.html',
  styleUrls: ['./dischiutente.component.css']
})
export class DischiutenteComponent {


  back(){
    
    window.location.href="/areautente";
  }
}
