import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void { console.log('ngOnInit ThirdStepComponent')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy ThirdStepComponent')
  }

}
