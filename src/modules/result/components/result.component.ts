import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

import { ResultService } from '../service/result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss','../../quiz/components/quiz.component.scss' ]
})
export class ResultComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;
  public currentUser: any;

  constructor(
    private resultService: ResultService,
    private authService: AuthService
  ) { }
  
  value: number = 99; // valor de testes

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.getUserResult();
  }


  getUserResult(){
    return this.resultService.getResult()
    .subscribe((user) => {
      this.currentUser = user
      console.log(this.currentUser)

    })
  }
  
}
