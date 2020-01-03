import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService } from 'angularx-social-login';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { UserModel, LocationObj, PodObj } from '../user.model';
import { HomeService } from '../../service/home.service';


@Component({
  selector: 'app-modal-input-info',
  templateUrl: './modal-input-info.component.html',
  styleUrls: ['./modal-input-info.component.scss']
})
export class ModalInputInfoComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  public formUser: FormGroup
  private googleUser: SocialUser;
  private userData: UserModel;
  private locationObj: LocationObj;
  private podObj: PodObj;
  
  private locationOptions = [
    { nameLocation: 'São Paulo' },
    { nameLocation: 'Belo Horizonte' },
    { nameLocation: 'Uberlândia' },
    { nameLocation: 'Joinville' },
    { nameLocation: 'Campinas' }
  ]

  private podOptions = [
   { namePod: 'No Limits'} ,
   { namePod: 'UAI POD' } ,
   { namePod: 'Red Rocket'} ,
   { namePod: 'Meta POD'},
   { namePod: 'Extreme'},
   { namePod: 'Next'}, 
   { namePod: 'Alpha'},
   { namePod: 'Acelera'},
   { namePod: 'MV POD'},
   { namePod: 'MSI'},
   { namePod: 'GOBIZ'},
   { namePod: 'Integra'},
   { namePod: 'SRE'},
   { namePod: 'High Potential'},
   { namePod: 'Ser o que vendemos'}
  ]

  ngOnInit() {
    this.authService.authState.subscribe((googleUser) => {
      this.googleUser = googleUser;
    });

    this.createForm();
  }

  createForm(){
    this.formUser = this.formBuilder.group({
      pod: ['Qual é a sua POD?'],
      location: ['Onde você está?']
    })
  }

  save(){

    this.userData = new UserModel();
    this.locationObj = new LocationObj();
    this.podObj = new PodObj();

    this.userData.name =  this.googleUser.name
    this.userData.email = this.googleUser.email
    this.userData.location = this.locationObj;
    this.userData.pod = this.podObj;

    this.userData.pod.namePod = this.formUser.value.pod
    this.userData.location.nameLocation = this.formUser.value.location


    console.log('objeto do user completo', this.userData)
    this.homeService.postUser(this.userData).subscribe((response : UserModel) =>
      this.userData = response
    )

    this.dialog.closeAll();
  }

}
