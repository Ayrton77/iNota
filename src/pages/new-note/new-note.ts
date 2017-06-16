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

	public paramId;

	notes:Note[] = [];
	
	note: Note = {id : 0, title : "", text : ""};
	
	higherId = 0;
	id = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
		this.paramId = navParams.get("id");
		console.log("-------");
		console.log(this.paramId);

		this.storage.get('notes').then((val) => {
			if( val != null && val != undefined )
			{
				this.notes = val;
			}
			length = this.notes.length;
			console.log(length);
			for (var i = length - 1; i >= 0; i--) {
				
				if(this.notes[i].id > this.higherId){
					this.higherId = this.notes[i].id;
				}
			}
			this.id = this.higherId + 1;
			this.note = {id : this.id, title : "", text : ""}

			if( this.paramId != null && this.paramId != undefined ){
				for (var i = length - 1; i >= 0; i--) {
				
					if(this.notes[i].id == this.paramId){
						let asd = this.notes[i];
						this.navCtrl.push(NewNotePage, {asd});
					} else {
						console.log("noup");
					}
				}
			}
		});
	}

	/*------ ? ------*/
	/*showFormControls(form: any) {
    	return form && form.controls['name'] &&
	    form.controls['name'].value; // Dr. IQ
	}*/


	ionViewDidLoad() {
		/*this.storage.get('notes').then((val) => {
			if( val != null && val != undefined )
			{
				this.notes = val;
			}
			length = this.notes.length;
			console.log(length);
			for (var i = length - 1; i >= 0; i--) {
				
				if(this.notes[i].id > this.higherId){
					this.higherId = this.notes[i].id;
				}
			}
			this.id = this.higherId + 1;
			this.note = {id : this.id, title : "", text : ""}
			
		});
		*/
	}
	
	addNote() {
		console.log(this.note);
		this.notes.push(this.note);
		this.storage.set( 'notes', this.notes );
		/*this.storage.clear();*/
		this.navCtrl.push(HomePage);
	}

}
