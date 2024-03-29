import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_AUTH } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error?: any;

  constructor(
    @Inject(OKTA_AUTH) 
    public oktaAuth: OktaAuth,
    private router: Router
    ) {
  }

  async login() {
    try {
      await this.oktaAuth.signInWithRedirect();
    } catch (err: any) {
      console.error(err);
      this.error = err;
    }
  }

}