import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FuncionariosService } from 'src/app/shared/services/funcionarios.service';
import { ModalEditarFotoPerfilFuncionarioComponent } from '../modal-editar-foto-perfil-funcionario/modal-editar-foto-perfil-funcionario.component';

interface cargo {
  name: string,
  code: string
}

@Component({
  selector: 'app-modal-editar-funcionario',
  templateUrl: './modal-editar-funcionario.component.html',
  styleUrls: ['./modal-editar-funcionario.component.scss']
})
export class ModalEditarFuncionarioComponent {
  formGroup: FormGroup | any;
  cargos:cargo[] | any;
  modulos:cargo[] | undefined;
  sexo:cargo[] | undefined;
  selecionadoCargo: any;
  selecionadoModulo: any;
  selecionadoSexo: any;
  refs: DynamicDialogRef | undefined;
  habilitarFoto: boolean = false;
  cargoEditar: any;
  moduloEditar: any;
  constructor(
    private formBuilder: FormBuilder,
    private readonly ref: DynamicDialogRef,
    public dialogService: DialogService,
    private readonly funcionariosService: FuncionariosService,
    public config: DynamicDialogConfig
  ) { }


  ngOnInit() {
    this.initializeForm()
      this.cargos = [
          {name: 'Analista de Demandas', code: '1'},
          {name: 'Analista de Estoques', code: '2'},
          {name: 'Controlador de Estoques', code: '3'},
          {name: 'Coordenador de Compras', code: '4'},
          {name: 'Especialista em Logística', code: '5'},
          {name: 'Especialista em Sistemas de Informação', code: '6'},
          {name: 'Gerente de Estoques', code: '7'},
          {name: 'Supervisor de Expedição', code: '8'},
          {name: 'Supervisor de Recebimento', code: '9'},
          {name: 'Técnico de Inventário', code: '10'}
      ];

      this.modulos = [
        {name: 'Gerenciamento de Estoque', code: '1'},
    ];

  }
  initializeForm() {
    console.log(this.config.data)
    this.formGroup = this.formBuilder.group({
      nomeCompleto: [this.config.data.funcionario.nome, Validators.required],
      email: [this.config.data.funcionario.email, [Validators.required, Validators.email]],
      telefoneRamal: [this.config.data.funcionario.telefone, Validators.required],
      usuario: [this.config.data.funcionario.usuario, Validators.required],
      senha: [this.config.data.funcionario.senha, Validators.required],
      cargo: [this.config.data.funcionario.cargo, Validators.required],
      modulo: [this.config.data.funcionario.modulo, Validators.required],
      foto: [this.config.data.funcionario.foto]
    });
  }

  getFotoPerfil(){
    this.refs = this.dialogService.open(ModalEditarFotoPerfilFuncionarioComponent, {
      header: 'Adicionar Foto de Perfil',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        foto: this.formGroup.value.foto
      }
  });

  this.refs.onClose.subscribe((dataFoto: any) => {
    console.log(dataFoto)
    if (dataFoto) {
      this.habilitarFoto = true
      this.formGroup.patchValue({
        foto: dataFoto
      });
    }else{
      this.habilitarFoto = false
    }
  });

  this.refs.onMaximize.subscribe((value) => {
  });
  }
  onSubmit() {
    const status = Math.random() < 0.5 ? 'online' : 'offline';

    if (this.formGroup.valid) {
      const formData = {
        nome: this.formGroup.value.nomeCompleto,
        email: this.formGroup.value.email,
        telefone: this.formGroup.value.telefoneRamal,
        usuario: this.formGroup.value.usuario,
        senha: this.formGroup.value.senha,
        cargo: this.formGroup.value.cargo.name,
        modulo: this.formGroup.value.modulo.name,
        foto: this.formGroup.value.foto,
        status: status
      };
      this.funcionariosService.EditarFuncionarios(this.config.data.funcionario.id, formData).subscribe((res)=>{
        
      })
      this.ref.close(formData);
    } else {
      console.log('faltando dados', this.formGroup.value)
      // Trate o caso de formulário inválido conforme necessário
    }
  }
  cancelarModalFuncionario(){
    this.ref.close(false);
  }

  limparFormulario() {
    this.formGroup.reset();
  }
}
