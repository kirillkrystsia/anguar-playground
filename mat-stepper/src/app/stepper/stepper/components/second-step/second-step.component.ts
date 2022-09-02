import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { console.log('ngOnInit SecondStepComponent')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy SecondStepComponent')
  }

}
