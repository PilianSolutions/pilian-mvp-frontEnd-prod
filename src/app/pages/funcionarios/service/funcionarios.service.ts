import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosObservableService {
  private readonly concluirNovoFuncionario: Subject<any> = new Subject;
    private readonly funcionarioDados: Subject<any> = new Subject;
    private readonly endereco: Subject<any> = new Subject;

    public observableFuncionarioDados(): Observable<any>{
        return this.funcionarioDados.asObservable()
    }
    public nextFuncionarioDados(exibir: any){
        return this.funcionarioDados.next(exibir);
    }
    public observableConcluirNovoFuncionario(): Observable<any>{
        return this.concluirNovoFuncionario.asObservable()
    }
    public nextConcluirNovoFuncionario(exibir: any){
        return this.concluirNovoFuncionario.next(exibir);
    }

}
