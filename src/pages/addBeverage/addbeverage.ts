import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Drink } from '../models/drink';
import { Beverage } from '../models/beverage';
import { DataService } from '../data.service';
@Component({
  selector: 'addbeverage',
  templateUrl: 'addbeverage.html',
})

export class AddBeveragePage{
  page: boolean = true;
  drinkName: string = "";
  booleanAlcohol: boolean;
  booleanMixer: boolean;
  beverages: Array<Beverage> = [];

  constructor(public navCtrl: NavController, private dataService: DataService, private storage: Storage){
    this.booleanAlcohol = true;
    this.booleanMixer = false;
    this.storage.get('beverages').then((val) => {
      if(val != null)
      {
	       this.beverages = val;
      }
    });
  }

  mapClicked(){
    this.page = true;
  }

  setupClicked(){
    this.page = false;
  }

  alcoholToggle(){
    if(this.booleanAlcohol == true){
      this.booleanMixer = false;
    }
    else if(this.booleanAlcohol == false){
      this.booleanMixer = true;
    }
  }

  mixerToggle(){
    if(this.booleanMixer == true){
      this.booleanAlcohol = false;
    }
    else if(this.booleanMixer == false){
      this.booleanAlcohol = true;
    }
  }

  onSubmit(){
    var aDrink = new Beverage();
    aDrink.drinkName = this.drinkName;
    aDrink.alcohol = this.booleanAlcohol;
    aDrink.mixer = this.booleanMixer;
    this.beverages.push(aDrink);
    this.storage.set('beverages', this.beverages);
    this.navCtrl.pop();
  }
}
