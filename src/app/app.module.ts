import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from '../modules/quiz/quiz.module';
import { HomeModule } from '../modules/home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    QuizModule,
    HomeModule,
    RouterModule
  ],
  exports:[
    QuizModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
