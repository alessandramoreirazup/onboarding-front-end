import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://demo7269457.mockable.io/step';

  getAll(){
    return this.http.get(this.apiUrl);
  }
}
