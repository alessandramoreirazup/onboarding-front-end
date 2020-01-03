import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule }  from '@angular/forms';


import { routing } from 'src/app/app-routing.module';
import { HomeComponent } from './components/home.component';
import { ModalInputInfoComponent } from './components/modal-input-info/modal-input-info.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModalInputInfoComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatStepperModule,
    routing,
    MatDialogModule,
    FormsModule 

  ],
  exports: [
    HomeComponent,
    ModalInputInfoComponent
  ],
  
  entryComponents: [ModalInputInfoComponent]
})
export class HomeModule {}
