import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
num = 100;
  constructor() {
  }
  public num1: number;
  public num2: number;
  public result: number;

addResult() {
    return this.result = this.num1 + this.num2;
  }
ngOnInit() {

  }
}



