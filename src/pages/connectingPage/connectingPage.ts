import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BluetoothService } from '../bluetooth.service';

@Component({
  selector: 'connecting-page',
  templateUrl: 'connectingPage.html'
})

export class ConnectingPage{
  loading: boolean = true;
  @Output() connected = new EventEmitter<number>();
  constructor(private bluetoothService: BluetoothService, private navCtrl: NavController){
  }

  writeData(){
    this.connected.emit(1);
  }
}
