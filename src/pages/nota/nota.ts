import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	// let notas : [string,string];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotaPage');
  }



	agregarNota(){

    console.log(this.tituloNota);

    console.log(this.contenidoNota);



	}	
}
