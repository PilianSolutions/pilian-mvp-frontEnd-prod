import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AppConfig } from '../../../app/app.config';
import { catchError, throwError } from 'rxjs';
import { LoginObservableService } from 'src/app/modules/login/service/login-observable.service';

@Injectable({
  providedIn: 'root',
  
})

export class LoginService extends ApiService<any>{

  constructor(
    private readonly osService: LoginObservableService, 
    override readonly httpClient: HttpClient
  ) { 
    super(httpClient)
    super.setEndpoint('login')
  }
  
  listarUsuario(){
    const url = `${AppConfig.settings.urlLogin}/${this.endpoint}`
    return this.httpClient.get<any>(url).pipe(catchError((error) => this.modalValidarJsonServer(error)
    ))
  }

  listarTipoUsuario(){
    const url = `${AppConfig.settings.urlLogin}/tipoUsuario`
    return this.httpClient.get<any>(url).pipe(catchError((error) => this.modalValidarJsonServer(error)))
  }

  criarNovoUsuario(usuario: any, senha: any){
    const url = `${AppConfig.settings.urlLogin}/${this.endpoint}`
    const params ={
      "username": usuario,
      "password": senha,
    }
    return this.httpClient.post(url, params).pipe(catchError((error) => this.modalValidarJsonServer(error)))
  }

  modalValidarJsonServer(error: HttpErrorResponse){
    let errorMessage: string = 's';
    if(error.status == 0){
      this.osService.nextLogin(true)
    }
    
    return throwError(errorMessage);
  }
}
