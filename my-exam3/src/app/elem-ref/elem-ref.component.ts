import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elem-ref',
  // templateUrl: './elem-ref.component.html',
  template: `
    <h1>ElemRefComponent</h1>
    <input type="text" #target>
    <button (click)="popup(target.value)">Show</button>
  `,
  // styleUrls: ['./elem-ref.component.scss']
  styles: [``]
})
export class ElemRefComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  popup(text) {
    alert(text);
  }
}
