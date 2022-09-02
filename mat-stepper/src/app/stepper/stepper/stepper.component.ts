import { Component, OnInit } from '@angular/core';
import {StepperSelectionEvent} from "@angular/cdk/stepper";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  selectedIndex: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  selectionChange(data: StepperSelectionEvent) {
    console.log(data, 'data')

    this.selectedIndex = data.selectedIndex;
  }

}
