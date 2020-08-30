import { Component, OnInit } from '@angular/core';
import {SongsService} from "../../service/songs.service";
import {OnDestroyComponent} from "../../shared/components/on-destroy/on-destroy.component";
import {map, takeUntil} from "rxjs/operators";

import { get } from 'lodash'
import {SongDetailsComponent} from "../song-details/song-details.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent extends OnDestroyComponent implements OnInit {
 private  songsList: any[];

  constructor(
    public dialog: MatDialog,
    private  songsService: SongsService,

  ) {
    super();
  }

  ngOnInit() {
    this.songsService.songsList$.pipe(
      takeUntil(this.destroy$),
      map((list) => get(list, 'response.similarity_list'))
    ).subscribe(
      (list) => {
        this.songsService.requestStatusSubject.next('success');
        this.songsList = list;
      },
      () => this.songsService.requestStatusSubject.next('error'),
      )
  }

  showInfo(song: any): void {
    this.dialog.open(SongDetailsComponent, {
      data: song,
      hasBackdrop: true,
      closeOnNavigation: true,
      panelClass: 'custom-dialog-container',
    });
  }

}
