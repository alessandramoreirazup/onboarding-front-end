import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from '../service/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor( 
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private dashboardService: DashboardService
    ) { }
  
  user: SocialUser;
  loggedIn: boolean;
  stepData: any;
  locationData: any;
  podData: any;
  podGraph: any = [];


  locationGraph: any = [];
  generalData: any = []
  myOptions: any = [];
  title1: any = 'Acertos totais por Regional'
  title2: any = 'Acertos totais por POD';
  title3: any = 'Acertos de cada tema por POD e regional';
  pieWidth: number = 425;
  barWidth: number = 630;
  barHeight: number = 250;
  type = 'PieChart'
  typeBar = 'ColumnChart'

  ngOnInit() {
    this.loadSpinner();

    this.myOptions = {
      isStacked: true,
      colors: ['#7B9C00', '#273B7A', '#FE5050', '#7B9C00', '#D35933'],
      bar: { groupWidth: '60%' },
      
    };

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.getData();
  }  

  fillLocationGraph(){
    this.locationData.forEach((element, i) => {
      this.locationGraph.push([element.location, element.scoreboard])
    });
  }

  fillPodGraph(){
    this.podData.forEach((element, i) => {
      this.podGraph.push([element.pod, element.scoreboard])
    });
  }

  fillGeneralData(){
    this.stepData = this.generalData.stepDashboards;
    this.podData = this.generalData.podDashboard;
    this.locationData = this.generalData.locationDashboard;
    
    this.fillLocationGraph();
    this.fillPodGraph();
  }

  loadSpinner(){
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  getData(){
    return this.dashboardService.getGeneralData()
    .subscribe((data) => {
      this.generalData = data
      this.fillGeneralData();
    })
  }

}

