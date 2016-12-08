import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../providers/service';

import { IHttpResult } from '../../models';

@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html'
})
export class EntryPage {
  com_services: Array<string>;
  comlists: Array<any>;
  doctorlists: Array<any>;
  provider: string;

  constructor(
    public navCtrl: NavController,
    private serviceProvider: Service
  ) { }

  ionViewWillEnter() {
    this.serviceProvider.getComList()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.comlists = data.rows;
        }
      }, (err) => { });
    
    this.serviceProvider.getDoctorList()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.doctorlists = data.rows;
        }
       }, (err) => { });
  }
  
  save() {

  } 
  
  remove() {

  }
}
