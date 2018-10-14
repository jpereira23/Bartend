import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { PairingMenu } from '../pairingMenu/pairingMenu';
import { Robot } from '../models/robot';
import { Drink } from '../models/drink';
import { APIService } from '../api.service';
import { CreateUser } from '../createUser/createUser';
import { Storage } from '@ionic/storage';
import { Order } from '../models/order';
import * as io from 'socket.io-client';
import { UserDrink } from '../models/userDrink';

@Component({
  selector: 'make-drink-menu',
  templateUrl: 'makeDrinkMenu.html'
})

export class MakeDrinkMenu{
  whichPage: string = "";
  idCode: string = "";
  username: string = "";
  password: string = "";
  theDrink: Drink;
  aRobot: Robot;
  socket = io('http://138.197.205.247:4000');
  drinks: Array<UserDrink> = [];
  constructor(private navCtrl: NavController, private modalController: ModalController, private apiService: APIService, private navParams: NavParams, private storage: Storage){
    this.theDrink = this.navParams.get("drink");
    var tmpDrinks: Array<Drink> = [];
    this.drinks = tmpDrinks;
    this.socket.on('listening', function(data){
      for(var i = 0; i < data.message.length; i++){
        var aDrink = new UserDrink();
        aDrink.username = data.message[i].aRobot.username;
        aDrink.drinkName = data.message[i].theDrink.drinkName;
        tmpDrinks.push(aDrink);
      }
      this.drinks = tmpDrinks;
      console.log(this.drinks.length);
    });
  }

  ionViewWillEnter(){
    this.storage.get("aUser").then((data) => {
      if(data == null){
        this.navCtrl.push(CreateUser);
      }
      if(data != null){
        this.aRobot = data;
        var aOrder = new Order();
        aOrder.aRobot = this.aRobot;
        aOrder.theDrink = this.theDrink;
        this.apiService.sendOrder(aOrder).subscribe();
      }
    })
  }

  scanCode(){
    var getData = data =>
    {
        return new Promise((resolve, reject) => {
        this.aRobot.bartendId = data;
        this.storage.set("aUser", this.aRobot);
        resolve();
      });
    };
    var data: string = "";
    this.navCtrl.push(PairingMenu, {
      data: data,
      callback: getData
    });
  }

  complete(){
    /*
    var aRobot = new Robot();
    aRobot.bartendId = this.idCode;
    aRobot.username = this.username;
    aRobot.password = this.password;


    this.apiService.registerRobot(aRobot, this.theDrink).subscribe();
    */
  }


}
