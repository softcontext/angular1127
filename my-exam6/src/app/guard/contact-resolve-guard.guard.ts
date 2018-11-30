import { Injectable } from '@angular/core';
import {
  Resolve, ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';
import { of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

export class Contact {
  constructor(
    private id: number,
    private name: string,
    private phone: string,
    private website: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContactResolveGuard implements Resolve<Contact> {

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    let myId = route.params['id'];

    return of({
      id: myId,
      name: 'Gildong Hong',
      phone: '01012345678',
      website: 'http://www.google.com',
    }).pipe(delay(3000));
  }

}
