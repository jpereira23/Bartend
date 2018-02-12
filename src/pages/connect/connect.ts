import { Component, enableProdMode } from '@angular/core'; 
import { NavController } from 'ionic-angular';
import { DrinkPage } from '../drink/drink';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
enableProdMode();

@Component({
  selector: 'connect',
  templateUrl: 'connect.html'
})

export class ConnectPage{
  connection: boolean = false;
  drinkPage = DrinkPage;
  aDevice: any;
  loading: boolean = false;
 
  constructor(public navCtr: NavController, private bluetoothSerial: BluetoothSerial){
    this.getAllBluetoothDevices(); 
  }

  getAllBluetoothDevices(){
    this.bluetoothSerial.isEnabled().then((data) => {
      this.bluetoothSerial.list().then((allDevices) => {
        for(var i = 0; i < allDevices.length; i++)
        {
          if(allDevices[i].name == "Adafruit Bluefruit LE")
          {
            this.aDevice = allDevices[i];
            this.loading = true;
          }
        }
      });
    });
  }

  connect(){
    console.log("lets get it");
    var anArray: Array<string> = ["1000", "1000", "1000", "5000", "5000", "5000"];
    this.bluetoothSerial.connect(this.aDevice.address).subscribe(success => {
            for(var i = 0; i < anArray.length; i++)
            {
              this.writeStuff(anArray[i]);
            }
          }, error => {
            console.log("FUCK");
         });  
  }

  writeStuff(aString){

    this.bluetoothSerial.write(aString).then((success) => {

      }, (error) => {

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
