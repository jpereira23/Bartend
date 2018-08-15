import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { IonicStorageModule } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { BluetoothCenterPage } from '../pages/bluetoothCenter/bluetoothCenter';
import { ViewPage } from '../pages/view/view';
import { DrinkPage } from '../pages/drink/drink';
import { EditDrinkPage } from '../pages/editDrink/editDrink';
import { AddDrinkPage } from '../pages/addDrink/adddrink';
import { AddBeveragePage } from '../pages/addBeverage/addbeverage';
import { BeverageDetailsPage } from '../pages/beverageDetails/beveragedetails';
import { EditBeveragePage } from '../pages/editBeverage/editbeverage';
import { MakeDrinkPage } from '../pages/makeDrink/makeDrink';
import { SlotViewPage } from '../pages/slotView/slotView';
import { EnabledPage } from '../pages/enabledPage/enabledPage';
import { ConnectedPage } from '../pages/connectedPage/connectedPage';
import { ConnectingPage } from '../pages/connectingPage/connectingPage';
import { MapViewPage } from '../pages/mapView/mapView';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DynamicService } from '../pages/dynamic.service';
import { DataService } from '../pages/data.service';
import { BluetoothService } from '../pages/bluetooth.service';
import { IntroService } from '../pages/intro.service';
import { SlotService } from '../pages/slot.service';
import { CustomSlotView } from '../pages/customSlotView/customSlotView';
import { CustomPopoverSelect } from '../pages/customPopoverSelect/customPopoverSelect';
import { CleanPage } from '../pages/cleanPage/cleanPage';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BluetoothCenterPage,
    ViewPage,
    DrinkPage,
    EnabledPage,
    AddDrinkPage,
    AddBeveragePage,
    BeverageDetailsPage,
    EditBeveragePage,
    MakeDrinkPage,
    SlotViewPage,
    ConnectedPage,
    ConnectingPage,
    MapViewPage,
    CustomSlotView,
    CustomPopoverSelect,
    EditDrinkPage,
    CleanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BluetoothCenterPage,
    TabsPage,
    ViewPage,
    DrinkPage,
    EnabledPage,
    AddDrinkPage,
    AddBeveragePage,
    BeverageDetailsPage,
    EditBeveragePage,
    MakeDrinkPage,
    SlotViewPage,
    ConnectedPage,
    ConnectingPage,
    MapViewPage,
    CustomSlotView,
    CustomPopoverSelect,
    EditDrinkPage,
    CleanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DynamicService,
    DataService,
    BluetoothSerial,
    BluetoothService,
    SlotService,
    IntroService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
