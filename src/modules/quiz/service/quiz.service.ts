import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { AlternativeModel, UserQuizModel, ZupperWithAlternativeModel } from '../components/alternative.model';
import { map } from 'rxjs/operators';
import { AuthService, SocialUser } from 'angularx-social-login';

@Injectable({ 
  providedIn: 'root'
})
export class QuizService {
  
  constructor(
    private http: HttpClient
    ) { }

  private apiGet = 'https://onboardingpgg.herokuapp.com/zupper/alessandra.moreira@zup.com.br';
  private apiPost = 'https://onboardingpgg.herokuapp.com/answer';
  


  getAll(){
    return this.http.get(this.apiGet);
  }

  postAlternative(user: ZupperWithAlternativeModel){
    console.log('current', user)
    return this.http.post(this.apiPost, user)
  }

}
