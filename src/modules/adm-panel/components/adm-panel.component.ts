import { Component, OnInit } from '@angular/core';
import { AdmPanelService } from '../service/adm-panel.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrls: ['./adm-panel.component.scss']
})
export class AdmPanelComponent implements OnInit {

  constructor(private admPanelService: AdmPanelService) { }
  
  qtdAcertos: number = 5;
  porcentagemAcertos: number;
  qtdQuestões: number =  10;
  zuppers: any = [];
  zupperPOD: String;
  zupperLocation: String;

  length = this.zuppers.length;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  
  ngOnInit() {
    this.zuppers = [
      { name: 'Alessandra Moreira', 
        email: 'alessandra.moreira@zup.com.br', 
        location: 'São Paulo', 
        pod: 'No Limits', 
        initDate: '14/10/2019', 
        currentStep: 'Cultura', 
        currentStepPoints: '10', 
        currentStepPercentage:  '10', 
        generalPoints: '30', 
        generalPercentage: '50'
      },
      { name: 'Eduardo Ribeiro', 
        email: 'eduardo.ribeiro@zup.com.br', 
        location: 'São Paulo', 
        pod: 'No Limits', 
        initDate: '14/10/2019', 
        currentStep: 'Cultura', 
        currentStepPoints: '10', 
        currentStepPercentage:  '10', 
        generalPoints: '20', 
        generalPercentage: '50'
      },
      { name: 'Gessica Souza', 
        email: 'gessica.souza@zup.com.br', 
        location: 'São Paulo', 
        pod: 'No Limits', 
        initDate: '14/10/2019', 
        currentStep: 'Cultura', 
        currentStepPoints: '10', 
        currentStepPercentage:  '10', 
        generalPoints: '40', 
        generalPercentage: '50'
      },
      { name: 'Beatriz Moraes', 
        email: 'beatriz.silva@zup.com.br', 
        location: 'São Paulo', 
        pod: 'No Limits', 
        initDate: '14/10/2019', 
        currentStep: 'Cultura', 
        currentStepPoints: '10', 
        currentStepPercentage:  '10', 
        generalPoints: '30', 
        generalPercentage: '50'
      }
    ]
    this.porcentagemAcertos = this.qtdAcertos * 100 / this.qtdQuestões;

    // for (let i = 0; i < 10; i++) {
    //   this.zuppers.push(
    //     { 
    //       name: `zupper${i}`, 
    //       email: `abc${i}@gmail.com`, 
    //       location: `location${i}`,
    //       pod: `POD${i}`,
    //       initDate: `0${i}/0${i}/2020`, 
    //       currentStep: `0000${i}`,
    //       currentStepPoints: `${i}`,
    //       currentStepPercentage: `${i}`,
    //       generalPoints: `${i}`,
    //       generalPercentage: `${i}`
    //     }
    //   );
    // }
    console.log(this.porcentagemAcertos)
  }

  export() {
    this.admPanelService.exportExcel(this.zuppers, 'zuppers');
  }

  getAllUsers(){

  }
}
