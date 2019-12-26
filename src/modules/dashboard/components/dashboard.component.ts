import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( private authService: AuthService) { }
  
  user: SocialUser;
  loggedIn: boolean;
  myData: any = [];
  myOptions: any = [];
  myNewData: any = [];
  pieWidth: number = 460;
  barWidth: number = 700;
  barHeight: number = 280;
  type = 'PieChart'
  typeBar = 'ColumnChart'

  ngOnInit() {
    this.myData = [
      ['São Paulo', 8136],
      ['Belo Horizonte', 8538],
      ['Joinville', 2440],
      ['Campinas', 3470],
      ['Uberlândia', 1950]
    ];
    this.myOptions = {
      isStacked: true,
      colors: ['#7B9C00', '#273B7A', '#FE5050', '#7B9C00', '#D35933'],
      bar: { groupWidth: '75%' },
      
    };

    this.myNewData = [
      ['No Limits', 8136],
      ['Acelera', 8538],
      ['Uai POD', 2244],
      ['Meta POD', 3470],
      ['Red Rocket', 2950]
    ];


    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }  

}
