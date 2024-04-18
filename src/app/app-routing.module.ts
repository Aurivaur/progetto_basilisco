import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaamministratoreComponent } from './areaamministratore/areaamministratore.component';
import { AreautenteComponent } from './areautente/areautente.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegformComponent } from './regform/regform.component';
import { LibriComponent } from './home/libri/libri.component';
import { DischiComponent } from './home/dischi/dischi.component';
import { GiochiComponent } from './home/giochi/giochi.component';
import { HomeComponent } from './home/home.component';
import { LibriutenteComponent } from './areautente/libriutente/libriutente.component';
import { GiochiutenteComponent } from './areautente/giochiutente/giochiutente.component';
import { DischiutenteComponent } from './areautente/dischiutente/dischiutente.component';

const routes: Routes = [
  {
    //http://localhost:4200/areaamministratore
    path: 'areaamministratore',
    component: AreaamministratoreComponent
  },
  {
    //http://localhost:4200/areautente
    path: 'areautente',
    component: AreautenteComponent
  },
  {
    path : 'arealogin',
    component : LoginformComponent
  },
  {
    path : 'arearegistrazione',
    component : RegformComponent
  },
  {
    path : 'arealibri',
    component : LibriComponent
  },
  {
    path : 'areadischi',
    component : DischiComponent
  },
  {
    path : 'areagiochi',
    component : GiochiComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path: 'arealibriutenti',
    component : LibriutenteComponent
  },
  {
    path: 'areagiochiutenti',
    component : GiochiutenteComponent
  },
  {
    path: 'areadischiutenti',
    component : DischiutenteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
