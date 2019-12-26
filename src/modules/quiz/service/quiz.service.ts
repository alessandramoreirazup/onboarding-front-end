import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { AlternativeModel } from '../components/alternative.model';
import { map } from 'rxjs/operators';
import { AuthService, SocialUser } from 'angularx-social-login';

@Injectable({ 
  providedIn: 'root'
})
export class QuizService {
  
  constructor(
    private http: HttpClient
    ) { }

  private apiUrl = 'https://onboardingpgg.herokuapp.com/zupper/alessandra.moreira@zup.com.br';
  private apiPost = 'https://onboardingpgg.herokuapp.com/answer';
  


  getAll(){
    return this.http.get(this.apiUrl);
  }

  postAlternative(alternative: AlternativeModel){
    console.log(alternative)
    return this.http.post(this.apiPost, alternative)
  }

}
