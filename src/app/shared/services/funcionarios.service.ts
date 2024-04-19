import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService extends ApiService<any>  {

  constructor(
    override readonly httpClient: HttpClient
  ) {
    super(httpClient);
    super.setEndpoint('funcionarios')
  }

  listarFuncionarios(){
    const url = `${AppConfig.settings.urlApi}/${this.endpoint}`
    return this.httpClient.get<any>(url)
  }

  filtrarFuncionarios(dadosFuncionarios:any){
    const url = `${AppConfig.settings.urlApi}/${this.endpoint}?${dadosFuncionarios}`
    return this.httpClient.get<any>(url)
  }

  CriarFuncionarios(dados: any){
    const url = `${AppConfig.settings.urlApi}/${this.endpoint}`
    return this.httpClient.post<any>(url, dados)
  }
  EditarFuncionarios(id: any, dados: any){
    const url = `${AppConfig.settings.urlApi}/${this.endpoint}?${id}`
    return this.httpClient.put<any>(url, dados)
  }
  excluirFuncionarios(itemId: number): Observable<any> {
    const url = `${AppConfig.settings.urlApi}/${this.endpoint}?id=${itemId}`
    return this.httpClient.delete(url);
  }
}
