import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Disco } from 'src/models/Disco';
import { Gioco } from 'src/models/Gioco';
import { Libro } from 'src/models/Libro';


@Component({
  selector: 'app-tabellaprodotti',
  templateUrl: './tabellaprodotti.component.html',
  styleUrls: ['./tabellaprodotti.component.css']
})
export class TabellaprodottiComponent {

  @Input() libri? : Libro[];
  @Input() giochi? : Gioco[];
  @Input() dischi? : Disco[];
  formInserisciDischi : FormGroup;
  formInserisciLibri : FormGroup;
  formInserisciGiochi : FormGroup;
  isLibro = false;
  isInserisciLibro = false;
  isGioco = false;
  isInserisciGioco = false;
  isDisco = false;
  isInserisciDisco = false;


  constructor(private http : HttpClient, private formBuider : FormBuilder){
    this.http = http;
    this.formInserisciDischi = formBuider.group(
      {
        titolo : "",
        quantita : "",
        prezzo : "",
        editore : "",
        annoPubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        durata : ""
      }
    )
    this.formInserisciLibri = formBuider.group(
      {
        titolo : "",
        quantita : "",
        prezzo : "",
        editore : "",
        annoPubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        numeroPagine : ""
      }
    )
    this.formInserisciGiochi = formBuider.group(
      {
        titolo : "",
        quantita : "",
        prezzo : "",
        editore : "",
        annoPubblicazione : "",
        descrizione : "",
        minEta : "",
        minGiocatori : "",
        maxGiocatori : "",
        durata : ""
      }
    )

  }


  //TOGGLE PULSANTI
  toggleVediLibri(){
    this.isLibro = !this.isLibro;
  }

  toggleInsertLibri(){
    this.isInserisciLibro = !this.isInserisciLibro;
  }

  toggleVediGiochi(){
    this.isGioco = !this.isGioco;
  }
  toggleInsertGiochi(){
    this.isInserisciGioco = !this.isInserisciGioco;
  }

  toggleVediDischi(){
    this.isDisco = !this.isDisco;
  }

  toggleInsertDischi(){
    this.isInserisciDisco = !this.isInserisciDisco;
  }

  //ELIMINAZIONE VARI PRODOTTI
  deleteDischi(id : number){
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
        let pos = this.dischi?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.dischi?.splice(pos!, 1);
        }
      }
    })

  }

  deleteLibri(id : number){
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
        let pos = this.libri?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.libri?.splice(pos!, 1);
        }
      }
    })

  }

  deleteGiochi(id : number){
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
        let pos = this.giochi?.findIndex(x => x.id === id)
        if(pos! > -1){
          this.giochi?.splice(pos!, 1);
        }
      }
    })
  }

//AGGIUNGI PRODOTTI VARI
submitInserisciDischi(){

  const formValues = this.formInserisciDischi?.value;

  //jsonifica i dati
  const body = JSON.stringify(formValues);

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

  this.http.post<Disco>("http://localhost:8080/api/admin/insertdisco", body, {headers}).subscribe(risposta =>{

    if(!risposta){
      alert("Errore durante l'esecuzione della richiesta");
    }
    else{
     this.dischi?.push(risposta);
    }

    this.formInserisciDischi?.patchValue(
      {
        titolo : "",
        quantita : "",
        prezzo : "",
        editore : "",
        annoPubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        durata : ""
      }
    )
    this.toggleInsertDischi();
  })
  
}








submitInserisciLibri(){

  const formValues = this.formInserisciLibri?.value;

  //jsonifica i dati
  const body = JSON.stringify(formValues);

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

  this.http.post<Libro>("http://localhost:8080/api/admin/insertlibro", body, {headers}).subscribe(risposta =>{

    if(!risposta){
      alert("Errore durante l'esecuzione della richiesta");
    }
    else{
     this.libri?.push(risposta);
    }

    this.formInserisciLibri?.patchValue(
      {
        titolo : "",
        quantita : "",
        prezzo : "",
        editore : "",
        annoPubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        numeroPagine : ""
      }
    )
    this.toggleInsertLibri();
  })
  
}


submitInserisciGiochi(){

  const formValues = this.formInserisciGiochi?.value;

  //jsonifica i dati
  const body = JSON.stringify(formValues);

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

  this.http.post<Gioco>("http://localhost:8080/api/admin/insertgioco", body, {headers}).subscribe(risposta =>{

    if(!risposta){
      alert("Errore durante l'esecuzione della richiesta");
    }
    else{
     this.giochi?.push(risposta);
    }

    this.formInserisciGiochi?.patchValue(
      {
        titolo : "",
        quantita : "",
        prezzo : "",
        editore : "",
        annoPubblicazione : "",
        descrizione : "",
        minEta : "",
        minGiocatori : "",
        maxGiocatori : "",
        durata : ""
      }
    )
    this.toggleInsertGiochi();
  })
  
}



}
