import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmpHttpService {
  private configUrl: string = "http://localhost:3000/employees";
  // private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: HttpClient) { }

  getEmps() {
    // return this.http.get(this.empsUrl)
    //   .map(this.extractData)
    //   .catch(this.handleError);
    return this.http.get(this.configUrl);
  }

  // addEmp(firstName: string, lastName: string): Observable<Emp> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   let emp = { "id": 0, "firstName": firstName, "lastName": lastName };
  //   return this.http.post(this.empsUrl, JSON.stringify(emp), options)
  //     .map(this.extractDataForObject)
  //     .catch(this.handleError);
  // }
  //
  removeEmp(emp) {
    const url = `${this.configUrl}/${emp.id}`;
    return this.http.delete(url, httpOptions);
  }
  //
  // private extractData(res: Response) {
  //   console.log('res = ' + JSON.stringify(res));
  //   let json = res.text();
  //   json = JSON.parse(json);
  //   return json || [];
  // }
  //
  // private extractDataForObject(res: Response) {
  //   console.log('res = ' + JSON.stringify(res));
  //   let json = res.text();
  //   json = JSON.parse(json);
  //   return json || {};
  // }
  //
  // private handleError(res: Response) {
  //   console.log(res);
  //   return Observable.throw(res.json().error || 'Server Down');
  // }

}
