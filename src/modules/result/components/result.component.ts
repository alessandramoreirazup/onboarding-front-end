import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/modules/quiz/service/quiz.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss','../../quiz/components/quiz.component.scss' ]
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizService) { }
  
  value: number;

  ngOnInit() {

  }

}
