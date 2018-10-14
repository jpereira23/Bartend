import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PairingMenu } from '../pairingMenu/pairingMenu';
import { Robot } from '../models/robot';

@Component({
  selector: 'create-user',
  templateUrl: 'createUser.html'
})

export class CreateUser{

  userName: string;
  bartendID: string = "Scan Code";
  constructor(private navCtrl: NavController, private storage: Storage){

  }

  qrScanner(){
    var getData = data =>
    {
        return new Promise((resolve, reject) => {
        this.bartendID = data;
        resolve();
      });
    };
    var data: string = "";
    this.navCtrl.push(PairingMenu, {
      data: data,
      callback: getData
    });
  }

  submitUser(){
    var aRobot = new Robot();
    aRobot.username = this.userName;
    aRobot.bartendId = this.bartendID;

    this.storage.set("aUser", aRobot);

    this.navCtrl.pop();
  }
}
