import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ThemeComponent } from './components/theme.component';
import { routing } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    routing
  ],
  exports:[
    ThemeComponent
  ]
})
export class ThemeModule { }
