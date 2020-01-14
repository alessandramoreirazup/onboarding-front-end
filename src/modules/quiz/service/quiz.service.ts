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

  private apiPost = 'https://onboardingpgg.herokuapp.com/answer';
  
  getAll(email: String){
    return this.http.get(`https://onboardingpgg.herokuapp.com/zupper/${email}`);
  }

  postAlternative(user: ZupperWithAlternativeModel){
    return this.http.post(this.apiPost, user)
  }

}
