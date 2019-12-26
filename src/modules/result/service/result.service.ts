import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }
  
  private returnUrl = 'http://www.mocky.io/v2/5e014f922f00005600dcd161'

  getResult(){
    return this.http.get(this.returnUrl) 
  }
}
