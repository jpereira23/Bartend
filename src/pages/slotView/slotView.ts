import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Tabs } from 'ionic-angular';
import { AddBeveragePage } from '../addBeverage/addbeverage';
import { Beverage } from '../models/beverage';
import { Storage } from '@ionic/storage';
import { SlotService } from '../slot.service';
import { IntroService } from '../intro.service';
@Component({
  selector: 'slot-view',
  templateUrl: 'slotView.html'
})

export class SlotViewPage{
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
  loaded: boolean = false;
  inputSlots: Array<Beverage> = [];
  beverages: Array<Beverage> = [];
  @ViewChild('customSlotView') child;


  constructor(private navCtrl: NavController, private storage: Storage, private slotService: SlotService, private navParams: NavParams, private alertCtrl: AlertController, private introService: IntroService){
    this.getSlotStorage();
  }


  ionViewWillEnter(){
    if(this.introService.steps[0] == true){
      this.introService.welcomeAlert(this.navCtrl).present();
    }
    if(this.introService.steps[1] == false && this.introService.steps[2] == true){
      this.introService.configureSlots(this.child).present();
    }
    this.getSlotStorage();
  }

  getSlotStorage(){
    var slotStorage = this.slotService.getStorage();
    slotStorage.then((arrayOfSlots) => {
      this.loaded = true;
      if(arrayOfSlots != null){
        this.slotService.setSlots(arrayOfSlots);
      }
      this.inputSlots = this.slotService.getSlots();
      this.slot1 = this.inputSlots[0];
      this.slot2 = this.inputSlots[1];
      this.slot3 = this.inputSlots[2];
      this.slot4 = this.inputSlots[3];
      this.slot5 = this.inputSlots[4];
      this.slot6 = this.inputSlots[5];
      this.slot7 = this.inputSlots[6];
      this.slot8 = this.inputSlots[7];
      this.slot9 = this.inputSlots[8];
      this.slot10 = this.inputSlots[9];
      this.slot11 = this.inputSlots[10];
      this.slot12 = this.inputSlots[11];
      this.slot13 = this.inputSlots[12];
      this.slot14 = this.inputSlots[13];
      this.slot15 = this.inputSlots[14];
    });
    this.beverages = [];
    this.storage.get('beverages').then((val) => {
      for(var i = 0; i < val.length; i++)
      {
        var aBeverage = new Beverage();
        aBeverage.convertStorage(val[i]);
        this.beverages.push(aBeverage);
      }
    });
  }

  setSlot(event, index){
      switch(index){
        case 0:
          this.slot1 = event;
          this.saveSlots();
          if(this.introService.steps[3] == true){
            this.introService.steps[3] = false;
            this.introService.refresh();
            (this.navCtrl.parent as Tabs).select(2);
          }
          break;
        case 1:
          this.slot2 = event;
          break;
        case 2:
          this.slot3 = event;
          break;
        case 3:
          this.slot4 = event;
          break;
        case 4:
          this.slot5 = event;
          break;
        case 5:
          this.slot6 = event;
          break;
        case 6:
          this.slot7 = event;
          break;
        case 7:
          this.slot8 = event;
          break;
        case 8:
          this.slot9 = event;
          break;
        case 9:
          this.slot10 = event;
          break;
        case 10:
          this.slot11 = event;
          break;
        case 11:
          this.slot12 = event;
          break;
        case 12:
          this.slot13 = event;
          break;
        case 13:
          this.slot14 = event;
          break;
        case 14:
          this.slot15 = event;
          break;
        default:
          break;
      }
  }


  saveSlots(){
    this.inputSlots = [];
    this.inputSlots.push(this.slot1);
    this.inputSlots.push(this.slot2);
    this.inputSlots.push(this.slot3);
    this.inputSlots.push(this.slot4);
    this.inputSlots.push(this.slot5);
    this.inputSlots.push(this.slot6);
    this.inputSlots.push(this.slot7);
    this.inputSlots.push(this.slot8);
    this.inputSlots.push(this.slot9);
    this.inputSlots.push(this.slot10);
    this.inputSlots.push(this.slot11);
    this.inputSlots.push(this.slot12);
    this.inputSlots.push(this.slot13);
    this.inputSlots.push(this.slot14);
    this.inputSlots.push(this.slot15);
    this.slotService.setSlots(this.inputSlots);
    this.slotService.saveChanges();
  }

  addBeverage(){
    this.navCtrl.push(AddBeveragePage);
  }
}
