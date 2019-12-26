import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService } from 'angularx-social-login';

import { UserModel, LocationObj, PodObj } from '../user.model';
import { HomeService } from '../../service/home.service';
import { LoginService } from 'src/modules/login/service/login.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-input-info',
  templateUrl: './modal-input-info.component.html',
  styleUrls: ['./modal-input-info.component.scss']
})
export class ModalInputInfoComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  private googleUser: SocialUser;
  private userData: UserModel;
  private userLocation: String = 'Onde você está?';
  private userPOD: String = 'Qual é a sua POD?';
  private locationObj: LocationObj;
  private podObj: PodObj;
  
  private locationOptions = [
    { nameLocation: 'Onde você está?'},
    { nameLocation: 'São Paulo' },
    { nameLocation: 'Belo Horizonte' },
    { nameLocation: 'Uberlândia' },
    { nameLocation: 'Joinville' },
    { nameLocation: 'Campinas' }
  ]

  private podOptions = {
    NO_LIMITS: 'No Limits',
    UAI_POD: 'UAI POD',
    RED_ROCKET: 'Red Rocket',
    META_POD: 'Meta POD',
    EXTREME: 'Extreme',
    NEXT: 'Next', 
    ALPHA: 'Alpha',
    ACELERA: 'Acelera',
    MVPOD: 'MV POD',
    MSI: 'MSI',
    GOBIZ: 'GOBIZ',
    INTEGRA: 'Integra',
    SRE: 'SRE',
    HIGH_POTENTIAL: 'High Potential',
    SER_VENDEMOS: 'Ser o que vendemos'
  }

  ngOnInit() {
    this.authService.authState.subscribe((googleUser) => {
      this.googleUser = googleUser;
    });
  }

  verifyPodLocation(){
    for (let property in this.locationOptions) {
      
      if(this.userLocation != property){
        console.log('kkkkkk')
      }
    }

  }

  save(){
    this.verifyPodLocation()

    this.userData = new UserModel();
    this.locationObj = new LocationObj();
    this.podObj = new PodObj();
    
    this.locationObj.nameLocation = this.userLocation;
    this.podObj.namePod = this.userPOD;

    this.userData.name =  this.googleUser.name
    this.userData.email = this.googleUser.email
    this.userData.location = this.locationObj;
    this.userData.pod = this.podObj;


    console.log('como ficou montado o user', this.userData)
    this.homeService.postUser(this.userData).subscribe((response : UserModel) =>
      this.userData = response
    )

    this.dialog.closeAll()
  }

}
