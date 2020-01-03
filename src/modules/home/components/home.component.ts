import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UserModel } from './user.model';
import { HomeService } from '../service/home.service';
import { ModalInputInfoComponent } from './modal-input-info/modal-input-info.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private googleUser: SocialUser;
  private loggedIn: boolean;
  private photoUrl: any;


  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private modal: MatDialog,
    private router: Router
    ) { }

  ngOnInit() {

    this.openDialog();

    this.getCurrentUser();
    
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';

    this.modal.open(ModalInputInfoComponent, {
      width: '80%',
      panelClass: 'custom-modalbox'
    });
  }

  getCurrentUser(){
    this.authService.authState.subscribe((googleUser) => {
      this.googleUser = googleUser;
      console.log(googleUser.email)
    });
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/']);
    sessionStorage.clear();
    sessionStorage.setItem('isLoggedIn', 'false');
  }
}
