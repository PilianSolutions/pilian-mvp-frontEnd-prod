import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';

import { MenuFuncionariosComponent } from './components/menu-funcionarios/menu-funcionarios.component';
import { TabelaFuncionariosComponent } from './components/tabela-funcionarios/tabela-funcionarios.component';
import { FuncionariosComponent } from './pages/funcionarios.component';

import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalAdicionarFuncionarioComponent } from './components/modal-adicionar-funcionario/modal-adicionar-funcionario.component';

import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    FuncionariosComponent,
    MenuFuncionariosComponent,
    TabelaFuncionariosComponent,
    ModalAdicionarFuncionarioComponent
  ],

  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    FuncionariosRoutingModule,
    DynamicDialogModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ],
  exports:[
    ModalAdicionarFuncionarioComponent
  ]
})
export class FuncionariosModule { }
