import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputQuestionsComponent } from './components/input-questions.component';
import { MatInputModule } from '@angular/material/input';
import { routing } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    InputQuestionsComponent
  ],
  imports: [
    CommonModule,
    routing,
    MatInputModule
    
  ],
  exports:[
    InputQuestionsComponent
  ]
})
export class InputQuestionsModule { }
