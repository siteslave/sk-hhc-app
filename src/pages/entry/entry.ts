import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { Camera, CameraOptions } from 'ionic-native';

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
  imageData: string;
  base64Image: string;

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

  takePicture() {
    let options: CameraOptions;
    options = {
      quality: 60,
      sourceType: 1,
      destinationType: 0
    }
    Camera.getPicture(options).then((imageData) => {
      this.imageData = imageData;
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      
    });
  }

  browsePicture() {
    let options: CameraOptions;
    options = {
      quality: 60,
      sourceType: 0,
      destinationType: 0
    }
    Camera.getPicture(options).then((imageData) => {
      this.imageData = imageData;
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      
    });
  }
  
  save() {

  } 
  
  remove() {

  }
}
