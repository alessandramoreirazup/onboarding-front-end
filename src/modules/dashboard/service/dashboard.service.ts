import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  private generalUrl = 'https://onboardingpgg.herokuapp.com/dashboard';

  getGeneralData(){
    return this.http.get(this.generalUrl)
  }
}
