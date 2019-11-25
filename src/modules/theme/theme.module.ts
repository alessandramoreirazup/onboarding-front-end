import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeComponent } from './components/theme.component';
import { routing } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    routing
  ],
  exports:[
    ThemeComponent
  ]
})
export class ThemeModule { }
