import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { Note } from '../../models/note';

/**
* Generated class for the NotaPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
	selector: 'page-nota',
	templateUrl: 'nota.html',
})
export class NotaPage {
	tituloNota:any;
	contenidoNota:any;

	notes: Note[] = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

	}

	ionViewWillEnter() {
		this.storage.get('notes').then((val) => {
			this.notes = val;
		});
	}

	/*ionViewDidLoad() {
		console.log('ionViewDidLoad NotaPage');
	}*/

	agregarNota(){
		console.log("agregando nota:");
		console.log(this.tituloNota);
		console.log(this.contenidoNota);
		this.storage.set('titulo', this.tituloNota);
		this.storage.set('contenido', this.contenidoNota);
		this.storage.set('nota', [this.tituloNota, this.contenidoNota]);
	}	
}
