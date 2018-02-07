import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddDrinkPage } from '../addDrink/adddrink';
@Component({
  selector: 'view',
  templateUrl: 'view.html'
})

export class ViewPage{
  adddrink = AddDrinkPage;
  constructor(public navCtrl: NavController){

  }
  
  addDrink(){
    this.navCtrl.push(this.adddrink); 
  }
}
