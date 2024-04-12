import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaamministratoreComponent } from './areaamministratore/areaamministratore.component';
import { AreautenteComponent } from './areautente/areautente.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
