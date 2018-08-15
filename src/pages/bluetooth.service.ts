import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Drink } from './models/drink';
import { MixerAlcohol } from './models/mixer-alcohol';
import { Beverage } from './models/beverage';

@Injectable()
export class BluetoothService{

  loading: boolean = false;
  isConnected: boolean = false;
  aConnection = new Subject<boolean>();
  isEnabled: boolean = false;
  enabledObservable = new BehaviorSubject<boolean>(this.isEnabled);
  aDevice: any = null;

  constructor(private bluetoothSerial: BluetoothSerial){
  }

  checkAvailability(){
    return new Promise((resolve, reject) => {
      this.bluetoothSerial.isConnected().then(() => {
	       console.log("yes its connected");
	       resolve(true);
      }, (err) => {
	       resolve(false);
      });
    });
  }

  checkEnabled(){
    console.log("CHECKING JEFF!");
    return new Promise((resolve, reject) => {
      this.bluetoothSerial.isEnabled().then(() => {
	       resolve(true);
         /*this.bluetoothSerial.disconnect().then(value =>  {
           //console.log("DISCONNECTING?");
           resolve(true);

	       }, (err) => {
           console.log("ERROR DISCONNECTING?");
           resolve(true);
	       });
         */
      }, (err) =>{
	       resolve(false);
      });
    });
  }

  getAllBluetoothDevices(){
    return new Promise((resolve, reject) => {
      this.bluetoothSerial.isEnabled().then((data) => {
        this.bluetoothSerial.list().then((allDevices) => {
          console.log(allDevices);
          for(var i = 0; i < allDevices.length; i++)
          {
            if(allDevices[i].name == "Adafruit Bluefruit LE")
            {

              this.aDevice = allDevices[i];
              this.loading = true;
              resolve(true);
            }
          }
          resolve(false);
        });
      });
    });
  }

  connect(){
      this.bluetoothSerial.connect(this.aDevice.address).subscribe(success => {
        this.isConnected = true;
      }, error => {
        this.isConnected = false;
      });
  }

  writeStuff(alcohols: Uint8Array){
    this.bluetoothSerial.write(alcohols).then((success) => {
	     console.log("Great Success");
    }, (error) => {
	     console.log(error);
    });
  }

  stringToBytes(string) {
   var array = new Uint8Array(string.length);
   for (var i = 0, l = string.length; i < l; i++) {
       array[i] = string.charCodeAt(i);
    }
    return array.buffer;
  }






}
