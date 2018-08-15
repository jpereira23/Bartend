import { Component, ViewChild } from '@angular/core';
import { NavController, Events, NavParams, AlertController, Tabs } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Drink } from '../models/drink';
import { Beverage } from '../models/beverage';
import { MixerAlcohol } from '../models/mixer-alcohol';
import { DataService } from '../data.service';
import { IntroService } from '../intro.service';

@Component({
  selector: 'beveragedetails',
  templateUrl: 'beveragedetails.html'
})

export class BeverageDetailsPage{
  drink: Drink = new Drink();
  overHundred: boolean = false;
  currentMixerAlcohol: MixerAlcohol= new MixerAlcohol();
  beverages: Array<Beverage> = [];
  isIntro: boolean = false;
  @ViewChild('mySelect') child;


  constructor(public navCtrl: NavController, public events: Events, private navParams: NavParams, private storage: Storage, private alertCtrl: AlertController, private introService: IntroService){
    this.drink.drinkName = this.navParams.get('drinkName');
    this.drink.mixerAlcohols.push(this.currentMixerAlcohol);

    this.storage.get('beverages').then((val) => {
      if(val != null){
        this.beverages = val;
      }
    })
  }

  onChange(event){
    if(this.introService.steps[5] == true){
      this.introService.useSlider().present();
    }
  }

  ionViewWillEnter(){
    console.log(this.introService.steps);
    if(this.introService.steps[4] == true){
      console.log("The fourth slot is true");
      this.introService.selectBeverage(this.child).present();
    }
  }

  changingPercentage(){
    var sum = 0;
    for(var i = 0; i < this.drink.mixerAlcohols.length; i++){
      sum = sum + this.drink.mixerAlcohols[i].scale;
    }

    if(sum > 10)
    {
      this.overHundred = true;
    }
    else{
      this.overHundred = false;
    }
  }

  addABeverage(){

    if(this.drink.mixerAlcohols.length < 6)
    {
      var total = 10;
      for(var i = 0; i < this.drink.mixerAlcohols.length; i++)
      {
        total = total - this.drink.mixerAlcohols[i].scale;
      }
      var aMixerAlcohol = new MixerAlcohol();
      aMixerAlcohol.max = total;
      this.drink.mixerAlcohols.push(aMixerAlcohol);
    }
    else{

    }
  }

  saveBeverages(){
    this.storage.get('drinks').then((val) => {
      if(val != null){
        val.push(this.drink);
        this.storage.set('drinks', val);
      }
      else{
        var anArray: Array<Drink> = [];
        anArray.push(this.drink);
        this.storage.set('drinks', anArray);
      }
    });

    if(this.isIntro == true){

      (this.navCtrl.parent as Tabs).select(0);
    }

    if(this.isIntro == false){
      this.navCtrl.pop();
      this.navCtrl.pop();
    }
  }
}
