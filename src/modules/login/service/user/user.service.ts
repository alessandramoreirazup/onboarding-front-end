import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/home'

  constructor(private http: HttpClient) { }

  getUser(user) {
    return this.http.get(this.url, {headers: { user }})
  }

  registerUser(user) {
    console.log(user)
    return this.http.post(this.url, user)
  }
}
