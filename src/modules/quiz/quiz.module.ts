import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { routing } from 'src/app/app-routing.module';
import { QuizComponent } from './components/quiz.component';
import { DebounceClickDirective } from './components/debounce-click.directive';


@NgModule({
  declarations: [
    QuizComponent,
    DebounceClickDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    routing
  ],
  exports:[
    QuizComponent
  ]
})
export class QuizModule { }
