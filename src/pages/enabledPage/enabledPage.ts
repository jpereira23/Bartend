import { Component, Input, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BluetoothService } from '../bluetooth.service';

@Component({
  selector: 'enabled-page',
  templateUrl: 'enabledPage.html'
})

export class EnabledPage{
  @Input() enabledLoading: boolean;
  @Output() isPressed = new EventEmitter<boolean>();
  @Output() readyToCheck = new EventEmitter<boolean>();
  loading: boolean = true;
  didntWork: boolean = false;
  constructor(private bluetoothService: BluetoothService){
  }

  ngOnChanges(changes: SimpleChanges){
    const aLoading: SimpleChange = changes.enabledLoading;
    this.loading = aLoading.currentValue;
    console.log(this.loading + " is what the input is receiving");
    if(this.loading == false){
      this.didntWork = true;
    }
    else{
      this.readyToCheck.emit(false);
      this.didntWork = false;
      this.loading = false;
    }
  }

  tryAgain(){
    this.isPressed.emit(false);
  }

  ionViewWillEnter(){
    console.log("DETAILS PAGE IS ENTERING");
  }
}
