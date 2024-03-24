import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async canActivate(): Promise<boolean> {
    try {
      const isAuthenticated = await this.authService.isAuthenticated();
      if (isAuthenticated) {
        return true; // Se houver dados de usuário no IndexedDB, permite a navegação
      } else {
        this.router.navigate(['/']); // Se não houver dados de usuário no IndexedDB, redireciona para a tela de login
        return false;
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      return false; // Em caso de erro, impede a navegação
    }
  }
}
