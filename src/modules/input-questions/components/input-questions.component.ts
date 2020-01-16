import { Component, OnInit } from '@angular/core';

import { InputQuestionsService } from '../service/input-questions.service';
import { QuestionModel, AlternativeQuestionModel, StepModel } from './input-questions.model';
import { HomeService } from 'src/modules/home/service/home.service';
import { FormBuilder, FormGroup, Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-questions',
  templateUrl: './input-questions.component.html',
  styleUrls: ['./input-questions.component.scss']
})
export class InputQuestionsComponent implements OnInit {

  constructor(
    private inputQuestionService: InputQuestionsService,
    private formBuilder: FormBuilder
  ) { }

    public formQuestion: FormGroup;
    public formAlternative: FormGroup;
    public formAltList: Array<FormGroup> = [];
    public newQuestion: QuestionModel;
    public stepId: StepModel;
    public questionDescription: String;
    public alternativeObj: any;
    public alternatives: Array<AlternativeQuestionModel> =[];
    public disableCheckBox: boolean;

    alternativeArr = [
      { label: 'Primeira'},
      { label: 'Segunda'},
      { label: 'Terceira'},
      { label: 'Quarta'},
    ]

  ngOnInit() {
    this.createForm();
  }
  
  createForm(){
    this.formQuestion = this.formBuilder.group({
      step: ['Selecione o tema'],
      description: ['']
    });

    for (let i = 0; i < this.alternativeArr.length; i++) {
      this.createAlternative();
      this.formAltList.push(this.formAlternative)
    }
  }

  createAlternative(){
    this.formAlternative = this.formBuilder.group({
      description: [''],
      correct: [false]
    });
  }

  createFullQuestion(){
    this.newQuestion = new QuestionModel();
    this.stepId = new StepModel();

    this.stepId.id = this.formQuestion.value.step;

    this.newQuestion.description = this.formQuestion.value.description;
    this.newQuestion.idStep = this.stepId; 

    this.formAltList.forEach((object, index) => {
      //deixa apenas adicionar até 4 alternativas
      if(this.alternatives.length < this.alternativeArr.length){
        this.alternativeObj = object.value;
        this.alternatives.push(this.alternativeObj);
      }
    }); 
    
    this.newQuestion.alternatives  = this.alternatives 
    console.log(this.newQuestion)
    this.inputQuestionService.sendNewQuestion(this.newQuestion)
    .subscribe((res) =>{
      if (res.ok == true) {
        alert('Pergunta cadastrada com sucesso!');
        
        window.location.reload();
      }
    }, (err) => {
        alert('Infelizmente não foi possível realizar o cadastro. Tente novamente')
    })

  }

}
