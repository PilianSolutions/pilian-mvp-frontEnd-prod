import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AcessarContaComponent } from './components/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AcessarContaComponent,
    CriarContaComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule
  ],
})
export class LoginModule { }
