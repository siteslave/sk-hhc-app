import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EmrDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-emr-detail',
  templateUrl: 'emr-detail.html'
})
export class EmrDetailPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EmrDetailPage Page');
  }

}
