import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { QuestionsListService } from '../service/questions-list.service';
import { QuestionDeleteModel } from './question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private questionsListService: QuestionsListService
  ) { }


  public filteredStep: any;
  public stepList: any;
  public question: QuestionDeleteModel;

  ngOnInit() {
    this.getAllQuestions();
  }

  filterStep(stepN: Number){
    this.stepList.map((step) =>{
      if(step.id == stepN){
        this.filteredStep = step
        return this.filteredStep;
      }
    })
  }

  loadSpinner(){
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  deleteQuestion(id: number){
    this.spinner.show();
    this.question = new QuestionDeleteModel();
    this.question.id = id;
    console.log(this.question)
    this.questionsListService.deleteQuestion(this.question)
     .subscribe((res) =>{
      if (res.ok == true) {
        this.spinner.hide();
         alert('Pergunta deletada com sucesso!')      
       }
       this.getAllQuestions();
     }, (err) => {
          this.spinner.hide();
          alert('Infelizmente não foi possível deletar a pergunta. Tente novamente')
     })
  }

  getAllQuestions(){
    this.spinner.show();

    return this.questionsListService.getAllQuestions()
    .subscribe((data) => {
      this.stepList = data['steps']
      this.filteredStep = this.stepList[0] 

      if(this.stepList){
        this.spinner.hide();
      }
    });
  }

}
