import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getRole(): string {
    return localStorage.getItem('role') || 'guest';
  }

  login(role: string = 'user') {
    localStorage.setItem('user', 'true');
    localStorage.setItem('role', role);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  }
}