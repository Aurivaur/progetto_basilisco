import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Disco } from 'src/models/Disco';
import { Gioco } from 'src/models/Gioco';
import { Libro } from 'src/models/Libro';
import { LoginStatus } from 'src/models/LoginStatus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() libri? : Libro[];
  @Input() giochi? : Gioco[];
  @Input() dischi? : Disco[];
  @Input() token? : LoginStatus;

  isMainPage = false;
  isLogin = false;

  constructor(private http : HttpClient, private router : Router){
    //Con questo codice controlliamo se siamo 'atterrati' sulla pagina principale (cioe': "/")
    this.router.events.subscribe(evento =>{
      if(evento instanceof NavigationEnd){
        this.isMainPage = evento.urlAfterRedirects === "/"
      }
    })
    this.http = http;
    this.getRecentiDischi();
    this.getRecentiGiochi();
    this.getRecentiLibri();
    
  }

  //LISTE
  getRecentiLibri(){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }
    
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token,
      }
    )

    this.http.get<Libro[]>("http://localhost:8080/api/home/recentilibri", {headers}).subscribe(risposta =>{
      this.libri = risposta;
    })
  }

  getRecentiGiochi(){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }
    
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token,
      }
    )

    this.http.get<Gioco[]>("http://localhost:8080/api/home/recentigiochi", {headers}).subscribe(risposta =>{
      this.giochi = risposta;
    })
  }

  getRecentiDischi(){
    let token = sessionStorage.getItem("token");
    if(token == null){
      token = "";
    }
    
    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'token' : token,
      }
    )

    this.http.get<Disco[]>("http://localhost:8080/api/home/recentidischi", {headers}).subscribe(risposta =>{
      this.dischi = risposta;
    })
  }

  








  //REINDIRIZZAMENTI
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











  //LOGOUT
  logout(){
    sessionStorage.clear();
    window.location.href="/";
  }




}
