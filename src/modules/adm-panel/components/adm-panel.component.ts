import { Component, OnInit } from '@angular/core';
import { AdmPanelService } from '../service/adm-panel.service';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrls: ['./adm-panel.component.scss']
})
export class AdmPanelComponent implements OnInit {

  constructor(private admPanelService: AdmPanelService) { }
 
  zuppers: any = [];
  usersList: any;
  
  ngOnInit() {
    this.getAllUsers();
  }

  export() {
    this.admPanelService.exportExcel(this.zuppers, 'zuppers');
  }

  getAllUsers(){
    return this.admPanelService.getAllUsers()
    .subscribe( (users) => {
      this.usersList = users

      this.zuppers = this.usersList.zupperDashboard
      console.log(this.zuppers)
    })
  }
}
