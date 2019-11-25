import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';

import { routing } from 'src/app/app-routing.module';
import { HomeComponent } from './components/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatStepperModule,
    routing
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
