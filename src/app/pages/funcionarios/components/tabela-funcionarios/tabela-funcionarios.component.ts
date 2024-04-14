import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { FuncionariosService } from 'src/app/shared/services/funcionarios.service';

@Component({
  selector: 'pilian-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.scss']
})
export class TabelaFuncionariosComponent implements OnInit {
  listaFuncionarios: any;
  constructor(private readonly funcionariosService: FuncionariosService){}
  selecionadoFuncionario!: any;
  funcionario:any[] | any
  ngOnInit(): void {
    this.listarClientes()
  }
  isEven(index: number): boolean {
    return index % 2 === 0;
  }


  listarClientes() {
    this.funcionariosService.listarFuncionarios().pipe(finalize(() => {
    })).subscribe((response) => {
      console.log(response)
      this.listaFuncionarios = response;
    })
  }
}
