import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from 'src/app/app-routing.module';
import { QuizComponent } from './components/quiz.component';


@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports:[
    QuizComponent
  ]
})
export class QuizModule { }
