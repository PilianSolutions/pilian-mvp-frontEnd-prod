import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './login2.component';
import { AcessarContaComponent } from './components/acessar-conta/acessar-conta.component';


const routes: Routes = [
  {
    path: '',
    component: AcessarContaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Login2RoutingModule { }
