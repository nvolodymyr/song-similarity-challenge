import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.scss']
})
export class OnDestroyComponent implements OnDestroy {
  private readonly destroySubject = new Subject<void>();
  protected destroy$ = this.destroySubject.asObservable();

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

}
