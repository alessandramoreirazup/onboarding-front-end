import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { routing } from 'src/app/app-routing.module';
import { QuizComponent } from './components/quiz.component';


@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    routing
  ],
  exports:[
    QuizComponent
  ]
})
export class QuizModule { }
