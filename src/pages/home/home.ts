import { Component } from '@angular/core';

import { NavController, Platform, ActionSheetController, LoadingController } from 'ionic-angular';
import { EntryPage } from '../entry/entry';
import { EmrDetailPage } from '../emr-detail/emr-detail';

import { IHttpResult, IService } from '../../models';
import { Service } from '../../providers/service';

import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  services: Array<IService>;
  vstdate: any;

  constructor(
    public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private serviceProvider: Service,
    private loadingCtrl: LoadingController
  ) {
    this.vstdate = moment().format('YYYY-MM-DD');
  }

  getServices() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    
    this.serviceProvider.getServices(this.vstdate)
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.services = data.rows;
        }
        loading.dismiss();
      }, (err) => { 
        loading.dismiss();
        console.error(err);
      });
  }

  ionViewWillEnter() {
    this.getServices();
  }

  showMenu() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'บันทึกข้อมูล',
         icon: !this.platform.is('ios') ? 'create' : null,
         handler: () => {
           this.navCtrl.push(EntryPage, { hn: null, vn: null });
         }
       },
       {
         text: 'ดูประวัติรับบริการ',
         icon: !this.platform.is('ios') ? 'search' : null,
         handler: () => {
           this.navCtrl.push(EmrDetailPage, { hn: null });
         }
       },
       {
         text: 'ยกเลิก',
         icon: !this.platform.is('ios') ? 'close' : null,
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

  search(event) {
    let val = event.target.value;
    console.log(val);
  }  

}
