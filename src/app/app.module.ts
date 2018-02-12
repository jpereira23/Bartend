import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { SetupPage } from '../pages/setup/setup'; 
import { TabsPage } from '../pages/tabs/tabs';
import { ConnectPage } from '../pages/connect/connect';
import { ViewPage } from '../pages/view/view';
import { DrinkPage } from '../pages/drink/drink';
import { AddDrinkPage } from '../pages/addDrink/adddrink';
import { AddBeveragePage } from '../pages/addBeverage/addbeverage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DynamicService } from '../pages/dynamic.service';

@NgModule({
  declarations: [
    MyApp,
    SetupPage,
    TabsPage,
    ConnectPage,
    ViewPage,
    DrinkPage,
    AddDrinkPage,
    AddBeveragePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SetupPage,
    TabsPage,
    ConnectPage,
    ViewPage,
    DrinkPage,
    AddDrinkPage,
    AddBeveragePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DynamicService,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
