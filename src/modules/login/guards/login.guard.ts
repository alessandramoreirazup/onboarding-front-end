import { AuthService, SocialUser } from 'angularx-social-login';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  AuthService: any;
  private user: SocialUser;
  private loggedIn: boolean;
 
  // private isAuthenticated: boolean = false;

  // canActivate() {
  //   return this.isAuthenticated;
  // }

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (this.loginService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}

