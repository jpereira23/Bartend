import { Component } from '@angular/core';

import { ConnectPage } from '../connect/connect';
import { ViewPage } from '../view/view';
import { SetupPage } from '../setup/setup';
import { DynamicService } from '../dynamic.service';
import { DrinkPage } from '../drink/drink';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = ConnectPage;
  tab2Root = SetupPage;
  tab3Root = ViewPage;
  tab4Root = DrinkPage;
  isConnected: boolean = false;
  constructor(private dynamicService: DynamicService) {
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

  }
}
