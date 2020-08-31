import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {HomePageComponent} from "../../component/home-page/home-page.component";

@Injectable({
  providedIn: 'root'
})
export class SongListGuardService implements CanActivate {

  private trigger = false;

  constructor(private router: Router,
              private homepage: HomePageComponent) {

    this.homepage.songsList$.subscribe((data) => {
      if (data) {
        this.trigger = true;
      }
    })

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.trigger) {
      this.router.navigateByUrl('welcome').then(r => r);
      return  of(false);
    } else {
      return of(true);

    }
  }
}
