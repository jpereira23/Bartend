import { Injectable } from '@angular/core';
import { Drink } from './models/drink';
import { MixerAlcohol } from './models/mixer-alcohol';
import { Beverage } from './models/beverage';
import { Storage } from '@ionic/storage';

@Injectable()
export class SlotService{
  slot1: Beverage = new Beverage();
  slot2: Beverage = new Beverage();
  slot3: Beverage = new Beverage();
  slot4: Beverage = new Beverage();
  slot5: Beverage = new Beverage();
  slot6: Beverage = new Beverage();
  slot7: Beverage = new Beverage();
  slot8: Beverage = new Beverage();
  slot9: Beverage = new Beverage();
  slot10: Beverage = new Beverage();
  slot11: Beverage = new Beverage();
  slot12: Beverage = new Beverage();
  slot13: Beverage = new Beverage();
  slot14: Beverage = new Beverage();
  slot15: Beverage = new Beverage();

  isChanged: boolean = false;
  isSaved: boolean = false;
  constructor(private storage: Storage){

  }

  getStorage(){
    return this.storage.get("slots");
  }

  setSlots(arrayOfSlots: Array<Beverage>){
    this.slot1 = arrayOfSlots[0];
    this.slot2 = arrayOfSlots[1];
    this.slot3 = arrayOfSlots[2];
    this.slot4 = arrayOfSlots[3];
    this.slot5 = arrayOfSlots[4];
    this.slot6 = arrayOfSlots[5];
    this.slot7 = arrayOfSlots[6];
    this.slot8 = arrayOfSlots[7];
    this.slot9 = arrayOfSlots[8];
    this.slot10 = arrayOfSlots[9];
    this.slot11 = arrayOfSlots[10];
    this.slot12 = arrayOfSlots[11];
    this.slot13 = arrayOfSlots[12];
    this.slot14 = arrayOfSlots[13];
    this.slot15 = arrayOfSlots[14];
  }

  saveChanges(){
    var arrayOfSlots: Array<Beverage> = [];
    arrayOfSlots.push(this.slot1);
    arrayOfSlots.push(this.slot2);
    arrayOfSlots.push(this.slot3);
    arrayOfSlots.push(this.slot4);
    arrayOfSlots.push(this.slot5);
    arrayOfSlots.push(this.slot6);
    arrayOfSlots.push(this.slot7);
    arrayOfSlots.push(this.slot8);
    arrayOfSlots.push(this.slot9);
    arrayOfSlots.push(this.slot10);
    arrayOfSlots.push(this.slot11);
    arrayOfSlots.push(this.slot12);
    arrayOfSlots.push(this.slot13);
    arrayOfSlots.push(this.slot14);
    arrayOfSlots.push(this.slot15);

    this.storage.set("slots", arrayOfSlots);
  }

  getSlots(){
    var arrayOfSlots: Array<Beverage> = [];
    arrayOfSlots.push(this.slot1);
    arrayOfSlots.push(this.slot2);
    arrayOfSlots.push(this.slot3);
    arrayOfSlots.push(this.slot4);
    arrayOfSlots.push(this.slot5);
    arrayOfSlots.push(this.slot6);
    arrayOfSlots.push(this.slot7);
    arrayOfSlots.push(this.slot8);
    arrayOfSlots.push(this.slot9);
    arrayOfSlots.push(this.slot10);
    arrayOfSlots.push(this.slot11);
    arrayOfSlots.push(this.slot12);
    arrayOfSlots.push(this.slot13);
    arrayOfSlots.push(this.slot14);
    arrayOfSlots.push(this.slot15);
    
    return arrayOfSlots;
  }


}
