import { Component, OnInit } from '@angular/core';

import { InputQuestionsService } from '../service/input-questions.service';
import { QuestionModel, AlternativeQuestionModel } from './input-questions.model';
import { HomeService } from 'src/modules/home/service/home.service';

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
    private idStep: any = 'Selecione o tema';
    private questionDescription: String;
    private alternatives: Array<AlternativeQuestionModel>;
    
    private alternative1: AlternativeQuestionModel;
    private alternative2: AlternativeQuestionModel;
    private alternative3: AlternativeQuestionModel;
    private alternative4: AlternativeQuestionModel;

    private altCorrect: any = 'Selecione a alternativa correta';

    alternativeArr = [
      { label: 'Primeira', value: this.alternative1},
      { label: 'Segunda', value: this.alternative2},
      { label: 'Terceira', value: this.alternative3},
      { label: 'Quarta', value: this.alternative4},
    ]

  ngOnInit() {

  }

  createQuestion(){
    this.newQuestion = new QuestionModel();

    this.newQuestion.idStep = this.idStep;
    this.newQuestion.description = this.questionDescription;
    this.newQuestion.alternatives = this.alternatives
   
    this.alternativeArr.forEach(object => {
     console.log('cada objeto', object)
    });
 

    this.inputQuestionService.sendNewQuestion(this.newQuestion).subscribe((question: QuestionModel) =>
      this.newQuestion = question
    )
  }

}
