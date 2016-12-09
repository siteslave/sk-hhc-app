import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { EmrPage } from '../pages/emr/emr';
import { EmrDetailPage } from '../pages/emr-detail/emr-detail';
import { SettingPage } from '../pages/setting/setting';
import { EntryPage } from '../pages/entry/entry';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Service } from '../providers/service';
import { Emr } from '../providers/emr';
import { AlertPage } from '../pages/alert/alert';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage, 
    EmrPage,
    EmrDetailPage,
    SettingPage,
    EntryPage,
    LoginPage,
    AlertPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    EmrPage,
    EmrDetailPage,
    SettingPage,
    EntryPage,
    LoginPage,
    AlertPage
  ],
  providers: [
    Service, Emr,
    { provide: 'API_URL', useValue: 'http://192.168.1.120:3000' },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
