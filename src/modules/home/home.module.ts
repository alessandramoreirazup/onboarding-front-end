import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule }  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";


import { routing } from 'src/app/app-routing.module';
import { HomeComponent } from './components/home.component';
import { ModalInputInfoComponent } from './components/modal-input-info/modal-input-info.component';
import { ModalWelcomeComponent } from './components/modal-welcome/modal-welcome.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModalInputInfoComponent,
    ModalWelcomeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatStepperModule,
    routing,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxSpinnerModule
  ],
  exports: [
    HomeComponent,
    ModalInputInfoComponent,
    ModalWelcomeComponent
  ],
  
  entryComponents: [ModalInputInfoComponent, ModalWelcomeComponent]
})
export class HomeModule {}
