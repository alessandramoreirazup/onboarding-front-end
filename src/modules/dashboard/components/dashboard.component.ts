import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  
  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
