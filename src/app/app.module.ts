import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MakingRicePage } from '../pages/making-rice/making-rice'
import { DataServiceProvider } from '../providers/data-service/data-service';
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {Environment} from "./app.environment";
import {HttpModule} from "@angular/http";
import {AngularFireDatabase} from "angularfire2/database";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MakingRicePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MakingRicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
