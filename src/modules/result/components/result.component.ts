import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { ResultService } from '../service/result.service';
import { HomeService } from 'src/modules/home/service/home.service';
import { UserModel } from 'src/modules/home/components/user.model';
import { UserQuizModel } from 'src/modules/quiz/components/alternative.model';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss','../../quiz/components/quiz.component.scss' ]
})
export class ResultComponent implements OnInit {

  constructor(
    private resultService: ResultService,
    private authService: AuthService,
    private homeService: HomeService
  ) { }

  public googleUser: SocialUser;
  public loggedIn: boolean;
  public currentUser: any;
  public userWithId: UserQuizModel;
  public scoreResult: any;
  
  value: number = 70; // valor de testes

  ngOnInit() {
    this.getGoogleData();
  }


  getGoogleData(){
    this.authService.authState
    .subscribe((googleUser) => {
          this.googleUser = googleUser
          this.getCurrentUser()
        }
      )
  }

  getCurrentUser(){
    return this.homeService.getUser(this.googleUser.email)
    .subscribe((user: UserModel) => {
      this.currentUser = user

      this.userWithId = new UserQuizModel()
      this.userWithId.id = this.currentUser.id

      this.updateResult(this.userWithId)
    })
  }

  updateResult(user: UserQuizModel){
    this.resultService.postResult(user)
    .subscribe((res) => {
      this.scoreResult = res
    })
  }
  
}
