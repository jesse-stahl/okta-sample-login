import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import OktaAuth from "@okta/okta-auth-js"
import loginConfig from "./okta-login/login.config"
import { AppComponent } from './app.component';
import { LoginComponent } from './okta-login/login.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { LoggedinComponent } from './loggedin/loggedin.component';

const oktaAuth = new OktaAuth(loginConfig.oidc);
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    OktaAuthModule.forRoot({ oktaAuth }),
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'loggedin', component: LoggedinComponent }
    ])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedinComponent,
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useFactory: () => {
        const oktaAuth = new OktaAuth(loginConfig.oidc);
        return {
          oktaAuth,
          onAuthRequired: (oktaAuth: OktaAuth, injector: Injector) => {
            const router = injector.get(Router);
            // Redirect the user to your custom login page
            router.navigate(['/']);
          }
        }
      }
    },
    { provide: '/', useValue: '/' },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
