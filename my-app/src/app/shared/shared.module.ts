import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnDestroyComponent} from "./components/on-destroy/on-destroy.component";

@NgModule({
  declarations: [
    OnDestroyComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OnDestroyComponent,
  ]
})
export class SharedModule { }
