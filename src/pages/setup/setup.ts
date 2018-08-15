import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Drink } from '../models/drink';
import { Beverage } from '../models/beverage';
import { AddBeveragePage } from '../addBeverage/addbeverage';
import { DataService } from '../data.service';
import { SlotService } from '../slot.service';

@Component({
  selector: 'setup',
  templateUrl: 'setup.html',
})

export class SetupPage{
  page: boolean = true;

  booleanAlcohol: boolean;
  booleanMixer: boolean;
  addBeveragePage = AddBeveragePage;
  loaded: boolean = false;
  inputSlots: Array<Beverage> = [];

  constructor(public navCtrl: NavController, private dataService: DataService, public events: Events, private storage: Storage, private slotService: SlotService){
    this.booleanAlcohol = true;
    this.booleanMixer = false;
  }

  ionViewWillEnter(){
    var slotStorage = this.slotService.getStorage();
    slotStorage.then((arrayOfSlots) => {
        this.loaded = true;
        if(arrayOfSlots != null){
          this.slotService.setSlots(arrayOfSlots);

        }
        this.inputSlots = this.slotService.getSlots();
    });
  }

  onSaved(event){
    console.log("ON SAVED");
    console.log(event);
    this.inputSlots = event;

    var arrayOfSlots: Array<Beverage> = event;
    this.slotService.setSlots(arrayOfSlots);
    this.slotService.saveChanges();
  }

  ionViewWillLeave(){

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
}
