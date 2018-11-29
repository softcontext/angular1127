import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoodHttpService } from './good-http.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  emps: Array<{id, firstName, lastName}> = [];

  constructor(private goodHttpService: GoodHttpService) { }

  ngOnInit() {
    this.goodHttpService.findAll().then(data => {
      this.emps = data;
    });
  }

  deleteOne(id) {
    this.goodHttpService.deleteOne(id).then(data => {
      if (data) {
        this.emps.splice(this.emps.findIndex(e => e.id === id), 1);
      }
    });
  }

  @ViewChild("firstName", {read: ElementRef}) inputFirst: ElementRef;
  @ViewChild("lastName", {read: ElementRef}) inputLast: ElementRef;

  addOne(firstName, lastName) {
    let emp = {firstName, lastName};

    this.goodHttpService.addOne(emp).then(data => {
      this.emps.push(data);
      this.inputFirst.nativeElement.value = '';
      this.inputLast.nativeElement.value = '';
    });
  }
}
