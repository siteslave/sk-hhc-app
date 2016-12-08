import { Component } from '@angular/core';

import { NavController, Platform, ActionSheetController } from 'ionic-angular';
import { EntryPage } from '../entry/entry';
import { EmrDetailPage } from '../emr-detail/emr-detail';

import { IHttpResult, IService } from '../../models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  services: Array<IService>;
  dateServe: string;

  constructor(
    public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController,
    public platform: Platform
  ) {

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
