import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { AlternativeModel } from '../components/alternative.model';
import { map } from 'rxjs/operators';

@Injectable({ 
  providedIn: 'root'
})
export class QuizService {
  
  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'https://onboardingpgg.herokuapp.com/zupper/alessandra.moreira@zup.com.br';

  private apiPost = 'https://onboardingpgg.herokuapp.com/answer';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': ''
    })
  };

  getAll(){
    return this.http.get(this.apiUrl);
  }

  postAlternative(alternative: AlternativeModel){
    console.log(alternative)
    return this.http.post(this.apiPost, alternative, this.httpOptions)
  }

}
