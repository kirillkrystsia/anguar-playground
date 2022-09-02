import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import { FirstStepComponent } from './stepper/components/first-step/first-step.component';
import { SecondStepComponent } from './stepper/components/second-step/second-step.component';
import { ThirdStepComponent } from './stepper/components/third-step/third-step.component';



@NgModule({
  declarations: [
    StepperComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule
  ]
})
export class StepperModule { }
