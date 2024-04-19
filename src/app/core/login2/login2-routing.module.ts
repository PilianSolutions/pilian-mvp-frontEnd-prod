import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessarContaComponent } from '../login/components/acessar-conta/acessar-conta.component';


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
