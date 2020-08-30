import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {log} from "util";
import {tap} from "rxjs/operators";

type RequestStatus = 'draft' | 'pending' | 'success' | 'error';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
 private readonly mainSearchLink = 'https://searchly.asuarez.dev/api/v1';

 public songsList$: Observable<any> = of([]);
 public requestStatusSubject = new BehaviorSubject<RequestStatus>('draft');

  constructor(
    private http: HttpClient,
  ) { }

  public searchSongs (searchedValue: string): Observable<any> {
    return this.http.get(`${this.mainSearchLink}/song/search?query=${searchedValue}`);
  }

  public fetchSimilaritySongs (id: number): void {
    this.requestStatusSubject.next('pending');

    this.songsList$ = this.http.get(`${this.mainSearchLink}/similarity/by_song?song_id=${id}`, {
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
}
