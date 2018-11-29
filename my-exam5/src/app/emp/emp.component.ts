import { Component, OnInit } from '@angular/core';
import { EmpHttpService } from './emp-http.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {

  employees: any = [];

  constructor(private empHttpService: EmpHttpService) { }

  ngOnInit() {
    this.empHttpService.getEmps().subscribe(data => {
      // console.log(data);
      this.employees = data;
    });
  }

  getEmps() { }

  addEmp(firstName: string, lastName: string) {
    alert('addEmp() # ' + firstName + ' ' + lastName);
  }

  removeEmp(person: any) {
    // 원격서버에 삭제 요청을 보낸다.
    this.empHttpService.removeEmp(person).subscribe(data => {
      console.log(data);

      alert(JSON.stringify(person));
      let idx = this.employees.findIndex(e => e.id === person.id);
      this.employees.splice(idx, 1);
    });

    return false; // anchor 태그의 이벤트 전파를 막는다.
  }

  onSubmit(f) {
    // if (f.valid) {
      var emp = f.value;
      console.log(emp);

      alert(JSON.stringify(emp));

      // 가장 큰 id값을 구한다.
      this.employees.map(e => e.id);
      let maxId = Math.max(...this.employees.map(e => e.id));

      // emp 객체에 가장 큰 id+1 값의 프로퍼티를 추가한다.
      emp.id = maxId + 1;

      this.employees.push(emp);

      // 입력창을 클리어 한다.
      console.log(f);

    // }
  }
}
