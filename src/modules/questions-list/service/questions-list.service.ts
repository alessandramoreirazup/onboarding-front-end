import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionDeleteModel } from '../components/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsListService {

  constructor(private http: HttpClient) { }

  private url = 'https://onboardingpgg.herokuapp.com/step';
  public headers = new Headers({ 'Content-Type': 'application/json' });


  getAllQuestions(){
    return this.http.get(this.url)
  }

  deleteQuestion(question: QuestionDeleteModel){
    return this.http.delete(`https://onboardingpgg.herokuapp.com/question/${question.id}`, { observe: 'response' })
  }

}
