import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsListComponent } from './components/questions-list.component';
import { routing } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports: [
    QuestionsListComponent
  ]
})
export class QuestionsListModule { }
