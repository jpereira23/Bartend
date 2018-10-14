import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QRScanner } from '@ionic-native/qr-scanner';
import { IonicStorageModule } from '@ionic/storage';

import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { ViewPage } from '../pages/view/view';
import { PairingMenu } from '../pages/pairingMenu/pairingMenu';
import { DrinkPage } from '../pages/drink/drink';
import { MakeDrinkMenu } from '../pages/makeDrinkMenu/makeDrinkMenu';
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
import { IntroService } from '../pages/intro.service';
import { SlotService } from '../pages/slot.service';
import { APIService } from '../pages/api.service';
import { CustomSlotView } from '../pages/customSlotView/customSlotView';
import { CustomPopoverSelect } from '../pages/customPopoverSelect/customPopoverSelect';
import { CleanPage } from '../pages/cleanPage/cleanPage';
import { BotRegistration } from '../pages/botRegistration/botRegistration';
import { CreateUser } from '../pages/createUser/createUser';

@NgModule({
  declarations: [
    MyApp,
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
    CleanPage,
    PairingMenu,
    BotRegistration,
    MakeDrinkMenu,
    CreateUser
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    CleanPage,
    PairingMenu,
    BotRegistration,
    MakeDrinkMenu,
    CreateUser
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DynamicService,
    DataService,
    QRScanner,
    SlotService,
    IntroService,
    APIService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
