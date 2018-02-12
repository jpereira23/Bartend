import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Drink } from '../models/drink';

@Component({
  selector: 'addbeverage',
  templateUrl: 'addbeverage.html',
})

export class AddBeveragePage{
  page: boolean = true;
  drinkName: string = "";
  booleanAlcohol: boolean;
  booleanMixer: boolean;
  drinks: Array<Drink> = []; 
  
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
