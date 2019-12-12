import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import{ SocialUser } from "angularx-social-login"
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

  export class LoginComponent implements OnInit {
 
    constructor(private authService: AuthService, private loginService: LoginService, private userService: UserService, private router: Router) { }
   
    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.loginService.login().then((googleResponse) => {
        if (this.userService.getUser) {
        } else {
          let user = {
            idGoogle: googleResponse.id,
            name: googleResponse.name,
            email: googleResponse.email
          }
          this.userService.registerUser(user).subscribe((user) => {
          });
        }
        this.router.navigateByUrl("/home")
      });
    }
   
    signOut(): void {
      this.authService.signOut();
    }
  
  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(this.user)
    // });
  }
    
}