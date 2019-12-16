import { Component, OnInit, ɵConsole } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login"
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

  login() {
    this.loginService.login().then((googleResponse) => {
      this.loginService.signIn();
      if (this.userService.getUser) {

      } else {
        let user = {
          idGoogle: googleResponse.id,
          name: googleResponse.name,
          email: googleResponse.email
        }
        this.userService.registerUser(user).subscribe((user) => {
          console.log(user)
          console.log(googleResponse)

        });
      }
      this.router.navigateByUrl("/home")
    });
  }

  signOut() {
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