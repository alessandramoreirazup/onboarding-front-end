import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuizService } from '../service/quiz.service';
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
  questions: any;
  currentQuestion: any;
 
  rightAnswer: number = 0;
  wrongAnswer: number = 0;
  value: number = 0;


  ngOnInit() {
    this.getCurrentQuestion()
  }

  next() {
    this.value++

    return this.currentQuestion = this.questions[this.value];
  }

  verifyAnswer(answer: any){

    answer ? this.rightAnswer+= 1 : this.wrongAnswer+= 1;
    
    console.log(answer)
    
    if(this.value === this.questions.length -1){
      this.router.navigate(['/result']);
    }

    this.next();
  }

  getCurrentQuestion(){
    this.quizService.getAll()
    .subscribe(
      (data) =>{
        
        this.allSteps = data['steps'];

        this.allSteps.forEach(step => {
          this.questions = step.questions
        });
        
        this.currentQuestion = this.questions[this.value];

        return this.currentQuestion;
        
      }

    )
  }
}
