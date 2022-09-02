import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StepperComponent} from "./stepper/stepper/stepper.component";
import {AngularDocComponent} from "./angular-doc/angular-doc/angular-doc.component";

const routes: Routes = [
  { path: 'stepper', component: StepperComponent },
  { path: 'angular-doc', component: AngularDocComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
