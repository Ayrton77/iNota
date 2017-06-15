import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewNotePage } from '../new-note/new-note';

import { Note } from '../../models/note';

import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	notes:Note[] = [];

	constructor(public navCtrl: NavController, private storage: Storage) {
	}

	ionViewDidLoad() {
		this.storage.get('notes').then((val) => {
			if( val != null && val != undefined )
			{
				this.notes = val;
			}
		});
	}

	goToNewNote() {
		this.navCtrl.push(NewNotePage);
	}

}
