import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ApiService<any> {

  constructor(
    override readonly httpClient: HttpClient
  ) {
    super(httpClient);
    super.setEndpoint('users')
  }

  listarClientes(){
    const url = `${AppConfig.settings.urlApi}/${this.endpoint}`
    return this.httpClient.get<any>(url)
  }
}
