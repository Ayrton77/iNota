import { Component, Input } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { NoteFormPage } from '../../pages/note-form/note-form';

import { HomePage } from '../../pages/home/home';

import { Note } from '../../models/note';
import { NoteProvider } from '../../providers/note/note';

/**
 * Generated class for the NoteCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'note-card',
  templateUrl: 'note-card.html'
})
export class NoteCardComponent {

	public paramId;

	@Input() note: Note;

	constructor(public navCtrl: NavController, public navParams: NavParams, private NoteProvider: NoteProvider) {
	}

	editarNota( id ){
		this.navCtrl.push(NoteFormPage, {id});
	}

}
