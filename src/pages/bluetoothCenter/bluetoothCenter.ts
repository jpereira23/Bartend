import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { BluetoothService } from '../bluetooth.service';

@Component({
  selector: 'bluetooth-center',
  templateUrl: 'bluetoothCenter.html'
})

export class BluetoothCenterPage{
  @ViewChild('mySlide') slides: Slides;
  enabledLoading: boolean = false;
  connectedLoading: boolean = false;
  connectingLoading: boolean = false;
  constructor(private navCtrl: NavController, private bluetoothService: BluetoothService){

  }

  ionViewWillEnter(){
    this.slides.lockSwipes(true);
  }

  tryAgain(event: any){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  begin(){
    var enabledPromise = this.bluetoothService.checkEnabled();
    enabledPromise.then((enabled) => {
      if(enabled == true){
        this.enabledLoading = true;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      }
      else{
        this.enabledLoading = false;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      }
    });
  }

  findDevices(event: any){
    var availabilityPromise = this.bluetoothService.getAllBluetoothDevices();

    availabilityPromise.then((available) => {
      if(available == true){
        this.connectedLoading = true;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      }
      else{
        this.connectedLoading = false;
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      }
    });
  }

  tryConnect(event: any){
    this.bluetoothService.connect();
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  connected(event: any){
    console.log("SO ARE WE MAKING IT HERE");
    this.navCtrl.pop();
  }
}
