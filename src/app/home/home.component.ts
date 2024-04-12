import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isMainPage = false;

  constructor(private router : Router){
    //Con questo codice controlliamo se siamo 'atterrati' sulla pagina principale (cioe': "/")
    this.router.events.subscribe(evento =>{
      if(evento instanceof NavigationEnd){
        this.isMainPage = evento.urlAfterRedirects === "/arealogin"
      }
    })
  }

  login(){
    
    window.location.href="/arealogin";
  }

  registrazione()
  {
    window.location.href="/arearegistrazione";
  }

}
