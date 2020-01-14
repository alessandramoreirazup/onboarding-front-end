import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { InputQuestionsComponent } from './components/input-questions.component';
import { routing } from 'src/app/app-routing.module';

 
@NgModule({
  declarations: [
    InputQuestionsComponent
  ],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports:[
    InputQuestionsComponent
  ]
})
export class InputQuestionsModule { }
