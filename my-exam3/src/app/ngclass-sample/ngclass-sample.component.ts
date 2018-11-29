import { Component, OnInit } from '@angular/core';

export class Mountain {
  title;
  height;
}

@Component({
  selector: 'app-ngclass-sample',
  templateUrl: './ngclass-sample.component.html',
  styleUrls: ['./ngclass-sample.component.scss']
})
export class NgclassSampleComponent implements OnInit {
  public isActive: boolean = false;
  private myclass: string = "active";
  grade: string;
  grades = ['guest', 'admin', 'member'];
  items: Array<Mountain> = [];

  constructor() {
    this.items.push({ 'title': '한라산', 'height': '1950' });
    this.items.push({ 'title': '지리산', 'height': '1915' });
    this.items.push({ 'title': '설악산', 'height': '1707' });
  }

  ngOnInit() {

  }

  change() {
    this.grade = this.grades.shift();
    this.grades.push(this.grade);
  }
}
