import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";


import { UserModel } from './user.model';
import { HomeService } from '../service/home.service';
import { ModalInputInfoComponent } from './modal-input-info/modal-input-info.component';
import { ModalWelcomeComponent } from './modal-welcome/modal-welcome.component';


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
    private modalWelcome: MatDialog,
    private spinner: NgxSpinnerService
    ) {   }

    public googleUser: SocialUser;
    public currentUser: any;
  
  ngOnInit() {
    this.loadSpinner();
    this.getGoogleData();   

  }

  welcomeMsg(){
    this.modalWelcome.open(ModalWelcomeComponent, {
      width: '90%'
    })
  }

  loadSpinner(){
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 2500);
  }

  getGoogleData(){
    this.authService.authState
    .subscribe((googleUser) => {
          this.googleUser = googleUser
          this.getCurrentUser();
        }
      )
  }

  getCurrentUser(){
    return this.homeService.getUser(this.googleUser.email)
    .subscribe((user: any) => {
      this.currentUser = user

      if(!this.currentUser){
        this.welcomeMsg();
      }
    })
  }
}
