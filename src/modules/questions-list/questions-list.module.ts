import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";

import { QuestionsListComponent } from './components/questions-list.component';
import { routing } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    routing,
    NgxSpinnerModule
  ],
  exports: [
    QuestionsListComponent
  ]
})
export class QuestionsListModule { }
