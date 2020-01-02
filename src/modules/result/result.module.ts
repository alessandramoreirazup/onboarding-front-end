import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";

import { ResultComponent } from './components/result.component';
import { routing } from 'src/app/app-routing.module';

 
@NgModule({
  declarations: [
    ResultComponent
 
  ],
  imports: [
    CommonModule,
    routing,
    NgxSpinnerModule
  ]
})
export class ResultModule { }
 