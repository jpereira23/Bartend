import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'setup',
  templateUrl: 'setup.html',
})

export class SetupPage{
  page: boolean = true;
  drinkName: string = "";
  aType: boolean;

  constructor(public navCtrl: NavController){
    this.aType = false;
  }

  mapClicked(){
    this.page = true;
  }

  setupClicked(){
    this.page = false; 
  }

  public notify(){
    console.log(this.aType);
  }
}
