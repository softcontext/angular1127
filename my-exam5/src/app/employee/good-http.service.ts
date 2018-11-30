import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GoodHttpService {
  URL: string = 'http://localhost:3000/employees';

  constructor() { }

  findAll() {
    return axios.get(this.URL)
      .then(function(response) { // handle success
        console.log(response);
        return response.data;
      });
  }

  findOne(id) {
    return axios.get(this.URL + '/' + id)
      .then(function(response) { // handle success
        return response.data;
      });
  }

  addOne(emp) {
    // {
    //   "firstName": "333",
    //   "lastName": "444",
    // }
    return axios.post(this.URL, emp)
      .then(function (response) {
        console.log(response);
        return response.data;
      });
    // {
    //   "firstName": "333",
    //   "lastName": "444",
    //   "id": 5
    // }
  }

  deleteOne(id) {
    return axios.delete(this.URL + '/' + id)
      .then(function(response) { // handle success]
        console.log(response);
        return true;
      });
  }

  updateOne(emp) {
    return axios.put(this.URL + '/' + emp.id, emp)
      .then(function (response) {
        console.log(response);
        return response.data;
      });
  }
}
