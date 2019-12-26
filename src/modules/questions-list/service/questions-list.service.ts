import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsListService {

  constructor(private http: HttpClient) { }

  private url = ''

  getAllQuestions(){
    this.http.get(this.url)
  }

  deleteQuestion(){
    this.http.delete(this.url)
  }

  editQuestion(){
    //this.http.put()
  }
}
