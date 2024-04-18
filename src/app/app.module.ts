import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AreautenteComponent } from './areautente/areautente.component';
import { AreaamministratoreComponent } from './areaamministratore/areaamministratore.component';
import { TabellautentiComponent } from './areaamministratore/tabellautenti/tabellautenti.component';
import { TabellaprodottiComponent } from './areaamministratore/tabellaprodotti/tabellaprodotti.component';
import { HomeComponent } from './home/home.component';
import { RegformComponent } from './regform/regform.component';
import { LibriComponent } from './home/libri/libri.component';
import { DischiComponent } from './home/dischi/dischi.component';
import { GiochiComponent } from './home/giochi/giochi.component';
import { DischiutenteComponent } from './areautente/dischiutente/dischiutente.component';
import { GiochiutenteComponent } from './areautente/giochiutente/giochiutente.component';
import { LibriutenteComponent } from './areautente/libriutente/libriutente.component';
import { CarrelloComponent } from './areautente/carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    AreautenteComponent,
    AreaamministratoreComponent,
    TabellautentiComponent,
    TabellaprodottiComponent,
    HomeComponent,
    RegformComponent,
    LibriComponent,
    DischiComponent,
    GiochiComponent,
    DischiutenteComponent,
    GiochiutenteComponent,
    LibriutenteComponent,
    CarrelloComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
