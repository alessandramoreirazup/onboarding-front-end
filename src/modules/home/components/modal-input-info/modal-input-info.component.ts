import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { UserModel, UserData } from '../user.model';
import { SocialUser } from 'angularx-social-login';
import { HomeService } from '../../service/home.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-modal-input-info',
  templateUrl: './modal-input-info.component.html',
  styleUrls: ['./modal-input-info.component.scss']
})
export class ModalInputInfoComponent implements OnInit {

  private googleUser: SocialUser;

  private userData: UserData;
  private userProject: String;
  private userPOD: String;
  private userLocation: String;
  private dtInitOnboarding: Date;

  constructor(private homeService: HomeService) { }

  ngOnInit() {

  }

  save(){
    // this.userData.name = this.googleUser.firstName;
    // this.userData.email = this.googleUser.email;
    this.userData.email = 'alessandra.moreira@zup.com.br'
    this.userData.name =  'Alessandra'
    this.userData.location = this.userLocation;
    this.userData.project = this.userProject;
    this.userData.POD = this.userPOD;

    this.homeService.postUser(this.userData).subscribe((response : UserData) =>
    this.userData = response
    )
    console.log(this.userData)

  }

}
