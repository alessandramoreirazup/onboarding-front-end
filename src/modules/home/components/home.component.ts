import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { UserModel } from './user.model';
import { HomeService } from '../service/home.service';
import { ModalInputInfoComponent } from './modal-input-info/modal-input-info.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private modal: MatDialog
    ) {   }

    private googleUser: SocialUser;
    private currentUser: UserModel;
  
  ngOnInit() {
    this.getGoogleData();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
  

    this.modal.open(ModalInputInfoComponent, {
      width: '50%',
      panelClass: 'custom-modalbox'
    });
  }

  getGoogleData(){
    this.authService.authState
    .subscribe((googleUser) => {
          this.googleUser = googleUser
          this.getCurrentUser()
        }
      )
  }

  getCurrentUser(){
    return this.homeService.getUser(this.googleUser.email)
    .subscribe((user: UserModel) => {
      this.currentUser = user

      if(!this.currentUser){
        this.openDialog()
      }
    })
  }
}
