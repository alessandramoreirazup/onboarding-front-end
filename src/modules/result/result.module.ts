import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ResultComponent } from './components/result.component';
import { routing } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    ResultComponent
 
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    routing
  ],
  exports:[
    MatProgressSpinnerModule
  ]
})
export class ResultModule { }
