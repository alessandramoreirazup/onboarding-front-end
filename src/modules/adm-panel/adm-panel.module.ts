import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { AdmPanelComponent } from './components/adm-panel.component';



@NgModule({
  declarations: [
    AdmPanelComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class AdmPanelModule { }
