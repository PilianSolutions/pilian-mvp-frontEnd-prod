import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn: 'root'})
export class ApiService<T> {
  protected readonly versionAPI = 'v1'
  protected  endpoint:string = '';
  protected  url: string = '';
  constructor(protected readonly httpClient: HttpClient) { }

 
  setEndpoint(endpoint: string){
    this.endpoint = endpoint
  }
}
