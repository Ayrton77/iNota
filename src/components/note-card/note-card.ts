import { Component, Input } from '@angular/core';

import { Note } from '../../models/note';

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

	@Input() note: Note;

	constructor() {
	}

}
