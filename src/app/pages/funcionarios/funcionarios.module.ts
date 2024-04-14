import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';

import { MenuFuncionariosComponent } from './components/menu-funcionarios/menu-funcionarios.component';
import { TabelaFuncionariosComponent } from './components/tabela-funcionarios/tabela-funcionarios.component';
import { FuncionariosComponent } from './pages/funcionarios.component';

import { FormsModule } from '@angular/forms';

import { ModalAdicionarFuncionarioComponent } from './components/modal-adicionar-funcionario/modal-adicionar-funcionario.component';

import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    FuncionariosComponent,
    MenuFuncionariosComponent,
    TabelaFuncionariosComponent,
    ModalAdicionarFuncionarioComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    FuncionariosRoutingModule,
    DynamicDialogModule,
    TableModule,
    InputTextModule
  ],
  exports:[
    ModalAdicionarFuncionarioComponent
  ]
})
export class FuncionariosModule { }
