import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, LoginOpt } from "angularx-social-login";

function getAuthServiceConfigs(): AuthServiceConfig{

const opt: LoginOpt = {
  hosted_domain: 'zup.com.br'
}

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("878581987495-v9mhl31sn2plog3n53fgapuqe8gq72tu.apps.googleusercontent.com", opt),
  }
]);

  return config;
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ]
})
export class LoginModule { }
