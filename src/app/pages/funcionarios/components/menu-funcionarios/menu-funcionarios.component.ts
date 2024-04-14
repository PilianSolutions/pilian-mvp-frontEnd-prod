import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalAdicionarFuncionarioComponent } from '../modal-adicionar-funcionario/modal-adicionar-funcionario.component';

@Component({
  selector: 'pilian-menu-funcionarios',
  templateUrl: './menu-funcionarios.component.html',
  styleUrls: ['./menu-funcionarios.component.scss'],
  providers: [MessageService, DialogService]
})
export class MenuFuncionariosComponent implements OnDestroy  {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}
  ref: DynamicDialogRef | undefined;

  adicionarFuncionario(){
    this.ref = this.dialogService.open(ModalAdicionarFuncionarioComponent, {
      header: 'Adicionar Funcionario',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
  });

  this.ref.onClose.subscribe((product: any) => {
      if (product) {
          this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
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
