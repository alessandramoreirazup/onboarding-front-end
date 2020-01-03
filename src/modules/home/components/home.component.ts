import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";


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
    private modal: MatDialog,
    private spinner: NgxSpinnerService
    ) {   }

    public googleUser: SocialUser;
    public currentUser: UserModel;
  
  ngOnInit() {
    this.loadSpinner();
    this.getGoogleData();   
  }

  loadSpinner(){
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 2500);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
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
        this.openDialog();
      }
    })
  }
}
