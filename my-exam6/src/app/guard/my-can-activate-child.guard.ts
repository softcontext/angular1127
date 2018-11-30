import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCanActivateChildGuard implements CanActivateChild {

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    console.log('== MyCanActivateChildGuard ==');

    console.log('route.param :', route.params);
    // http://localhost:4200/parent?a=1&b=2
    console.log('route.queryParams :', route.queryParams);
    console.log('state.url :', state.url);

    return true;
  }

}
