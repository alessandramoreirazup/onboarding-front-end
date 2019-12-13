import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';


import { LoginComponent } from './components/login.component';
import { SocialLoginModule, AuthServiceConfig, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider, LoginOpt } from "angularx-social-login";
import { LoginGuard } from './guards/login.guard';

function getAuthServiceConfigs(): AuthServiceConfig{

const opt: LoginOpt = {
  hosted_domain: 'zup.com.br',
  scope: 'profile email'
}


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("592209104753-2chr06bh7ls6h8tvev6r35setg36oe3i.apps.googleusercontent.com", opt),
  }
]);

  return config;
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    HttpClientModule
    RouterModule

  ],
  providers: [
    LoginGuard,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ], 
})
export class LoginModule { }
