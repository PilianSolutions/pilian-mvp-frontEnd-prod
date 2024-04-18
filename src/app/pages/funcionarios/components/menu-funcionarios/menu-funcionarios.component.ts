import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { FuncionariosObservableService } from '../../service/funcionarios.service';
import { ModalAdicionarFuncionarioComponent } from '../modal-adicionar-funcionario/modal-adicionar-funcionario.component';

@Component({
  selector: 'pilian-menu-funcionarios',
  templateUrl: './menu-funcionarios.component.html',
  styleUrls: ['./menu-funcionarios.component.scss'],
  providers: [MessageService, DialogService]
})
export class MenuFuncionariosComponent implements OnDestroy  {
  todosFuncionarios: any[] | any;
  funcionariosOnline: any[] | any;
  funcionariosOffline: any[] | any;
  subscriptionFuncionarioDados: Subscription;

  constructor(private readonly osService: FuncionariosObservableService,public dialogService: DialogService, public messageService: MessageService) {
    this.subscriptionFuncionarioDados = this.osService.observableFuncionarioDados().subscribe((res: any) =>{
      if(res){
        this.todosFuncionarios = res
        console.log(res)
      }
    });
  }
  ref: DynamicDialogRef | undefined;

  adicionarFuncionario(){
    this.ref = this.dialogService.open(ModalAdicionarFuncionarioComponent, {
      header: 'Adicionar Funcionario',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
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
  ngOnDestroy() {
    this.subscriptionFuncionarioDados.unsubscribe();
    if (this.ref) {
        this.ref.close();
    }
}
}
