import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Note } from '../../models/note';
import { NoteProvider } from '../../providers/note/note';

/**
 * Generated class for the NewNotePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-note-form',
  templateUrl: 'note-form.html',
})
export class NoteFormPage {

	public paramId;

	notes:Note[] = [];
	
	note: Note = {id : 0, title : "", text : ""};
	
	higherId = 0;
	id = 0;

	action = "new";

	constructor( public navCtrl: NavController,
				 public navParams: NavParams,
				 private NoteProvider: NoteProvider,
				 public alertCtrl: AlertController,
				 public toastCtrl: ToastController ) { }

	ionViewWillEnter() {
		console.log("new note");

		this.NoteProvider.getAll().then(
			val => {
				this.notes = val;

				this.paramId = this.navParams.get("id");

				if( this.paramId != null && this.paramId != undefined )
				{
					// si se busca editar una nota
					this.action = "update";
					this.note = this.NoteProvider.find( this.paramId );
				}
				else
				{
					// sino crear una nueva nota
					this.action = "new";
					this.note = this.NoteProvider.new();
				}
			}
		)
	}
	
	addNote() {
		let toast = this.toastCtrl.create({
			message: 'Nota creada correctamente',
			duration: 3000,
			position: 'top'
		});
		toast.present();
		this.NoteProvider.add( this.note );
		this.navCtrl.push(HomePage);
	}

	updateNote() {
		let toast = this.toastCtrl.create({
			message: 'Nota actualizada correctamente',
			duration: 3000,
			position: 'top'
		});
		toast.present();
		this.NoteProvider.update( this.note );
		this.navCtrl.push(HomePage);
	}

	showConfirm() {
		let confirm = this.alertCtrl.create({
			title: 'Eliminar nota',
			message: '¿Seguro que deseas eliminar la nota?',
			buttons: [
				{
					text: 'Cancelar',
					handler: () => {
						console.log('Disagree clicked');
					}
				},
				{
					text: 'Aceptar',
					handler: () => {
						this.destroyNote();
					}
				}
			]
		});
		confirm.present();
	}

	destroyNote() {
		let toast = this.toastCtrl.create({
			message: 'Nota eliminada correctamente',
			duration: 3000,
			position: 'top'
		});
		toast.present();

		this.NoteProvider.destroy( this.note.id );
		this.navCtrl.push(HomePage);
	}


}
