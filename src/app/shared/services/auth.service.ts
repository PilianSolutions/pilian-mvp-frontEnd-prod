import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private chaveCriptografia = 'chave-super-secreta'; // Chave de criptografia, deve ser mantida em segredo

  constructor() { }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getUsuarioFromIndexedDB().then(usuario => {
        resolve(!!usuario); // Resolve true se o usuário existir no IndexedDB, caso contrário, resolve false
      }).catch(error => {
        console.error('Erro ao verificar autenticação:', error);
        reject(false); // Rejeita false em caso de erro
      });
    });
  }

  salvarDadoUsuarioIndexedDB(usuario: any) {
    return new Promise<void>((resolve, reject) => {
      try {
        const usuarioCriptografado = this.criptografar(JSON.stringify(usuario));
        this.saveUsuarioToIndexedDB(usuarioCriptografado).then(() => {
          console.log('Dados do usuário salvos com sucesso no IndexedDB.');
          resolve();
        }).catch(error => {
          console.error('Erro ao salvar dados do usuário no IndexedDB:', error);
          reject(error);
        });
      } catch (error) {
        console.error('Erro ao criptografar dados do usuário:', error);
        reject(error);
      }
    });
  }

  private criptografar(dados: string): string {
    return CryptoJS.AES.encrypt(dados, this.chaveCriptografia).toString();
  }

  private saveUsuarioToIndexedDB(usuarioCriptografado: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open('UsuariosDB', 1);
      request.onerror = () => {
        console.error('Erro ao abrir IndexedDB.');
        reject(request.error);
      };
      request.onsuccess = (event: any) => {
        const db = event.target.result;
        const transaction = db.transaction(['usuarios'], 'readwrite');
        const objectStore = transaction.objectStore('usuarios');
        const addRequest = objectStore.put(usuarioCriptografado, 'usuario');
        addRequest.onsuccess = () => {
          resolve();
        };
        addRequest.onerror = () => {
          console.error('Erro ao adicionar usuário ao IndexedDB.');
          reject(addRequest.error);
        };
      };
      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore('usuarios');
      };
    });
  }

  private getUsuarioFromIndexedDB(): Promise<any> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open('UsuariosDB', 1);
      request.onerror = () => {
        console.error('Erro ao abrir IndexedDB.');
        reject(request.error);
      };
      request.onsuccess = (event: any) => {
        const db = event.target.result;
        const transaction = db.transaction(['usuarios'], 'readonly');
        const objectStore = transaction.objectStore('usuarios');
        const getRequest = objectStore.get('usuario');
        getRequest.onsuccess = () => {
          resolve(getRequest.result);
        };
        getRequest.onerror = () => {
          console.error('Erro ao obter usuário do IndexedDB.');
          reject(getRequest.error);
        };
      };
      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        db.createObjectStore('usuarios');
      };
    });
  }
}
