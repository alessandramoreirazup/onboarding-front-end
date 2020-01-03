import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserQuizModel } from 'src/modules/quiz/components/alternative.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }
  
  private returnUrl = 'http://www.mocky.io/v2/5e014f922f00005600dcd161';
  private postUrl = 'https://onboardingpgg.herokuapp.com/zupper/finish';
  
  getResult(){
    return this.http.get(this.returnUrl) 
  }

  postResult(user: UserQuizModel){
    return this.http.post(this.postUrl, user)
  }
}
