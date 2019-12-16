import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../components/user.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private readonly urlPost = '';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json',
      'Authorization': ''
    })
  };

  getCurrentStep(){
  }

  postUser(user: UserModel){
    console.log(user)
    return this.http.post(this.urlPost, user, this.httpOptions)
  }
}
