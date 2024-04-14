import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalAdicionarFuncionarioComponent } from '../modal-adicionar-funcionario/modal-adicionar-funcionario.component';
import { FuncionariosObservableService } from '../../service/funcionarios.service';

@Component({
  selector: 'pilian-menu-funcionarios',
  templateUrl: './menu-funcionarios.component.html',
  styleUrls: ['./menu-funcionarios.component.scss'],
  providers: [MessageService, DialogService]
})
export class MenuFuncionariosComponent implements OnDestroy  {

  constructor(private readonly osService: FuncionariosObservableService,public dialogService: DialogService, public messageService: MessageService) {}
  ref: DynamicDialogRef | undefined;

  adicionarFuncionario(){
    this.ref = this.dialogService.open(ModalAdicionarFuncionarioComponent, {
      header: 'Adicionar Funcionario',
      width: '50%',
      height: '60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
  });

  this.ref.onClose.subscribe((funcionario: any) => {
    console.log(funcionario)
      if (funcionario) {
          this.osService.nextConcluirNovoFuncionario(funcionario);
          this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: 'teste' });
      }
  });

  this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
  });
  }
  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}
}
