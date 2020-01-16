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

  public formUser: FormGroup;
  public googleUser: SocialUser;
  public userData: UserModel;
  public locationObj: LocationObj;
  public podObj: PodObj;
  
  public locationOptions = [
    { nameLocation: 'Belo Horizonte' },
    { nameLocation: 'Campinas' },
    { nameLocation: 'Joinville' },
    { nameLocation: 'São Paulo' },
    { nameLocation: 'Uberlândia' }
  ]

  public podOptions = [
    { namePod: 'Acelera'},
    { namePod: 'Alpha'},
    { namePod: 'Extreme'},
    { namePod: 'GOBIZ'},
    { namePod: 'High Potential'},
    { namePod: 'Integra'},
    { namePod: 'Meta POD'},
    { namePod: 'MSI'},
    { namePod: 'MV POD'},
    { namePod: 'Next'}, 
    { namePod: 'No Limits'} ,
    { namePod: 'Produto Zup'},
    { namePod: 'Red Rocket'},
    { namePod: 'Ser o que vendemos'},
    { namePod: 'SRE'},
    { namePod: 'UAI POD' } 
  ]

  ngOnInit() {

    this.podOptions.sort();
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

  verifyInfo(){
    if(this.formUser.value.pod == 'Qual é a sua POD?' || this.formUser.value.location == 'Onde você está?'){
      alert('Preencha os dados corretamente!')
    }else{
      this.save();
    }
  }

  save(){

    this.userData = new UserModel();
    this.locationObj = new LocationObj();
    this.podObj = new PodObj();

    // montando objeto de user
    this.userData.name =  this.googleUser.name
    this.userData.email = this.googleUser.email
    this.userData.location = this.locationObj;
    this.userData.pod = this.podObj;

    //montando objeto de pod e location
    this.userData.pod.namePod = this.formUser.value.pod
    this.userData.location.nameLocation = this.formUser.value.location


    this.homeService.postUser(this.userData).subscribe((response : UserModel) =>
      this.userData = response
    )

    this.dialog.ngOnDestroy();
    window.location.reload();
  }

}
