import { Component, OnInit } from '@angular/core';

import { Quiz } from '../components/quiz.model';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private quizService : QuizService) { }

  allSteps: any;
  questions: any;
  currentQuestion: any;
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

        return this.currentQuestion

      }
    )
  }

  next() {
    this.value++

    return this.value
  }

 

}
