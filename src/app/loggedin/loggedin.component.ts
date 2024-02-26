import { Component } from '@angular/core';
import { Router } from '@angular/router';
import OktaAuth from '@okta/okta-auth-js';
import loginConfig from '../okta-login/login.config';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrl: './loggedin.component.css'
})
export class LoggedinComponent {
  constructor(private router: Router) {

  }

  oktaAuth = new OktaAuth(loginConfig.oidc)

  logOut() {
    localStorage.clear()
    window.location.href = "https://dev-63114965.okta.com/login/signout"
  }

  redirectToClientPortal() {
    window.location.href = 'http://localhost:4200/auth/okta';
  }

}
