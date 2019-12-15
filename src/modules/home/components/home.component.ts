import { Component, OnInit } from '@angular/core';

import { HomeService } from '../service/home.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
    private authService: AuthService,
    private modal: MatDialog
    ) { }

  ngOnInit() {
    // this.modal.open(this.modalComponent);

    this.openDialog()

      this.authService.authState.subscribe((user) => {
        this.user = user;
        console.log(this.user)
        this.loggedIn = (user != null);
      });
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
}
