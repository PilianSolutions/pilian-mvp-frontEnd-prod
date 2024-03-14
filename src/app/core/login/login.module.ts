import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessarContaComponent } from './components/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    AcessarContaComponent,
    CriarContaComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
})
export class LoginModule { }
