import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../data.service';
import { Beverage } from '../models/beverage';
import { Drink } from '../models/drink';
import { MixerAlcohol } from '../models/mixer-alcohol';

@Component({
  selector: 'editbeverage',
  templateUrl: 'editbeverage.html'
})

export class EditBeveragePage{
  relativeDrink: Drink;
  currentMixerAlcohol: MixerAlcohol = new MixerAlcohol();
  drinks: Array<Beverage> = [];
  constructor(public navCtrl: NavController, private dataService: DataService){
    this.relativeDrink = new Drink();
    var aDrink = JSON.parse(localStorage.getItem('drinks'));
    if(aDrink != null)
    {
      for(var i = 0; i < aDrink.length; i++)
      {
      	var theDrink = new Beverage();
      	theDrink.convertJSON(aDrink[i]);
      	this.drinks.push(theDrink);
      }
    }

  }
}
