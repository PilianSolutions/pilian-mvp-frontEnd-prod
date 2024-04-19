import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AcessarContaComponent } from '../login/components/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { Login2RoutingModule, } from './login2-routing.module';
import { Login2Component } from './login2.component';


@NgModule({
  declarations: [
    CriarContaComponent,
    Login2Component,
  ],
  imports: [
    CommonModule,
    Login2RoutingModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule
  ],
})
export class Login2Module { }
