import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  
  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isAuthenticated(): boolean {
    const isLoggedIn = localStorage.getItem('loggedIn');
    return isLoggedIn === 'true' ? true : false;
  }
}
