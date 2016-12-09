import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IHttpResult } from '../../models';
import { Service } from '../../providers/service';


@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  users: Array<any>;
  username: string;
  message: string;
  token: string;
  constructor(public navCtrl: NavController, private serviceProvider: Service) {
    this.token = localStorage.getItem('token');
  }

  ionViewDidLoad() {

    this.serviceProvider.getUsers(this.token)
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.users = data.rows;
        }
       }, () => {
      
    })
  }

  sendMessage() {
    this.serviceProvider.sendAlert(this.username, this.message, this.token)
      .then((data: IHttpResult) => {
        if (data.ok) {
          alert('ส่งเสร็จแล้ว')
        }
      }, (err) => {
        alert(JSON.stringify(err));
      });
  }  
}
