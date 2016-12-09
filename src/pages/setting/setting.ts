import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Push } from 'ionic-native';
import { Service } from '../../providers/service';

import {IHttpResult} from '../../models';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  accept: boolean;

  constructor(public navCtrl: NavController, private serviceProvider: Service) {}

  ionViewDidLoad() {
    console.log('Hello SettingPage Page');
  }

  changeToggle() {
    if (this.accept) {
      this.registerPush();
    } else {
      this.unregisterPush();
    }
  }  

  unregisterPush() {

  }

  registerPush() {
    let that = this;

    var push = Push.init({
      android: {
        senderID: '127264469005'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    });

    push.on('registration', function(data) {
      let deviceToken = data.registrationId;
      let username = localStorage.getItem('username');
      let token = localStorage.getItem('token');
      that.serviceProvider.saveDeviceToken(username, deviceToken, token)
        .then((data: IHttpResult) => {
          if (data.ok) {
            alert('Ok');
          } else {
            alert(JSON.stringify(data.error));
          }
        }, (err) => {
          alert(JSON.stringify(err));
        });
    });

    push.on('notification', function(data) {
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
    });

    push.on('error', function(e) {
        // e.message
    });
    
  }  
}
