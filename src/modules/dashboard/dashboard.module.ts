import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgxSpinnerModule } from "ngx-spinner";

import { DashboardComponent } from './components/dashboard.component';
import { routing } from 'src/app/app-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    routing,
    GoogleChartsModule,
    NgxSpinnerModule
  ]
})
export class DashboardModule { }
