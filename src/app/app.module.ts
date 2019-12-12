import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from '../modules/quiz/quiz.module';
import { HomeModule } from '../modules/home/home.module';
import { ThemeModule } from '../modules/theme/theme.module';
import { LoginModule } from '../modules/login/login.module';
import { ResultModule } from '../modules/result/result.module';
import { AdmPanelModule } from '../modules/adm-panel/adm-panel.module';
import { InputQuestionsModule } from '../modules/input-questions/input-questions.module';


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
    ThemeModule,
    RouterModule,
    MaterializeModule,
    LoginModule,
    ResultModule,
    AdmPanelModule,
    InputQuestionsModule
  ],
  exports:[
    QuizModule,
    HomeModule,
    LoginModule,
    ThemeModule,
    ResultModule,
    AdmPanelModule,
    InputQuestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
