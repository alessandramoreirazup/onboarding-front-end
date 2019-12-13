import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/modules/quiz/service/quiz.service';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss','../../quiz/components/quiz.component.scss' ]
})
export class ResultComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private quizService: QuizService,
    private authService: AuthService) { }
  
  value: number = 30;

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
