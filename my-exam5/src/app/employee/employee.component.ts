import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoodHttpService } from './good-http.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  emps: Array<{id, firstName, lastName}> = [];
  errorMessage;

  constructor(private goodHttpService: GoodHttpService) { }

  ngOnInit() {
    this.goodHttpService.findAll().then(data => {
      this.emps = data;
    }).catch(error => {
      console.log(error);
      this.errorMessage = error;
    });
  }

  deleteOne(id) {
    this.goodHttpService.deleteOne(id).then(data => {
      if (data) {
        this.emps.splice(this.emps.findIndex(e => e.id === id), 1);
      }
    }).catch(error => {
      console.log(error);
      this.errorMessage = error;
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

  test(firstName: HTMLInputElement) {
    console.log(firstName);
    firstName.value = 'XXX';
  }

  emp = {
    firstName: '',
    lastName: ''
  };

  test2() {
    let emp = {
      firstName: this.emp.firstName,
      lastName: this.emp.lastName
    };

    this.goodHttpService.addOne(emp).then(data => {
      this.emps.push(data);
      this.emp.firstName = '';
      this.emp.lastName = '';
    });
  }
}
