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
import { ModalEditarFotoPerfilFuncionarioComponent } from './components/modal-editar-foto-perfil-funcionario/modal-editar-foto-perfil-funcionario.component';
import { MenuModule } from 'primeng/menu';
import {MatMenuModule} from '@angular/material/menu';

import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LySliderModule } from '@alyle/ui/slider';
import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyThemeModule } from '@alyle/ui';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask'
import { ModalEditarFuncionarioComponent } from './components/modal-editar-funcionario/modal-editar-funcionario.component';
import { ToastModule } from 'primeng/toast';
import { ModalRemoverFuncionarioComponent } from './components/modal-remover-funcionario/modal-remover-funcionario.component';
@NgModule({
  declarations: [
    FuncionariosComponent,
    MenuFuncionariosComponent,
    TabelaFuncionariosComponent,
    ModalAdicionarFuncionarioComponent,
    ModalEditarFuncionarioComponent,
    ModalEditarFotoPerfilFuncionarioComponent,
    ModalRemoverFuncionarioComponent
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
    NgxMaskPipe,
    ButtonModule,
    LyImageCropperModule,
    LySliderModule,
    LyButtonModule,
    LyIconModule,
    LyThemeModule,
    MatMenuModule,
    ToastModule
  ],
  exports:[
    ModalEditarFotoPerfilFuncionarioComponent,
    ModalAdicionarFuncionarioComponent
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class FuncionariosModule { }
