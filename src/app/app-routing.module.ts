import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from 'src/modules/quiz/components/quiz.component';
import { HomeComponent } from 'src/modules/home/components/home.component';
import { ThemeComponent } from 'src/modules/theme/components/theme.component';
import { LoginComponent } from 'src/modules/login/components/login.component';
import { ResultComponent } from 'src/modules/result/components/result.component';
import { AdmPanelComponent } from 'src/modules/adm-panel/components/adm-panel.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'quiz', component: QuizComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'result', component: ResultComponent },
  { path: 'admpanel', component: AdmPanelComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
