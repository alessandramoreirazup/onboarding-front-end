import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../components/user.model';
import { SocialUser, AuthService } from 'angularx-social-login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }


  private readonly urlPost = 'https://onboardingpgg.herokuapp.com/zupper';

  private urlGet = 'https://onboardingpgg.herokuapp.com/zupper/alessandra.moreira@zup.com.br';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json; charset=UTF-8',
      'Authorization': ''
    })
  };

  getUser(){
    return this.http.get(this.urlGet)
    .pipe(
      map( response => {
        return response 
      })
    ) 
  }

  postUser(user: UserModel){
    console.log(user)
    return this.http.post(this.urlPost, user, this.httpOptions)
  }
}
