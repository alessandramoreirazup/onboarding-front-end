import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";

import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { UserModel, UserLogin } from 'src/modules/home/components/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  private userData: UserLogin;

  constructor(
    private authService: AuthService, 
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
 
  }

  login() {

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.loginService.login().then((googleResponse) => {
      
      this.userData = {
        name: googleResponse.name,
        email: googleResponse.email
      }

      this.sendUserResponse();

      this.router.navigateByUrl("/home")
    });
  }

  sendUserResponse(){
    this.loginService.sendUser(this.userData).subscribe((response: UserLogin) => {
      this.userData = response
      console.log(this.userData)
    }
    )
  }

  signOut() {
    this.authService.signOut();
  }

}