import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 headerTitle: string;
  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.initTitle();
  }
  private initTitle(): void {
    this.router.events
      .pipe(
        filter((events) => events instanceof NavigationEnd),
        map((events) => (events as any).url.slice(1))
      )
      .subscribe((nameTitle: string) => {
        if (nameTitle) {
          this.headerTitle = (nameTitle.match(/\w+[-]?[a-z]+/).toString());
          console.log(this.headerTitle);
        }
      });
  }

}
