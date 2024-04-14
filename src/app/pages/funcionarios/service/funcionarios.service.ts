import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosObservableService {
  private readonly concluirNovoFuncionario: Subject<any> = new Subject;
    private readonly quadrinho: Subject<any> = new Subject;
    private readonly endereco: Subject<any> = new Subject;

    public observableConcluirNovoFuncionario(): Observable<any>{
        return this.concluirNovoFuncionario.asObservable()
    }
    public nextConcluirNovoFuncionario(exibir: any){
        return this.concluirNovoFuncionario.next(exibir);
    }

}
