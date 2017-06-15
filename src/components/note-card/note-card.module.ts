import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteCardComponent } from './note-card';

@NgModule({
  declarations: [
    NoteCardComponent,
  ],
  imports: [
    IonicPageModule.forChild(NoteCardComponent),
  ],
  exports: [
    NoteCardComponent
  ]
})
export class NoteCardComponentModule {}
