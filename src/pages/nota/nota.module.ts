import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotaPage } from './nota';

@NgModule({
  declarations: [
    NotaPage,
  ],
  imports: [
    IonicPageModule.forChild(NotaPage),
  ],
  exports: [
    NotaPage
  ]
})
export class NotaPageModule {}
