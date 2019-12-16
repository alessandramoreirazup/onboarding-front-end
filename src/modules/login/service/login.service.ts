import { Injectable } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: SocialUser;
  private loggedIn = false;

  constructor(private authService: AuthService) { }

  signOut(): void {
    this.authService.signOut();
  }

  signIn() {
    this.loggedIn = true;
  }

  login() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  isLoggedIn(): Boolean {
    return this.loggedIn;
  }

  authUser(){
    return this.login;
  }

}
