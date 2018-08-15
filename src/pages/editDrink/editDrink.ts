import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Drink } from '../models/drink';
import { Beverage } from '../models/beverage';
import { MixerAlcohol } from '../models/mixer-alcohol';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'edit-drink',
  templateUrl: 'editDrink.html'
})

export class EditDrinkPage{
  theDrink: Drink;
  overHundred: Boolean = false;
  beverages: Array<Beverage>;
  itemIndex: number;
  constructor(private navParams: NavParams, private storage: Storage, private navCtrl: NavController){
    this.theDrink = this.navParams.get('theDrink');
    this.itemIndex = this.navParams.get('index');

    console.log(this.theDrink);

    this.storage.get('beverages').then((val) => {
      if(val != null){
        this.beverages = val;
      }
    })
  }

  changingPercentage(){
    var sum = 0;
    for(var i = 0; i < this.theDrink.mixerAlcohols.length; i++){
      sum = sum + this.theDrink.mixerAlcohols[i].scale;
    }

    if(sum > 10)
    {
      this.overHundred = true;
    }
    else{
      this.overHundred = false;
    }
  }

  setBeverage(event: any, index: number){
    this.theDrink.mixerAlcohols[index].beverage = event;
  }

  addABeverage(){

    if(this.theDrink.mixerAlcohols.length < 15)
    {
      var total = 10;
      for(var i = 0; i < this.theDrink.mixerAlcohols.length; i++)
      {
        total = total - this.theDrink.mixerAlcohols[i].scale;
      }
      var aMixerAlcohol = new MixerAlcohol();
      aMixerAlcohol.max = total;
      this.theDrink.mixerAlcohols.push(aMixerAlcohol);
    }
    else{

    }
  }

  saveChanges(){
    var drinks: Array<Drink> = [];
    this.storage.get('drinks').then((val) => {
      if(val != null)
      {
  	     drinks = val;
         drinks[this.itemIndex] = this.theDrink;

         this.storage.remove('drinks');
         this.storage.set('drinks', drinks);
         this.navCtrl.pop();
      }
    });



  }

}
