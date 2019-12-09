import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  host: {
    'class': 'spinner-container'
  },
  inputs: ['color', 'diameter', 'mode', 'strokeWidth', 'value'],
})
export class SpinnerComponent{
  strokeWidth = 15;
  value = 10;

}
