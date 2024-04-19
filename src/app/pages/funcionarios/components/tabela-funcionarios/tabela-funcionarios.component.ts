import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { FuncionariosService } from 'src/app/shared/services/funcionarios.service';
import { FuncionariosObservableService } from '../../service/funcionarios.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ModalEditarFuncionarioComponent } from '../modal-editar-funcionario/modal-editar-funcionario.component';

@Component({
  selector: 'pilian-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.scss'],
  providers: [MessageService, DialogService]
})

export class TabelaFuncionariosComponent implements OnInit {
  listaFuncionarios: any;
  subscriptionConcluirNovoFuncionario: Subscription | any;
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private readonly osService: FuncionariosObservableService,
    private readonly funcionariosService: FuncionariosService,
    public messageService: MessageService
  ){
    this.subscriptionConcluirNovoFuncionario = this.osService.observableConcluirNovoFuncionario().subscribe((res: any) =>{
      setTimeout(()=>{
        this.listarClientes();
    },300)

  });
  }
  selecionadoFuncionario!: any;
  funcionario:any[] | any

  ngOnInit(): void {
  this.listarClientes();
  }

  ngOnDestroy(): void {
    this.subscriptionConcluirNovoFuncionario.unsubscribe();
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }

  editarFuncionario(funcionario: any){
    this.ref = this.dialogService.open(ModalEditarFuncionarioComponent, {
      header: 'Editar Funcionario',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data:{
        funcionario: funcionario
      },
      maximizable: true
  });

  this.ref.onClose.subscribe((funcionario: any) => {
    console.log(funcionario)
      if (funcionario) {
          this.osService.nextConcluirNovoFuncionario(true);
          this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: 'teste' });
      }
  });

  this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });
  }


  listarClientes() {
    this.funcionariosService.listarFuncionarios().pipe(finalize(() => {
    })).subscribe((response) => {
      console.log(response)
      this.osService.nextFuncionarioDados(response);
      this.listaFuncionarios = response;
    })
  }
  excluirFuncionarios(index:any ){
    console.log(index)
    this.funcionariosService.excluirFuncionarios(index).subscribe(() => {
      this.listarClientes()
        console.log('Item excluído com sucesso.');
        // Faça qualquer outra ação necessária após a exclusão bem-sucedida
      },
      error => {
        console.error('Ocorreu um erro ao excluir o item:', error);
      }
    );
  }
}
