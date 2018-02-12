import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'drink',
  templateUrl: 'drink.html'
})

export class DrinkPage {
  connected: boolean = false;
  constructor(public navCtrl: NavController, private bluetoothSerial: BluetoothSerial){
    this.connectDevice();
  }

  connectDevice(){
    this.bluetoothSerial.list().then((allDevices) => {
      for(var i = 0; i < allDevices.length; i++)
      {
        console.log("WEST SIDE");
        if(allDevices[i].name == "Adafruit Bluefruit LE")
        {
          console.log("WEST SIDE");
          
        }
      }
    });

  }
}
