import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { IHttpResult } from '../../models';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    private serviceProvider: Service,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'กำลังเข้าสู่ระบบ...'
    });

    loading.present();

    this.serviceProvider.login(this.username, this.password)
      .then((data: IHttpResult) => {
        loading.dismiss();
        if (data.ok) {
          let token = data.token;
          localStorage.setItem('token', token);
          let alert = this.alertCtrl.create({
            title: 'Welcome!',
            subTitle: 'สวัสดี, ' + data.fullname,
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.setRoot(TabsPage);
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'เกิดข้อผิดพลาด, ' + data.error,
            buttons: ['OK']
          });
          alert.present();
        }
      }, (err) => {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'เกิดข้อผิดพลาด, ' + JSON.stringify(err),
            buttons: ['OK']
          });
          alert.present();
      });
  }

}
