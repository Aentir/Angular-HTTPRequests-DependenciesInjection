import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpainComponent } from './views/spain/spain.component';
import { FranceComponent } from './views/france/france.component';
import { PortugalComponent } from './views/portugal/portugal.component';
import { AlemaniaComponent } from './views/alemania/alemania.component';

const routes: Routes = [
  {path:'', redirectTo:'spain', pathMatch:'full'},
  {path:'spain', component: SpainComponent},
  {path:'france', component: FranceComponent},
  {path:'portugal', component: PortugalComponent},
  {path:'germany', component: AlemaniaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
