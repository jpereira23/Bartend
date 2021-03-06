import { Component, Input } from '@angular/core';
import { ViewController, PopoverController, NavParams} from 'ionic-angular';
import { Beverage } from '../models/beverage';

@Component({
  selector: 'custom-popover-select',
  templateUrl: 'customPopoverSelect.html'
})

export class CustomPopoverSelect{
  beverages: Array<Beverage> = [];

  constructor(private navParams: NavParams, private viewCtrl: ViewController){
    this.beverages = this.navParams.get('beverages');
  }

  selectDrink(i: number){
    this.viewCtrl.dismiss({
      selectedBeverage: this.beverages[i]
    });
  }
}
