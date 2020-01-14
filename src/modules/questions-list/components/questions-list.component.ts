import { Component, OnInit } from '@angular/core';
import { QuestionsListService } from '../service/questions-list.service';
import { QuestionDeleteModel } from './question.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  constructor(
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

  deleteQuestion(id: number){
    this.question = new QuestionDeleteModel();
    this.question.id = id;
    return this.questionsListService.deleteQuestion(this.question)
  }

  getAllQuestions(){
    return this.questionsListService.getAllQuestions()
    .subscribe((data) => {
      this.stepList = data['steps']
      this.filteredStep = this.stepList[0] 
      console.log(this.stepList)
    });
  }

}
