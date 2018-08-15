import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { AlertController, Tabs, NavController } from 'ionic-angular';
import { AddBeveragePage } from './addBeverage/addbeverage';
import { CustomSlotView } from './customSlotView/customSlotView';

@Injectable()
export class IntroService{

  /**
    * First slot for steps is to welcome the user in Slot View
    * Second Slot is to prompt them to create a beverage
    * Third Slot is to prompt them to Configure the slots
    * Fourth Slot is to allow system to push to the Drinks View
    *
    **/


  steps: Array<boolean> = [false, false, false, false, false, false, false, false];
  constructor(private storage: Storage, private alertCtrl: AlertController){
    console.log("HERE IS THE CONSTRUCTOR FOR INTRO SERVICE");
    this.storage.get('steps').then((tmpSteps) => {
      if(tmpSteps == null){
        console.log("Intro Service reports this is the first time you have opened the app.");
        for(var i = 0; i < this.steps.length; i++){
          console.log("i is: " + i);
          this.steps[i] = true;
        }
        this.storage.remove('steps');
        this.storage.set('steps', this.steps);
      }
      console.log("HMMM THIS IS A THEORY");
    });
  }

  welcomeAlert(navCtrl: NavController){
    console.log("introService: welcomeAlert()");
    var alert = this.alertCtrl.create({
      title: 'Welcome to Bartend',
      subTitle: 'We will direct you to getting set up to make your first drink',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          this.createBeverage(navCtrl).present();
          this.steps[0] = false;
          this.refresh();
        }
      }]
    });

    return alert;
  }


  createBeverage(navCtrl: NavController){
    console.log("introService: createBeverage()");
    const anAlert = this.alertCtrl.create({
      title: 'Create Beverage',
      subTitle: 'You currently have no beverages, lets add one that you put in Slot 1',
      buttons:[{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          navCtrl.push(AddBeveragePage);
          this.steps[1] = false;
          this.refresh();
        }
      }]
    });

    return anAlert;
  }

  configureSlots(child: CustomSlotView){
    console.log("introService: configureSlots");
    const zeAlert = this.alertCtrl.create({
      title: 'Configure Slots',
      subTitle: 'Now that you have entered a beverage, lets configure it to the first slot',
      buttons:[{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          let navTransition = zeAlert.dismiss();
          navTransition.then(() => {
            child.clickIt()
            this.steps[2] = false;
            this.refresh();
          });

          return false;
        }
      }]
    });

    return zeAlert;
  }

  selectBeverage(child: any){
    const theAlert = this.alertCtrl.create({
      title: 'Select Beverage',
      subTitle: 'Select the beverage for this drink',
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          child.open();
          this.steps[4] = false;
          this.refresh();
        }
      }]
    });

    return theAlert;
  }

  useSlider(){
    const aAlert = this.alertCtrl.create({
      title: 'Select Parts',
      subTitle: 'Please drag on the slider how many parts of that mixer/alcohol for your drink, once you are happy with the amount, select done in the top right corner',
      buttons:[{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          this.steps[5] = false;
          this.refresh();
        }
      }]
    });

    return aAlert;
  }

  selectDrink(){
    const laAlert = this.alertCtrl.create({
      title: 'Make Drink',
      subTitle: 'Welcome to the Make Drink page, please turn your bluetooth on, in your device settings and select the drink you just made.',
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          this.steps[7] = false;
          this.refresh();
        }
      }]
    });

    return laAlert;
  }

  refresh(){
    this.storage.remove('steps');
    this.storage.set('steps', this.steps);
  }
}
