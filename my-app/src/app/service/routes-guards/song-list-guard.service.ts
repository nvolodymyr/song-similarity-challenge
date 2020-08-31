import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {HomePageComponent} from "../../component/home-page/home-page.component";
import {SongsService} from "../songs.service";

@Injectable({
  providedIn: 'root'
})
export class SongListGuardService implements CanActivate {

  private hasSongsList = false;

  constructor(private router: Router,
              private songsService: SongsService) {

    this.songsService.songsList$.subscribe((data) => {
      if (data.length) {
        this.hasSongsList = true;
      }
    })

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.songsService.requestStatusSubject.getValue() !== 'pending') {
      this.router.navigateByUrl('welcome');

      return of(false);
    }

      return of(true);
  }
}
