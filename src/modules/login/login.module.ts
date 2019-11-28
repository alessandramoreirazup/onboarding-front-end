import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login.component';
import { ButtonGoogleComponent } from './button-google/button-google.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialloginConfig';



@NgModule({
  declarations: [LoginComponent, ButtonGoogleComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    SocialLoginModule.initialize(getAuthServiceConfigs)
  ]
})
export class LoginModule { }
