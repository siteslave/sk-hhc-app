import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Emr page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-emr',
  templateUrl: 'emr.html'
})
export class EmrPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EmrPage Page');
  }

}
