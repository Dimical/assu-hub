import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userAuthenticated = false;
  _userName = '';

  constructor(private authenticationService: AuthenticationService) {
    this.userAuthenticated = this.authenticationService.isAuthenticatedUser;
    this._userName = this.authenticationService.userNameAuth;
  }

  logout(): void {
    this.authenticationService.logout();
    this.userAuthenticated = false;
    this._userName = '';
  }

  login(): void {
    this.authenticationService.login('utilisateur', 'motdepasse').subscribe(
      (result) => {
        if (result) {
          this.userAuthenticated = true;
          this._userName = this.authenticationService.userNameAuth;
        }
      },
      (error) => console.error(error)
    );
  }

  get userName(): string {
    return this._userName;
  }

  get isAuthenticated(): boolean {
    return this.userAuthenticated;
  }

}
