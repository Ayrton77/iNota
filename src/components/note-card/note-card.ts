import { Component, Input } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { NewNotePage } from '../../pages/new-note/new-note';

import { HomePage } from '../../pages/home/home';

import { Note } from '../../models/note';
import { Storage } from '@ionic/storage';

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
	notes:Note[] = [];
	public nota:Note;

	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
	}
	borrarNota( id ){	

		console.log("borrar:");
		console.log(id);
				
		this.storage.get('notes').then((val) => {
			if( val != null && val != undefined )
			{
				this.notes = val;
			}
			length = this.notes.length;
			if( id != null && id != undefined ){
				for (var i = length - 1; i >= 0; i--) {
					if(this.notes[i].id == id){
						/*this.storage.remove(this.notes[i].id);*/
						console.log("sdfjhg");
						this.navCtrl.push(HomePage);
					} else {
						console.log("noup");
					}
				}
			}
		});
		
	}
	editarNota( id ){
		
		console.log("editar:");
		console.log(id);
		this.navCtrl.push(NewNotePage, {id});

		/*this.paramId = this.navParams.get("id");
		console.log("-------");
		console.log(this.paramId);

		this.storage.get('notes').then((val) => {
			if( val != null && val != undefined )
			{
				this.notes = val;
			}
			if( this.paramId != null && this.paramId != undefined ){
				for (var i = length - 1; i >= 0; i--) {
				
					if(this.notes[i].id == this.paramId){
						this.nota = this.notes[i];
						this.navCtrl.push(NewNotePage, {nota});
					} else {
						console.log("noup");
					}
				}
			}
		});*/
	}	

}
