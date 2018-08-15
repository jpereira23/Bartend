import { Component, ViewChild } from '@angular/core';
import { Events, AlertController, PopoverController, Tabs } from 'ionic-angular';
import { MakeDrinkPage } from '../makeDrink/makeDrink';
import { Storage } from '@ionic/storage';
import { ViewPage } from '../view/view';
import { SlotViewPage } from '../slotView/slotView';
import { DynamicService } from '../dynamic.service';
import { DrinkPage } from '../drink/drink';
import { DataService } from '../data.service';
import { MapViewPage } from '../mapView/mapView';
import { CleanPage } from '../cleanPage/cleanPage';
import { BluetoothService } from '../bluetooth.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MakeDrinkPage;
  tab2Root = SlotViewPage;
  tab3Root = ViewPage;
  tab4Root = MapViewPage;
  tab5Root = CleanPage;
  isConnected: boolean = false;
  slotParams = {
    isIntro: false
  };
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(private dynamicService: DynamicService, private dataService: DataService, public events: Events, private bluetoothService: BluetoothService, private storage: Storage, private alertCtrl: AlertController, private popoverCtrl: PopoverController) {
    //this.events.publish('thedrinks', JSON.parse(localStorage.getItem('drinks')));

    this.dynamicService.connected$.subscribe(
      isConnect => {
        this.isConnected = isConnect;
        if(this.isConnected == false)
        {
          console.log("its false");
        }
        else if(this.isConnected == true)
        {
          console.log("its true");
        }
      });

      this.storage.get('drinks').then((drinks) => {
        if(drinks == null){
          this.tabRef.select(1);
        }
      });

  }
}
