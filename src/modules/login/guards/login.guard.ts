import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  // private isAuthenticated: boolean = false;

  // canActivate() {
  //   return this.isAuthenticated;
  // }

  constructor(
    private loginService: LoginService,
    private router: Router
  ){ }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.login){
      return true;
    } 

    this.router.navigate(['/login']);
    return false;
  }
  
}

