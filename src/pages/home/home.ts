import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteFormPage } from '../note-form/note-form';

import { Note } from '../../models/note';
import { NoteProvider } from '../../providers/note/note';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	notes:Note[] = [];

	constructor(public navCtrl: NavController, private NoteProvider: NoteProvider) {
	}

	ionViewWillEnter() {
		console.log("home");

		this.NoteProvider.getAll().then(
			val => { this.notes = val }
		)
	}

	goToNewNote() {
		this.navCtrl.push(NoteFormPage);
	}

}
