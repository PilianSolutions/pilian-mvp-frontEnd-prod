import { Component, OnInit } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { FuncionariosService } from 'src/app/shared/services/funcionarios.service';
import { FuncionariosObservableService } from '../../service/funcionarios.service';

@Component({
  selector: 'pilian-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.scss']
})
export class TabelaFuncionariosComponent implements OnInit {
  listaFuncionarios: any;
  subscriptionConcluirNovoFuncionario: Subscription | any;

  constructor(private readonly osService: FuncionariosObservableService, private readonly funcionariosService: FuncionariosService){
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
