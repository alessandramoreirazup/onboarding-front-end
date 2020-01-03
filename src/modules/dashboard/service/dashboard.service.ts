import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  private generalUrl = 'http://www.mocky.io/v2/5e0f2f103400002d002d7f4e';

  getGeneralData(){
    return this.http.get(this.generalUrl)
  }
}
