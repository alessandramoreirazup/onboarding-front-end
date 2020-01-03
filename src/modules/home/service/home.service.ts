import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../components/user.model';
import { SocialUser, AuthService } from 'angularx-social-login';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  private readonly urlPost = 'https://onboardingpgg.herokuapp.com/zupper';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json; charset=UTF-8',
      'Authorization': ''
    })
  };

  getUser(email: String){
    
    return this.http.get(`https://onboardingpgg.herokuapp.com/zupper/${email}`)
    .pipe(
      map( response => {
        console.log(response)
        return response 
      })
    ) 
  }


  postUser(user: UserModel){
    console.log(user)
    return this.http.post(this.urlPost, user, this.httpOptions)
  }
}
