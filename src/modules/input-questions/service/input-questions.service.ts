import { Injectable } from '@angular/core';
import { QuestionModel } from '../components/input-questions.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InputQuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  private postUrl = 'https://onboardingpgg.herokuapp.com/question';


  sendNewQuestion(question: QuestionModel){
      return this.http.post(this.postUrl, question, {observe: 'response'});
  }
}
