import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getUrl = '';

  getAllData(){
    return this.http.get(this.getUrl)
  }
}
