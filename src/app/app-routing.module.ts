import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizComponent } from 'src/modules/quiz/components/quiz.component';
import { HomeComponent } from 'src/modules/home/components/home.component';


const routes: Routes = [
  // { path: 'login', component: LoginComponent }, ---> essa é a rota do componente de login
  { path: 'quiz', component: QuizComponent },
  { path: 'home', component: HomeComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
