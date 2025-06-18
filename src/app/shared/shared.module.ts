import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateBtnComponent } from './components/translate-btn/translate-btn.component';



@NgModule({
  declarations: [
    TranslateBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateBtnComponent
  ]
})
export class SharedModule { }
