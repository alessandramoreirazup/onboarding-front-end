import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { AlternativeModel } from '../components/alternative.model';

@Injectable({ 
  providedIn: 'root'
})
export class QuizService {
  
  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://demo7269457.mockable.io/user/1';

  private apiPost = 'https://demo2971522.mockable.io/alternative';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': ''
    })
  };

  getAll(){
    return this.http.get(this.apiUrl);
  }

  postData(alternative: AlternativeModel){
    console.log(alternative)
    return this.http.post(this.apiPost, alternative, this.httpOptions)
  }

}
