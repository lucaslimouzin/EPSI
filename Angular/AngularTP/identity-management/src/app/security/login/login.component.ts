import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group( {
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  processRunning = false;
  private formSubmitAttempt = false;

  private getFieldValue(name: string) {
    return this.form.get(name) == null ? '' : this.form.get(name)!.value;
  }

  constructor(
      private fb : FormBuilder,
      private authentificationService: AuthentificationService,
      public router: Router,
      private snackBar: MatSnackBar
  ) {}

  isFieldInvalid(field: string) {
    const control = this.form.get(field);
    return control == null
    ? false
        : (!control.valid && control.touched) ||
        (control.untouched && this.formSubmitAttempt);
  }

  onSubmit() {
    if (this.form.valid) {
      this.processRunning = true;
      this.authentificationService.loginWithRole(
          this.getFieldValue('username'),
          this.getFieldValue('password'),
  'ROLE_SUPER_ADMIN'
      ).subscribe(
      {
          next:(response) => {
            if (AuthentificationService.isLoggedIn()) {
              this.processRunning = false;
              this.router.navigate([this.authentificationService.redirectUrl]).then((e) => {
                if (!e) {
                  console.error('Navigation has failed !');
                }
              });
            } else {
                throw new Error();
            }
          },
          error: (e) => {
            this.processRunning = false;
            this.snackBar.open('Login ou mot de passe invalide !', 'X');
            console.error(e);
          },
              complete: () => console.info('complete')
      });
    }
    this.formSubmitAttempt = true;
  }

}
