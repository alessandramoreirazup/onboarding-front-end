import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AdmPanelComponent } from './components/adm-panel.component';
import { routing } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    AdmPanelComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatPaginatorModule,
    routing
  ],
  exports:[
    AdmPanelComponent
  ]
})
export class AdmPanelModule { }
