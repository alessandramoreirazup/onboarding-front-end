import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from 'src/modules/quiz/components/quiz.component';
import { HomeComponent } from 'src/modules/home/components/home.component';
import { LoginComponent } from 'src/modules/login/components/login.component';
import { ResultComponent } from 'src/modules/result/components/result.component';
import { AdmPanelComponent } from 'src/modules/adm-panel/components/adm-panel.component';
import { DashboardComponent } from 'src/modules/dashboard/components/dashboard.component';
import { InputQuestionsComponent } from 'src/modules/input-questions/components/input-questions.component';
import { QuestionsListComponent } from 'src/modules/questions-list/components/questions-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'quiz', component: QuizComponent},
  { path: 'home', component: HomeComponent},
  { path: 'result', component: ResultComponent },
  { path: 'admpanel', component: AdmPanelComponent },
  { path: 'input-questions', component: InputQuestionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'questions-list', component: QuestionsListComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
