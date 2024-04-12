import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaamministratoreComponent } from './areaamministratore/areaamministratore.component';
import { AreautenteComponent } from './areautente/areautente.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegformComponent } from './regform/regform.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
