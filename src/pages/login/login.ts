import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private serviceProvider: Service) {}

  login() {
    this.serviceProvider.login(this.username, this.password)
      .then((data: IHttpResult) => {
        if (data.ok) {
          let token = data.token;
          localStorage.setItem('token', token);
          this.navCtrl.setRoot(TabsPage);
        } else {
          alert(data.error);
        }
      }, (err) => {
        console.error(err);
      });
  }

}
