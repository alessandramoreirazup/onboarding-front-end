import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

import { ResultComponent } from './components/result.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    ResultComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports:[
    MatProgressSpinnerModule
  ]
})
export class ResultModule { }
