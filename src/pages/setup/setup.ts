import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Drink } from '../models/drink';
import { AddBeveragePage } from '../addBeverage/addbeverage';

@Component({
  selector: 'setup',
  templateUrl: 'setup.html',
})

export class SetupPage{
  page: boolean = true;
  drinkName: string = "";
  booleanAlcohol: boolean;
  booleanMixer: boolean;
  drinks: Array<Drink> = []; 
  addBeveragePage = AddBeveragePage;
  
  constructor(public navCtrl: NavController){
    this.booleanAlcohol = true;
    this.booleanMixer = false;
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

  addBeverage(){
    this.navCtrl.push(this.addBeveragePage); 
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
    
  }
}
