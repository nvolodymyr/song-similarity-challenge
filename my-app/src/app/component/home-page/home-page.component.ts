import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { isString, get, isObject } from 'lodash';

import { OnDestroyComponent } from '../../shared/components/on-destroy/on-destroy.component';
import { SelectedSongModel } from '../../model/selected-song.model';
import { SongsService } from '../../service/songs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends OnDestroyComponent implements OnInit {

  search = new FormControl('');
  songsList$: Observable<Array<SelectedSongModel>>;
  selectedSong: SelectedSongModel;

  constructor(
    private readonly router: Router,
    private  songsService: SongsService,
  ) {
    super();
  }

  displayWith: Function = (song: any | string) =>
    isString(song) ? song : get(song, 'name');

  ngOnInit() {
    this.search.valueChanges.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      debounceTime(300),
    ).subscribe((value) => {
      if (isObject(value)) {
        this.selectedSong = value;
      } else {
        this.selectedSong = null;
        this.songsList$ = this.songsService.searchSongs(value).pipe(
          map((data) => get(data, 'response.results')),
        );
      }

    });
  }

  onSubmit(): void {
    this.songsService.fetchSimilaritySongs(this.selectedSong.id)
    this.router.navigate(['songs-list']);
  }

}
