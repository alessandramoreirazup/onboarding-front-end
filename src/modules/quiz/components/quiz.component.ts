import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { QuizService } from '../service/quiz.service';
import { AlternativeModel, UserQuizModel, ZupperWithAlternativeModel } from '../../quiz/components/alternative.model';
import { fadeAnimation } from 'src/app/animations';
import { AuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  animations: [fadeAnimation]
})
export class QuizComponent implements OnInit {

  constructor(
    private quizService : QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { } 

  userObj: any;
  allQuestions: any;
  currentQuestion: any;
  filteredQuestions: any;
  googleUser: SocialUser;
  userWithAlternative: ZupperWithAlternativeModel;
  currentUser: UserQuizModel;
  alternative: AlternativeModel;
  postData: AlternativeModel;
  index: number = 0;
  userData: any;
  
  progressValue: number = 0;

  ngOnInit() {
    this.loadSpinner();
    this.getGoogleData();
  }

  loadSpinner(){
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

  getCurrentUser(email: String){
    this.quizService.getAll(email)
    .subscribe(
      (data) => {
        this.userData = data
        this.currentUser = new UserQuizModel();
        this.currentUser.id = this.userData.id;
      }
    )
  }

  getCurrentQuestion(email: String){
    this.quizService.getAll(email)
    .subscribe(
      (data) =>{
 
        this.userObj = data['step'];
        this.allQuestions = this.userObj.question

        console.log('todas as questões', this.allQuestions)

        this.filteredQuestions = this.allQuestions.filter((question) => {
          if(!question.answered){
            return question;
          }
        })

        this.reverseArray(this.filteredQuestions)

        this.currentQuestion = this.filteredQuestions[this.index];

        return this.currentQuestion;
        
      }

    )
  }

  getGoogleData(){
    this.authService.authState
    .subscribe((googleUser) => {
      this.googleUser = googleUser
      this.getCurrentUser(this.googleUser.email);
      this.getCurrentQuestion(this.googleUser.email);
    })
  }

  nextQuestion() {

    this.index++

    return this.currentQuestion = this.filteredQuestions[this.index];
  }

  sendAnswer(answer: AlternativeModel){
    this.progressValue += 20;

    this.alternative = new AlternativeModel(); // monta obj alternativa
 
    this.alternative.id = answer.id;
    
    this.userWithAlternative = new ZupperWithAlternativeModel(); // monta um obj com user e alternative
    this.userWithAlternative.alternative =  this.alternative; // atribui a alternativa montada p/ o user
    this.userWithAlternative.zupper = this.currentUser 
 
    this.quizService.postAlternative(this.userWithAlternative).subscribe((res : ZupperWithAlternativeModel)=> {
      this.userWithAlternative = res
    },err => {console.log(err)}
    )

    if(this.index === this.filteredQuestions.length -1){
      this.router.navigate(['/result']);
    }

    this.nextQuestion();
  }

  verifyQuestion(question: any){
    if(!question.answered){
      return question
    }
  }

  reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

}
