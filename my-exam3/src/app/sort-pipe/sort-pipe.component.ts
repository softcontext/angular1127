import { Component, OnInit } from '@angular/core';

export class Company {
  constructor(
    public company: string,
    public domain: string,
    public info: {
      country: string,
      cash: number
    }
  ) { }
}

@Component({
  selector: 'app-sort-pipe',
  templateUrl: './sort-pipe.component.html',
  styleUrls: ['./sort-pipe.component.scss']
})
export class SortPipeComponent implements OnInit {

  companies: Company[] = [
    new Company('A', 'aa', {country: 'Korea', cash: 100}),
    new Company('B', 'bb', {country: 'Japan', cash: 300}),
    new Company('C', 'cc', {country: 'USA', cash: 200}),
  ];
  path: string[] = ['company'];
  order: number = 1; // 1 asc, -1 desc;

  constructor() { }

  ngOnInit(): void {

  }

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }

}
