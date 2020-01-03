import { AuthService, SocialUser } from 'angularx-social-login';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/modules/login/service/login.service';

@Injectable({
  providedIn: 'root'
})

export class GuardAdmGuard implements CanActivate {
 
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
      
    if (this.loginService.getEmail()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}


