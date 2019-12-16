import { Component, OnInit } from '@angular/core';

import { InputQuestionsService } from '../service/input-questions.service';
import { QuestionModel } from './input-questions.model';

@Component({
  selector: 'app-input-questions',
  templateUrl: './input-questions.component.html',
  styleUrls: ['./input-questions.component.scss']
})
export class InputQuestionsComponent implements OnInit {

  constructor(
    private inputQuestionService: InputQuestionsService
  ) { }

    private newQuestion: QuestionModel;
    private idStep: number;
    private questionDescription: String;

    private alternative1: String
    private alternative2: String
    private altCorrect: number


  ngOnInit() {
  }

  createQuestion(){
    this.newQuestion = new QuestionModel();

    this.newQuestion.idStep = this.idStep;
    this.newQuestion.description = this.questionDescription;
    
    this.newQuestion.alternative1 = this.alternative1;
    this.newQuestion.alternative2 = this.alternative2;
    this.newQuestion.altCorrect = this.altCorrect;
   
    this.inputQuestionService.sendNewQuestion(this.newQuestion).subscribe((question: QuestionModel) =>
      this.newQuestion = question
    )
  }

}
