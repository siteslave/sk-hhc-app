import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { EmrPage } from '../emr/emr';
import { SettingPage } from '../setting/setting';
import { AlertPage } from '../alert/alert';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  tab2Root: any = EmrPage;
  tab3Root: any = SettingPage;
  tab4Root: any = AlertPage;

  constructor() {

  }
}
