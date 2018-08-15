import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { MixerAlcohol } from '../models/mixer-alcohol';
import { Storage } from '@ionic/storage';
import { Drink } from '../models/drink';
import { Subscription } from 'rxjs/Subscription';
import { Beverage } from '../models/beverage';
import { BluetoothCenterPage } from '../bluetoothCenter/bluetoothCenter';

import { BluetoothService } from '../bluetooth.service';
import { SlotService } from '../slot.service';
import { IntroService } from '../intro.service';


@Component({
  selector: 'makedrink',
  templateUrl: 'makedrink.html'
  })

export class MakeDrinkPage {
  connected: boolean = false;
  drinks: Array<Drink> = [];
  slot1: Beverage;
  slot2: Beverage;
  slot3: Beverage;
  slot4: Beverage;
  slot5: Beverage;
  slot6: Beverage;
  slot7: Beverage;
  slot8: Beverage;
  slot9: Beverage;
  slot10: Beverage;
  slot11: Beverage;
  slot12: Beverage;
  slot13: Beverage;
  slot14: Beverage;
  slot15: Beverage;

  beverages: Array<Beverage> = [];
  aPromise: Promise<any>;
  pics: Array<String> = ["./assets/imgs/1.jpg", "./assets/imgs/2.jpg", "./assets/imgs/3.jpg", "./assets/imgs/4.jpg", "./assets/imgs/5.jpg", "./assets/imgs/6.jpg", "./assets/imgs/7.jpg", "./assets/imgs/8.jpg"];
  theDrinkSize: string = "1";
  subscription: Subscription;

  constructor(private navCtrl: NavController, private modalController: ModalController, private bluetoothService: BluetoothService, private navParams: NavParams, private storage: Storage, private slotService: SlotService, private alertCtrl: AlertController, private introService: IntroService){

  }

  ionViewWillEnter(){

    if(this.introService.steps[7] == false){
      this.introService.selectDrink().present();
    }
    this.storage.get("drinks").then((drinks) => {
      if(drinks != null){
        this.drinks = drinks;
        var aStorage = this.slotService.getStorage();
        aStorage.then((slots) => {
          this.slot1 = slots[0];
          this.slot2 = slots[1];
          this.slot3 = slots[2];
          this.slot4 = slots[3];
          this.slot5 = slots[4];
          this.slot6 = slots[5];
          this.slot7 = slots[6];
          this.slot8 = slots[7];
          this.slot9 = slots[8];
          this.slot10 = slots[9];
          this.slot11 = slots[10];
          this.slot12 = slots[11];
          this.slot13 = slots[12];
          this.slot14 = slots[13];
          this.slot15 = slots[14];
          this.finishedLoading();
        });
      }
    });



  }

  enabledAndConnectivity(){
    /*
    var availabilityPromise = this.bluetoothService.checkAvailability();
    availabilityPromise.then((available) => {
      if(available == false){
        console.log("It is false, end of story");
        let popUpModal = this.modalController.create(PopUpPage);
        popUpModal.onDidDismiss(data => {
          this.navCtrl.push(ConnectPage);
        });
        popUpModal.present();
      }
    });

    /*
    var enabledPromise = this.bluetoothService.checkEnabled();


    enabledPromise.then((enabled) => {
      if(enabled== true){
        availabilityPromise.then((available) => {
          if(available == false){
            console.log("It is false, end of story");
            let popUpModal = this.modalController.create(PopUpPage);
            popUpModal.onDidDismiss(data => {
              this.navCtrl.push(ConnectPage);
            });
            popUpModal.present();
          }
        });
      }
      else{

          let alert = this.alertCtrl.create({
          title: 'Bluetooth Disabled',
          message: 'Cannot commence without enabling bluetooth',
          buttons: [
            {
              text: 'Enabled',
              handler:  () => {
                this.enabledAndConnectivity();
              }
            }
          ]
        });
        alert.present();
      }
    });
    */
  }



  finishedLoading(){
    for(var i = 0; i < this.drinks.length; i++){
      for(var j = 0; j < this.drinks[i].mixerAlcohols.length; j++){
	       if(this.slot1.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot2.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot3.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot4.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot5.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot6.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot7.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot8.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot9.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot10.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot11.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot12.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName  && this.slot13.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot14.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName && this.slot15.drinkName != this.drinks[i].mixerAlcohols[j].beverage.drinkName){
	          this.drinks.splice(i, 1);
	          break;
	       }
      }
    }
  }

  writeDrink(i: number)
  {
    var enabledPromise = this.bluetoothService.checkEnabled();
    var availabilityPromise = this.bluetoothService.checkAvailability();
    enabledPromise.then((enabled) => {
      if(enabled == false){
        this.navCtrl.push(BluetoothCenterPage);
      }
      else{
        availabilityPromise.then((available) => {
          if(available == false){
            this.navCtrl.push(BluetoothCenterPage);
          }
          else
          {
            var anArray = this.createSlotsArray(i);
            this.bluetoothService.writeStuff(anArray);
          }
        });
      }
    });
  }

  drinkSize(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Cup Size');

    alert.addInput({
      type: 'radio',
      label: '4 Part',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '6 Part',
      value: '2',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: '10 Part',
      value: '3',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.theDrinkSize = data;
      }
    });

    alert.present();
  }

  createSlotsArray(i: number){
    var theDrink = this.drinks[i];
    var anArray = new Uint8Array(17);
    for(var j = 0; j < 15; j++){
      anArray[j] = 0;
    }

    for(var i = 0; i < theDrink.mixerAlcohols.length; i++){
      this.checkIfTen(theDrink.mixerAlcohols[i]);
      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot1.drinkName){
        anArray[0] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot2.drinkName){
        anArray[1] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot3.drinkName){
        anArray[2] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot4.drinkName){
        anArray[3] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot5.drinkName){
        anArray[4] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot6.drinkName){
        anArray[5] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot7.drinkName){
        anArray[6] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot8.drinkName){
        anArray[7] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot9.drinkName){
        anArray[8] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot10.drinkName){
        anArray[9] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot11.drinkName){
        anArray[10] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot12.drinkName){
        anArray[11] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot13.drinkName){
        anArray[12] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot14.drinkName){
        anArray[13] = theDrink.mixerAlcohols[i].scale;
      }

      if(theDrink.mixerAlcohols[i].beverage.drinkName == this.slot15.drinkName){
        anArray[14] = theDrink.mixerAlcohols[i].scale;
      }
    }

    anArray[15] = +this.theDrinkSize;
    anArray[16] = 0;

    return anArray;
  }

  checkIfTen(mixerAlcohol: MixerAlcohol){
    if(mixerAlcohol.scale == 10){
      mixerAlcohol.scale = 11;
    }
  }

}
