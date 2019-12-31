import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule }   from '@angular/forms';

import { AdmPanelComponent } from './components/adm-panel.component';
import { routing } from 'src/app/app-routing.module';
import { TableFilterPipe } from './components/table-filter';


@NgModule({
  declarations: [
    AdmPanelComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    routing
  ],
  exports:[
    AdmPanelComponent
  ]
})
export class AdmPanelModule { }
