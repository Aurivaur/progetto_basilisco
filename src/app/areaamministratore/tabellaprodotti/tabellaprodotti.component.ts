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

  //Inserisci
  formInserisciDischi : FormGroup;
  formInserisciLibri : FormGroup;
  formInserisciGiochi : FormGroup;
  //Modifica
  formModificaDischi : FormGroup;
  formModificaLibri : FormGroup;
  formModificaGiochi : FormGroup;

  //Boolean
  isLibro = false;
  isInserisciLibro = false;
  isModificaLibro = false;
  isGioco = false;
  isInserisciGioco = false;
  isModificaGioco = false;
  isDisco = false;
  isInserisciDisco = false;
  isModificaDisco = false;


  constructor(private http : HttpClient, private formBuider : FormBuilder){
    this.http = http;
    this.formInserisciDischi = formBuider.group(
      {
        titolo : "",
        quantitamagazzino : "",
        prezzo : "",
        editore : "",
        annopubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        durata : ""
      }
    )
    this.formInserisciLibri = formBuider.group(
      {
        titolo : "",
        quantitamagazzino : "",
        prezzo : "",
        editore : "",
        annopubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        numeropagine : ""
      }
    )
    this.formInserisciGiochi = formBuider.group(
      {
        titolo : "",
        quantitamagazzino : "",
        prezzo : "",
        editore : "",
        annopubblicazione : "",
        descrizione : "",
        etaminima : "",
        mingiocatori : "",
        maxgiocatori : "",
        durata : ""
      }
    )
    this.formModificaDischi = formBuider.group(
      {
        titolo : "",
        quantitamagazzino : "",
        prezzo : "",
        editore : "",
        annopubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        durata : ""
      }
    )
    this.formModificaLibri = formBuider.group(
      {
        titolo : "",
        quantitamagazzino : "",
        prezzo : "",
        editore : "",
        annopubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        numeropagine : ""
      }
    )
    this.formModificaGiochi = formBuider.group(
      {
        titolo : "",
        quantitamagazzino : "",
        prezzo : "",
        editore : "",
        annopubblicazione : "",
        descrizione : "",
        etaminima : "",
        mingiocatori : "",
        maxgiocatori : "",
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
  toggleModificaLibri(){
    this.isModificaLibro = !this.isModificaLibro;
  }

  toggleVediGiochi(){
    this.isGioco = !this.isGioco;
  }
  toggleInsertGiochi(){
    this.isInserisciGioco = !this.isInserisciGioco;
  }
  toggleModificaGiochi(){
    this.isModificaGioco = !this.isModificaGioco;
  }

  toggleVediDischi(){
    this.isDisco = !this.isDisco;
  }

  toggleInsertDischi(){
    this.isInserisciDisco = !this.isInserisciDisco;
  }
  toggleModificaDischi(){
    this.isModificaDisco = !this.isModificaDisco;
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

    const params = new HttpParams().set('idDisco', id);

    this.http.get<boolean>("http://localhost:8080/api/admin/deletedisco", {headers, params}).subscribe(risposta =>{
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

    const params = new HttpParams().set('idLibro', id);

    this.http.get<boolean>("http://localhost:8080/api/admin/deletelibro", {headers, params}).subscribe(risposta =>{
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

    const params = new HttpParams().set('idGioco', id);

    this.http.get<boolean>("http://localhost:8080/api/admin/deletegioco", {headers, params}).subscribe(risposta =>{
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
        annopubblicazione : "",
        descrizione : "",
        autore : "",
        genere : "",
        numeropagine : ""
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
        quantitamagazzino : "",
        prezzo : "",
        editore : "",
        annoPubblicazione : "",
        descrizione : "",
        etaminima : "",
        minGiocatori : "",
        maxGiocatori : "",
        durata : ""
      }
    )
    this.toggleInsertGiochi();
  })
}

//MODIFICA PRODOTTI VARI

modificaLibro(libro : Libro){
  this.formModificaLibri?.patchValue(
    {
        id : libro.id,
        titolo : libro.titolo,
        quantita : libro.quantita,
        prezzo : libro.prezzo,
        editore : libro.editore,
        annopubblicazione : libro.annoPubblicazione,
        descrizione : libro.descrizione,
        autore : libro.autore,
        genere : libro.genere,
        numeropagine : libro.numeroPagine
    }
  );

  this.isModificaLibro = true;
}

modificaDisco(disco : Disco){
  this.formModificaDischi?.patchValue(
    {
        id : disco.id,
        titolo : disco.titolo,
        quantitamagazzino : disco.quantita,
        prezzo : disco.prezzo,
        editore : disco.editore,
        annopubblicazione : disco.annoPubblicazione,
        descrizione : disco.descrizione,
        autore : disco.autore,
        genere : disco.genere,
        durata : disco.durata
    }
  );
  this.isModificaDisco = true;
}

modificaGioco(gioco : Gioco){
  this.formModificaGiochi?.patchValue(
    {
        id : gioco.id,
        titolo : gioco.titolo,
        quantitamagazzino : gioco.quantita,
        prezzo : gioco.prezzo,
        editore : gioco.editore,
        annopubblicazione : gioco.annoPubblicazione,
        descrizione : gioco.descrizione,
        etaminima : gioco.minEta,
        mingiocatori : gioco.minGiocatori,
        maxgiocatori : gioco.maxGiocatori,
        durata : gioco.durata
    }
  );

  this.isModificaGioco = true;
}

//SUBMIT MODIFICA CON RICHIESTA PER PRODOTTI VARI

submitModificaLibro(){
  const formValues = this.formModificaLibri?.value;
  const body = JSON.stringify(formValues);
  console.log("body update: ", body)
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

  this.http.post<boolean>("http://localhost:8080/api/studente/updatelibro", body, {headers}).subscribe(risposta =>{
    if(risposta){
      alert("Modifica avvenuta con successo!");
      
      var libro : Libro = JSON.parse(body) as Libro;

      //Cerco lo studente vecchio nel vettore studenti usando l'id dello studente che sto modificando
      //una volta trovata la posizione uso il metodo .splice() per sostituire l'elemento con uno nuovo cioe' con 'stud'
      var pos = this.libri?.findIndex(x => x.id == libro.id) as number;
      this.libri?.splice(pos, 1, libro);
    }
    else{
      alert("Errore dureante la richiesta di modifica");
    }
  })
  this.toggleModificaLibri();//cosi chiude il modifica 
}

submitModificaGioco(){
  const formValues = this.formModificaGiochi?.value;
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

  this.http.post<boolean>("http://localhost:8080/api/studente/updategioco", body, {headers}).subscribe(risposta =>{
    if(risposta){
      alert("Modifica avvenuta con successo!");
      
      var gioco : Gioco = JSON.parse(body) as Gioco;

      //Cerco lo studente vecchio nel vettore studenti usando l'id dello studente che sto modificando
      //una volta trovata la posizione uso il metodo .splice() per sostituire l'elemento con uno nuovo cioe' con 'stud'
      var pos = this.giochi?.findIndex(x => x.id == gioco.id) as number;
      this.giochi?.splice(pos, 1, gioco);
    }
    else{
      alert("Errore dureante la richiesta di modifica");
    }
  })
  this.toggleModificaGiochi();
}

submitModificaDisco(){
  const formValues = this.formModificaDischi?.value;
  const body = JSON.stringify(formValues);
  console.log("body update: ", body)
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

  this.http.post<boolean>("http://localhost:8080/api/studente/updatedisco", body, {headers}).subscribe(risposta =>{
    if(risposta){
      alert("Modifica avvenuta con successo!");
      
      var disco : Disco = JSON.parse(body) as Disco;

      //Cerco lo studente vecchio nel vettore studenti usando l'id dello studente che sto modificando
      //una volta trovata la posizione uso il metodo .splice() per sostituire l'elemento con uno nuovo cioe' con 'stud'
      var pos = this.dischi?.findIndex(x => x.id == disco.id) as number;
      this.dischi?.splice(pos, 1, disco);
    }
    else{
      alert("Errore dureante la richiesta di modifica");
    }
  })
  this.toggleModificaDischi();//cosi chiude il modifica 
}








}
