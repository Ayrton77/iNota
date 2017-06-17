import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Camera } from '@ionic-native/camera';

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
  styles : [`
  	.image-btn {
	    border: 1px dashed #000;
	    background: #f1f1f1;
	    width: 100%;
	    height: 100px;
	    border-radius: 5px;
	    margin-bottom: 15px;
	}
  `]
})
export class NoteFormPage {

	public paramId;

	notes:Note[] = [];
	
	note: Note = {id : 0, image : "", title : "", text : ""};

	higherId = 0;
	id = 0;

	action = "new";

	constructor( public navCtrl: NavController,
				 public navParams: NavParams,
				 private NoteProvider: NoteProvider,
				 public alertCtrl: AlertController,
				 public toastCtrl: ToastController,
				 private camera: Camera ) { }

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


	takePicture() {

		this.camera.getPicture({
			quality: 100,
			destinationType: this.camera.DestinationType.DATA_URL,
			targetWidth: 1024,
			targetHeight: 768
		}).then((imageData) => {

			this.note.image = "data:image/jpeg;base64," + imageData;

		}, (err) => {
			let toast = this.toastCtrl.create({
				message: 'Ocurrió un error al capturar la foto',
				duration: 3000,
				position: 'top'
			});
			toast.present();
		});

	}


}
