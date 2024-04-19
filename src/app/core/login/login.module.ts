import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AcessarContaComponent } from './components/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { EsqueceuSenhaComponent } from './components/esqueceu-senha/esqueceu-senha.component';


@NgModule({
  declarations: [
    AcessarContaComponent,
    CriarContaComponent,
    LoginComponent,
    EsqueceuSenhaComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule
  ],
  exports:[EsqueceuSenhaComponent,]
})
export class LoginModule { }
