import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./component/home-page/home-page.component";
import {SongsListComponent} from "./component/songs-list/songs-list.component";


const routes: Routes = [
  {
    path:'welcome',
    component: HomePageComponent,
  },
  {
    path: 'songs-list',
    component: SongsListComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
