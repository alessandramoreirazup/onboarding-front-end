import { Component, OnInit } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
  private currentUser: any;
  private loggedIn: boolean;
  private photoUrl: any;


  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private modal: MatDialog
    ) { }

  ngOnInit() {
    this.authService.authState.subscribe((googleUser) => {
      this.googleUser = googleUser;
    });

    this.openDialog();

    this.getCurrentUser();
    
    if(this.getCurrentUser()){
      this.modal.closeAll()
    }
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
    return this.homeService.getUser()
    .subscribe((user: any) => {
      return this.currentUser = user
    } 
    )

  }
}
