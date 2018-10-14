import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PairingMenu } from '../pairingMenu/pairingMenu';



@Component({
  selector: 'bot-registration',
  templateUrl: 'botRegistration.html'
})

export class BotRegistration {
  idCode: string = "";
  userName: string = "";
  password: string = "";


  constructor(private navCtrl: NavController){
  
  }
  /*
  scanCode(){

  }
  */

}
