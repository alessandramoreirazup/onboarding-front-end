import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ModalInputInfoComponent } from '../modal-input-info/modal-input-info.component'

@Component({
  selector: 'app-modal-welcome',
  templateUrl: './modal-welcome.component.html',
  styleUrls: ['./modal-welcome.component.scss']
})
export class ModalWelcomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private modalWelcome: MatDialog,
    private modalForm: MatDialog
  ) { }

  public googleUser: SocialUser;
  
  ngOnInit() {
    this.authService.authState.subscribe((googleUser) => {
      this.googleUser = googleUser;
    });
  }

  closeWelcomeMsg(){
    this.modalWelcome.ngOnDestroy();
    this.openDialog();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';

    this.modalForm.open(ModalInputInfoComponent, {
      width: '50%',
      panelClass: 'custom-modalbox'
    });
  }

}
