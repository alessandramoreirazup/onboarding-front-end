import { Component, OnInit, Input } from '@angular/core';
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
  isCorrect: boolean;

  rightAnswer: number = 0;
  wrongAnswer: number = 0;
  value: number = 0;


  ngOnInit() {
    this.quizService.getAll()
    .subscribe(
      (data) =>{
        
        this.allSteps = data['steps'];

        this.allSteps.forEach(step => {
          this.questions = step.questions
        });
        
        this.currentQuestion = this.questions[this.value];

        console.log(this.questions)
        return this.currentQuestion;
        
      }

    )
  }

  next() {
    this.value++
    
    return this.currentQuestion = this.questions[this.value];
  }

  verifyAnswer(answer: boolean){

    if(answer){
      this.rightAnswer+= 1

    } else{
      this.wrongAnswer+= 1
    }

    if(this.value === this.questions.length -1){
      this.router.navigate(['/result']);
    }

    this.next();
  }
 

}
