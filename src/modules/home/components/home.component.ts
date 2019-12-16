import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UserModel, UserData } from './user.model';
import { HomeService } from '../service/home.service';
import { ModalInputInfoComponent } from './modal-input-info/modal-input-info.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private modal: MatDialog
    ) { }

  ngOnInit() {

    this.openDialog()

    this.getCurrentUser()

    
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
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user)
      this.loggedIn = (user != null);
    });
  }
}
