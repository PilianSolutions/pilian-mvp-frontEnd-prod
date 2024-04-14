import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AppConfig } from 'src/app/app.config';

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

  CriarFuncionarios(dados: any){
    const url = `${AppConfig.settings.urlApi}/${this.endpoint}`
    return this.httpClient.post<any>(url, dados)
  }
}
