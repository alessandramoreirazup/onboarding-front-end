import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../components/user.model';

import { AuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  private readonly urlPost = 'https://onboardingpgg.herokuapp.com/zupper';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json; charset=UTF-8',
      'Authorization': ''
    })
  };

  postUser(user: UserModel){
    console.log(user)
    return this.http.post(this.urlPost, user, this.httpOptions)
  }
}
