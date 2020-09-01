import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mainSearchLink } from '../links';

type RequestStatus = 'draft' | 'pending' | 'success' | 'error';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

 public songsList$: Observable<any> = of([]);
 public requestStatusSubject = new BehaviorSubject<RequestStatus>('draft');

  constructor(
    private http: HttpClient,
  ) { }

  public searchSongs(searchedValue: string): Observable<any> {
    return this.http.get(`${mainSearchLink}/song/search?query=${searchedValue}`, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  public fetchSimilaritySongs(id: number): void {
    this.requestStatusSubject.next('pending');

    this.songsList$ = this.http.get(`${mainSearchLink}/similarity/by_song?song_id=${id}`, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}
