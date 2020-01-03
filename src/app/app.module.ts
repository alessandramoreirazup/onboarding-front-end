import { SocialUser } from 'angularx-social-login';
import { LoginGuard } from './../modules/login/guards/login.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'materialize-css';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizModule } from '../modules/quiz/quiz.module';
import { HomeModule } from '../modules/home/home.module';
import { ThemeModule } from '../modules/theme/theme.module';
import { LoginModule } from '../modules/login/login.module';
import { ResultModule } from '../modules/result/result.module';
import { AdmPanelModule } from '../modules/adm-panel/adm-panel.module';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { InputQuestionsModule } from '../modules/input-questions/input-questions.module';
import { GuardAdmGuard } from 'src/modules/adm-panel/guards/guardadm.guard';


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
    LoginModule,
    ResultModule,
    AdmPanelModule,
    InputQuestionsModule,
    DashboardModule
  ],
  exports:[
    QuizModule,
    HomeModule,
    LoginModule,
    ThemeModule,
    ResultModule,
    AdmPanelModule,
    InputQuestionsModule,
    DashboardModule
  ],
  providers: [LoginGuard, GuardAdmGuard, SocialUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
