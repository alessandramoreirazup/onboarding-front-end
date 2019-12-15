import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { DashboardComponent } from './components/dashboard.component';
import { routing } from 'src/app/app-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class DashboardModule { }
