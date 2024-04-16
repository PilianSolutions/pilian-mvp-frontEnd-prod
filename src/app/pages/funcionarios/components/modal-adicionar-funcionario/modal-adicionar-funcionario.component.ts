import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FuncionariosService } from 'src/app/shared/services/funcionarios.service';
import { ModalEditarFotoPerfilFuncionarioComponent } from '../modal-editar-foto-perfil-funcionario/modal-editar-foto-perfil-funcionario.component';

interface cargo {
  name: string,
  code: string
}

@Component({
  selector: 'app-modal-adicionar-funcionario',
  templateUrl: './modal-adicionar-funcionario.component.html',
  styleUrls: ['./modal-adicionar-funcionario.component.scss']
})
export class ModalAdicionarFuncionarioComponent {
  formGroup: FormGroup | any;
  cargos:cargo[] | any;
  modulos:cargo[] | undefined;
  sexo:cargo[] | undefined;
  selecionadoCargo: any;
  selecionadoModulo: any;
  selecionadoSexo: any;
  refs: DynamicDialogRef | undefined;
  constructor(private formBuilder: FormBuilder,private readonly ref: DynamicDialogRef, public dialogService: DialogService, private readonly funcionariosService: FuncionariosService) { }


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

    this.sexo = [
      {name: 'Masculino', code: 'm'},
      {name: 'Feminino', code: 'f'},
  ];
  }
  initializeForm() {
    this.formGroup = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefoneRamal: ['', Validators.required],
      cargo: ['', Validators.required],
      modulo: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }
  getFotoPerfil(){
    this.refs = this.dialogService.open(ModalEditarFotoPerfilFuncionarioComponent, {
      header: 'Adicionar Foto de Perfil',
      width: '50%',
      height: '60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
  });

  this.refs.onClose.subscribe((funcionario: any) => {

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
        cargo: this.formGroup.value.cargo.name,
        modulo: this.formGroup.value.modulo.name,
        sexo: this.formGroup.value.sexo.code,
        status: status
      };
      this.funcionariosService.CriarFuncionarios(formData).subscribe((res)=>{
      })
      this.ref.close(true);
      console.log(formData);
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
