import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Note } from '../../models/note';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewNotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-note',
  templateUrl: 'new-note.html',
})
export class NewNotePage {

	note: Note = {id : 0, title : "", text : ""};

	notes:Note[] = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {


	}

	ionViewDidLoad() {
		this.storage.get('notes').then((val) => {
			if( val != null && val != undefined )
			{
				this.notes = val;
			}
		});
	}

	addNote() {
		this.notes.push(this.note);
		this.storage.set( 'notes', this.notes );
		this.navCtrl.push(HomePage);
	}

}
