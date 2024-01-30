import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  template: `
    <h1 mat-dialog-title>Connexion</h1>
    <div mat-dialog-content>
      <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
        <mat-form-field>
          <input matInput placeholder="Identifiant" name="username" ngModel>
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Mot de passe" name="password" ngModel type="password">
        </mat-form-field>
        <button mat-button type="submit">Se connecter</button>
      </form>
    </div>
  `,
})
export class LoginDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {}

  onSubmit(data: { username: string; password: string }) {
    this.dialogRef.close(data);
  }
}