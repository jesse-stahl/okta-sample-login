import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrl: './loggedin.component.css'
})
export class LoggedinComponent {
  constructor(private router: Router) {

  }

  redirectToClientPortal() {
    window.location.href = 'http://localhost:4200/auth/okta';
  }

}
