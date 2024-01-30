// shared/auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;
  private userName = '';

  login(username: string, password: string): Observable<boolean> {
    // Simulation d'une vérification de nom d'utilisateur et de mot de passe
    if (username === 'utilisateur' && password === 'motdepasse') {
      this.isAuthenticated = true;
      this.userName = username;
      return of(true);
    } else {
      this.isAuthenticated = false;
      this.userName = '';
      return of(false);
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userName = '';
  }

  get isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  get userNameAuth(): string {
    return this.userName;
  }

}
