import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  AlertController,
  LoadingController,
  ToastController
} from 'ionic-angular';
import { Service } from '../../providers/service';
import { Camera, CameraOptions } from 'ionic-native';

import { IHttpResult, IService } from '../../models';

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
  ptname: string;
  hn: string;
  vn: string;
  token: string;

  constructor(
    public navCtrl: NavController,
    private serviceProvider: Service,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { 
    this.ptname = this.navParams.get('ptname');
    this.vn = this.navParams.get('vn');
    this.hn = this.navParams.get('hn');
    this.token = localStorage.getItem('token');
  }

  ionViewWillEnter() {
    this.serviceProvider.getComList(this.token)
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.comlists = data.rows;
        }
      }, (err) => { });
    
    this.serviceProvider.getDoctorList(this.token)
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.doctorlists = data.rows;
        }
       }, (err) => { });
    
    this.serviceProvider.getImage(this.vn, this.token)
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.base64Image = 'data:image/jpeg;base64,' + data.rows;
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
  
  removePicture() {

    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'ต้องการลบ ใช่หรือไม่?',
      buttons: [
        {
          text: 'ไม่',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            this.serviceProvider.removeImage(this.vn, this.token)
              .then(() => {
                this.base64Image = null;
                this.imageData = null;
              }, (err) => {
                console.error(err);
              });
          }
        }
      ]
    });
    confirm.present();
  }

  save() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    
    this.serviceProvider.save(this.vn, this.imageData, this.token)
      .then((data: IHttpResult) => {
        if (data.ok) {
          let toast = this.toastCtrl.create({
            message: 'Image saved successfully',
            duration: 3000
          });
          toast.present();
        }

        loading.dismiss();
      }, (err) => {
        loading.dismiss();
        console.error(err);
      });
  } 
  
  remove() {

  }
}
