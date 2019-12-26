import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService } from 'angularx-social-login';

import { UserModel } from '../user.model';
import { HomeService } from '../../service/home.service';
import { LoginService } from 'src/modules/login/service/login.service';

@Component({
  selector: 'app-modal-input-info',
  templateUrl: './modal-input-info.component.html',
  styleUrls: ['./modal-input-info.component.scss']
})
export class ModalInputInfoComponent implements OnInit {

  private googleUser: SocialUser;
  private userData: UserModel;
  private userPOD: String;
  private userLocation: String = 'Selecione sua localização';

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private loginService: LoginService

    ) { }

  ngOnInit() {

    this.authService.authState.subscribe((googleUser) => {
      this.googleUser = googleUser;
    });
  }

  save(){
    this.userData = new UserModel();

    this.userData.name =  this.googleUser.name
    this.userData.email = this.googleUser.email
    this.userData.location = this.userLocation;
    this.userData.pod = this.userPOD;

    this.homeService.postUser(this.userData).subscribe((response : UserModel) =>
      this.userData = response
    )

  }

}
