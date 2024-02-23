import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  isLoggedIn!: boolean

  ngOnInit() {
    const loginToken = localStorage['okta-shared-transaction-storage']

    if (loginToken) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
  }
}
