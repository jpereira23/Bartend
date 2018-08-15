import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddDrinkPage } from '../addDrink/adddrink';
import { Drink } from '../models/drink';
import { EditDrinkPage } from '../editDrink/editDrink';
import { IntroService } from '../intro.service';

@Component({
  selector: 'view',
  templateUrl: 'view.html'
})

export class ViewPage{
  adddrink = AddDrinkPage;
  drinks: Array<Drink> = [];
  pics: Array<String> = ["./assets/imgs/1.jpg", "./assets/imgs/2.jpg", "./assets/imgs/3.jpg", "./assets/imgs/4.jpg", "./assets/imgs/5.jpg", "./assets/imgs/6.jpg", "./assets/imgs/7.jpg", "./assets/imgs/8.jpg"];
  selectOn: boolean = false;
  constructor(public navCtrl: NavController, private storage: Storage, private alertCtrl: AlertController, private introService: IntroService){
    this.storage.get('drinks').then((val) => {
      if(val != null)
      {
  	     this.drinks = val;
      }
    });
  }

  selected(){
    if(this.selectOn == false){
      this.selectOn = true;
    } else {
      this.selectOn = false;
    }
  }

  selectedCard(i: number){
    if(this.selectOn == true){
        if(this.drinks[i].selectedForDeleting == true){
          this.drinks[i].selectedForDeleting = false;
        }
        if(this.drinks[i].selectedForDeleting == false){
          this.drinks[i].selectedForDeleting = true;

        }
    }
    if(this.selectOn == false){
      this.navCtrl.push(EditDrinkPage, {
        theDrink: this.drinks[i],
        index: i
      });
    }
  }

  deleteDrinks(){
    for(var i = 0; i < this.drinks.length; i++){
      if(this.drinks[i].selectedForDeleting == true){
        this.drinks.splice(i, 1);
      }
    }
    this.selectOn = false;
    this.storage.remove('drinks');
    this.storage.set('drinks', this.drinks);
  }

  ionViewWillEnter(){

    if(this.introService.steps[5] == false && this.introService.steps[6] == true){
      this.navCtrl.parent.select(0);
    }
    this.storage.get('drinks').then((val) => {
      if(val != null)
      {
	       this.drinks = val;
         console.log(this.drinks[0].drinkName);
      }
      if(val == null){
        const theAlert = this.alertCtrl.create({
          title: 'Create Drink',
          subTitle: 'Now that you have configured the slots, it is time for you to make a drink',
          buttons:[{
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              this.navCtrl.push(this.adddrink);
            }
          }]
        });
        theAlert.present();
      }
    });
  }

  addDrink(){
    this.navCtrl.push(this.adddrink);
  }
}
