import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  emps: Array<{id,name,age}> = [
    {id:1, name:'John', age: 10},
    {id:2, name:'Tom', age: 20},
    {id:3, name:'Bob', age: 30},
  ];
  selectedEmp: {id,name,age};

  constructor() { }

  ngOnInit() {
  }

  popup(id) {
    console.log('id = ' + id);
    // id 값으로 배열에서 해당 객체를 찾아서 selectedEmp 변수에 할당한다.
    this.selectedEmp = this.emps.find(e => e.id === id);
  }
}
