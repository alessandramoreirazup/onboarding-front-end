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

  private postUrl = '';
  
  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json; charset=UTF-8',
      'Authorization': ''
    })
  }

  sendNewQuestion(question: QuestionModel){
    console.log(question)
    return this.http.post(this.postUrl, question, this.httpOptions);
  }
}
