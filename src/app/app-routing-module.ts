import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { CalcularMedia } from './calcular-media/calcular-media';
import { Apolice } from './apolice/apolice';
import { Conversor } from './conversor/conversor';
import { IMC } from './imc/imc';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'calcular-media', component: CalcularMedia},
  {path: 'apolice', component: Apolice},
  {path: 'conversor', component: Conversor},
  {path: 'IMC', component: IMC}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
