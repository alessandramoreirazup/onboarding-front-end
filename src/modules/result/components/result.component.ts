import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss','../../quiz/components/quiz.component.scss' ]
})
export class ResultComponent implements OnInit {

  constructor() { }
  value= 20;

  ngOnInit() {
   
  }



}
