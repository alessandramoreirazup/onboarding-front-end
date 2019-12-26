import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuizService } from '../service/quiz.service';
import { AlternativeModel, AlternativeData } from '../../quiz/components/alternative.model';
import { fadeAnimation } from 'src/app/animations';


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

  ) { } 

  allSteps: any;
  allQuestions: any;
  currentQuestion: any;
  filteredQuestions: any;

  alternative: AlternativeData;
  postData: AlternativeData;
  index: number = 0;
  data: String;
  
  progressValue: number = 0;

  ngOnInit() {
    this.getCurrentQuestion();
  }

  nextQuestion() {

    this.index++

    return this.currentQuestion = this.filteredQuestions[this.index];
  }

  sendAnswer(answer: AlternativeModel){
    this.progressValue += 20;

    this.alternative = new AlternativeModel()
 
    this.alternative.id = answer.id
    
    this.quizService.postAlternative(this.alternative).subscribe((res : AlternativeData)=> 
      this.alternative = res
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

  getCurrentQuestion(){
    this.quizService.getAll()
    .subscribe(
      (data) =>{
 
        this.allSteps = data['step'];

        this.allQuestions = this.allSteps.question

        console.log('todas as questões', this.allQuestions)

        this.filteredQuestions = this.allQuestions.filter((question) => {
          if(!question.answered){
            return question;
          }
        } 
        )

        this.reverseArray(this.filteredQuestions)

        this.currentQuestion = this.filteredQuestions[this.index];

        return this.currentQuestion;
        
      }

    )
  }
}
