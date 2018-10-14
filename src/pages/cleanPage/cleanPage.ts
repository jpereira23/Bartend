import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'clean-page',
  templateUrl: 'cleanPage.html'
})

export class CleanPage{
  constructor(private navCtrl: NavController){

  }

  commenceCleaning(){
    /*
    var enabledPromise = this.bluetoothService.checkEnabled();
    var availabilityPromise = this.bluetoothService.checkAvailability();

    enabledPromise.then((enabled) => {
      if(enabled == false){
        this.navCtrl.push(BluetoothCenterPage);
      }
      else
      {
          availabilityPromise.then((available) => {
            if(available == false){
              this.navCtrl.push(BluetoothCenterPage);
            }
            else
            {
              var anArray = new Uint8Array([0, 11, 0, 11, 0, 11, 0, 11, 0, 11, 0, 11, 0, 11, 0, 0, 1]);
              this.bluetoothService.writeStuff(anArray);
            }
          });
      }
    });
    */
  }
}
