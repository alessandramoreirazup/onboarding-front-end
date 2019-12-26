import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { map } from 'rxjs/operators';

import { UserModel, UserLogin } from 'src/modules/home/components/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: SocialUser;
  private loggedIn: boolean;
  private readonly urlPost = 'https://onboardingpgg.herokuapp.com/zupper/exists';
  private response;


  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json; charset=UTF-8',
      'Authorization': ''
    })
  }

  constructor(
    private authService: AuthService,
    private http: HttpClient
    ) { }

  signOut(): void {
    this.authService.signOut();
  }

  login() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  authUser(){
    return this.login;
  }

  sendUser(user: UserLogin){
    console.log('user q eu mando', user)
    return this.http.post(this.urlPost, user)
    .pipe(
      map( response => {
        return response 
      })
    ) 
  }

}
