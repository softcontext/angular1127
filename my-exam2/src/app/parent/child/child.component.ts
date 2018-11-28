import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('e') emp: {id,name,age};
  @Input() parent;
  @Output() selectedId = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select() {
    // 자식 컴포넌트에서 부모 컴포넌트에게 데이터를 보낸다.
    this.selectedId.emit(this.emp.id);
  }

  test() {
    console.log(this.parent);
    this.parent.popup(this.emp.id);
  }
}
