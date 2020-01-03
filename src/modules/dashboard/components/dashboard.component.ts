import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( 
    private authService: AuthService,
    private spinner: NgxSpinnerService
    ) { }
  
  user: SocialUser;
  loggedIn: boolean;
  myData: any = [];
  myOptions: any = [];
  myNewData: any = [];
  pieWidth: number = 425;
  barWidth: number = 630;
  barHeight: number = 250;
  type = 'PieChart'
  typeBar = 'ColumnChart'

  ngOnInit() {
    this.loadSpinner();

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
      bar: { groupWidth: '60%' },
      
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

  loadSpinner(){
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

}

