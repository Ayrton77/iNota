import { Injectable } from '@angular/core';

import { Note } from '../../models/note';
import { Storage } from '@ionic/storage';

/*
  Generated class for the NoteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NoteProvider {

	notes: Note[] = [];
	note: Note = {id : 0, title : "", text : ""};

	constructor(private storage: Storage) {
	}

	new()
	{
		var higherId = 0;
		for (var i = this.notes.length - 1; i >= 0; i--) {
			if(this.notes[i].id > higherId) {
				higherId = this.notes[i].id;
			}
		}
		this.note = {id : (higherId + 1), title : "", text : ""};
		return this.note;
	}

	find( id:number )
	{
		for (var i = this.notes.length - 1; i >= 0; i--) {
			if(this.notes[i].id == id){
				this.note = this.notes[i];
				break;
			}
		}
		return this.note;
	}

	add( note:Note )
	{
		this.notes.push(this.note);
		this.save();
	}

	save()
	{
		this.storage.set( 'notes', this.notes );
	}
	
	getAll(): any {
		return this.storage.get("notes").then((val) => {
			if( val != null && val != undefined )
			{
				this.notes = val;
				return this.notes;
			}
		});
	};

	update( newNote:Note ) {
		for (var i = this.notes.length - 1; i >= 0; i--) {
			if(this.notes[i].id == newNote.id){
				this.notes[i] = newNote;
				break;
			}
		}
		this.save();
	}

	destroy( id:number ) {

		var newNotes: Note[] = [];

		for (var i = 0; i < this.notes.length; i++) {
			if(this.notes[i].id != id){
				newNotes.push( this.notes[i] );
			}
		}

		this.notes = newNotes;
		this.save();
	}

}

