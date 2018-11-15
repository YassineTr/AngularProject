import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../Services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
     this.createForm();
  }

 createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res => {
          console.log('succes'); // this.router.navigate(['/user']);
        }, err => console.log(err)
      );
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(res => {
        console.log('succes'); // this.router.navigate(['/user']);
        }, err => console.log(err)
      );
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        console.log('succes'); // this.router.navigate(['/user']);
        }, err => console.log(err)
      );
  }

  tryRegister(value) {
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        console.log('succes');
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });

  }

}
