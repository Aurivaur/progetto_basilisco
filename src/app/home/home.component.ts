import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Libro } from 'src/models/Libro';
import { LoginStatus } from 'src/models/LoginStatus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() libri? : Libro[];
  @Input() token? : LoginStatus;

  isMainPage = false;
  isLogin: boolean = false;

  handleLoginSuccess(isLoggedIn: boolean) 
  {
    this.isLogin = isLoggedIn;
    // Perform any other actions you need upon successful login, such as updating UI elements
  }


  constructor(private router : Router){
    //Con questo codice controlliamo se siamo 'atterrati' sulla pagina principale (cioe': "/")
    this.router.events.subscribe(evento =>{
      if(evento instanceof NavigationEnd){
        this.isMainPage = evento.urlAfterRedirects === "/"
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

  arealibri(){
    
    window.location.href="/arealibri";
  }

  areadischi(){
    
    window.location.href="/areadischi";
  }

  areagiochi(){
    
    window.location.href="/areagiochi";
  }

  logout(){
    sessionStorage.clear();
    window.location.href="/";
  }


}
