import { Component } from '@angular/core'
import { NavController, Events, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { BeverageDetailsPage } from '../beverageDetails/beveragedetails';
import { DataService } from '../data.service';
import { Drink } from '../models/drink';


@Component({
  selector: 'adddrink',
  templateUrl: 'adddrink.html'
})

export class AddDrinkPage {
  beverageName: string;
  beverageNameEntered: boolean = false;
  currentDrink: Drink = new Drink();
  beverageDetailsPage = BeverageDetailsPage;
  drinkNameEntered: boolean = false;
  drinks: Array<Drink> = [];
  isIntro: boolean = false;

  constructor(public navCtrl: NavController, private dataService: DataService, public events: Events, private storage: Storage, private alertCtrl: AlertController)
  {
    this.storage.get('drinks').then((val) => {
      if(val != null)
      {
	       this.drinks = val;
      }
      if(val == null){
        this.isIntro = true;
      }
    });
  }

  ionViewWillEnter(){
    if(this.isIntro == true){
      const theAlert = this.alertCtrl.create({
        title: 'Enter Name',
        subTitle: 'Enter name of drink, and than hit return on keyboard, than continue',
        buttons:['Ok']
      });
    }
  }

  addBeveragePage(){
    this.navCtrl.push(this.beverageDetailsPage, {
      drinkName: this.currentDrink.drinkName,
      isIntro: this.isIntro
    });
  }

  isInputChanging(){
    this.drinkNameEntered = true;
  }
}
