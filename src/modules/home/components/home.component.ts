import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";


import { UserModel } from './user.model';
import { HomeService } from '../service/home.service';
import { ModalWelcomeComponent } from './modal-welcome/modal-welcome.component';
import { MatStep } from '@angular/material/stepper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private modalWelcome: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

    public googleUser: SocialUser;
    public currentUser: any;
    public steps = [
      {stepId: 1, stepLabel: 'Cultura', completed: false},
      {stepId: 2, stepLabel: 'Jornada Zup', completed: false},
      {stepId: 3, stepLabel: 'Ética', completed: false}
    ]
    public titleMsg: String = '';
  
  ngOnInit() {
    this.loadSpinner();
  }

  welcomeMsg(){
    this.modalWelcome.open(ModalWelcomeComponent, {
      width: '90%'
    })
  }

  showtitleMsg(){

    if (this.currentUser.step.id == null) {
      return this.titleMsg = `Próximo questionário: Cultura`
    }

    if (this.currentUser.step.id) {
      return this.titleMsg = `Próximo questionário: ${this.currentUser.step.stepName}`
    }

    if (this.currentUser.stepCompleted){
      return this.titleMsg = `Quiz completo!`
    }
  }

  verifySteps(){
    if(this.currentUser.step.id == 1){
      this.steps[0].completed = false;
    }

    if(this.currentUser.step.id > 2){
      this.steps[1].completed = true;
    }

    if(this.currentUser.step.id == 3 && this.currentUser.stepCompleted){
      this.steps[2].completed = true;
    }
  }

  loadSpinner(){
    this.spinner.show();
    this.getGoogleData();   

    setTimeout(() => {
      this.spinner.hide();
    }, 2500);
  }

  getGoogleData(){
    this.authService.authState
    .subscribe((googleUser) => {
      this.googleUser = googleUser
      console.log(this.googleUser)
      this.getCurrentUser();
    })
  }

  getCurrentUser(){
    return this.homeService.getUser(this.googleUser.email)
    .subscribe((user: any) => {
      this.currentUser = user
      console.log('usuario do back', this.currentUser)
      if(!this.currentUser){
        this.welcomeMsg();
      }
      this.verifySteps();
      this.showtitleMsg();
    })
  }
}
