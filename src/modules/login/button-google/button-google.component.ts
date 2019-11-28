import { Component, OnInit } from '@angular/core';

import { AuthService, GoogleLoginProvider } from 'angular5-social-login';

@Component({
  selector: 'app-button-google',
  templateUrl: './button-google.component.html',
  styleUrls: ['./button-google.component.scss']
})
export class ButtonGoogleComponent implements OnInit {
  sendToRestApiMethod: any;

  constructor( private socialAuthService: AuthService ) {}

  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
 
    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
       //on success
       //this will return user data from google. What you need is a user token which you will send it to the server
       this.sendToRestApiMethod(userData.idToken);
    });
 }

  ngOnInit() {
  }

}
