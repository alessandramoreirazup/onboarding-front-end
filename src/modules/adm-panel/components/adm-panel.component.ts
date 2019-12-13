import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrls: ['./adm-panel.component.scss']
})
export class AdmPanelComponent implements OnInit {

  qtdAcertos: number = 5;
  porcentagemAcertos: number;
  qtdQuestões: number =  10;

  constructor() { }

  ngOnInit() {

    this.porcentagemAcertos = this.qtdAcertos * 100 / this.qtdQuestões;

    console.log(this.porcentagemAcertos)
  }

}
