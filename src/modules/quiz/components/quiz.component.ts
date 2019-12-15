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
  value: number = 0;
  postData: AlternativeData;

  data: String

  ngOnInit() {
    this.getCurrentQuestion();
  }

  next() {

    this.value++

    return this.currentQuestion = this.filteredQuestions[this.value];
  }

  // sendAlternative(){
  
  // }

  verifyAnswer(answer: AlternativeModel){
    this.alternative = new AlternativeModel()
 
    this.alternative.id = answer.id
    this.alternative.description = answer.description
    
    this.quizService.postData(this.alternative).subscribe((res : AlternativeData)=> 
      this.postData = res
    )

    if(this.value === this.filteredQuestions.length -1){
      this.router.navigate(['/result']);
    }

    this.next();
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

        console.log(this.allQuestions)

        this.filteredQuestions = this.allQuestions.filter((question) => {
          if(!question.answered){
            return question;
          }
        } 
        )

        this.reverseArray(this.filteredQuestions)

        this.currentQuestion = this.filteredQuestions[this.value];

        return this.currentQuestion;
        
      }

    )
  }
}
