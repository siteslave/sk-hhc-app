import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html'
})
export class EntryPage {
  com_services: Array<string>;
  provider: string;
  constructor(public navCtrl: NavController) {}

  save() {

  } 
  
  remove() {

  }
}
