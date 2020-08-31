import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {SongsService} from "./service/songs.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import { SongsListComponent } from './component/songs-list/songs-list.component';
import { SongDetailsComponent } from './component/song-details/song-details.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ParamInterceptor} from "./custom-http-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    SongsListComponent,
    SongDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [
    SongsService,
  ],
  entryComponents: [
    SongDetailsComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
