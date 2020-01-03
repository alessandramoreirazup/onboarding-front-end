import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AdmPanelService {

  private user: SocialUser;
  private loggedIn: boolean = false;
 
  constructor(private authService: AuthService,
    private router: Router) { }
 
  getEmail() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    if(this.user.email === 'beatriz.silva@zup.com'){
      this.loggedIn = true;
      this.router.navigate(['/admpanel']);
      console.log('funcionouu');
      
    } else {
      this.loggedIn = false;
    }
  }
 
}