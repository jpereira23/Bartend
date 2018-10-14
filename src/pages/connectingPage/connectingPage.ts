import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'connecting-page',
  templateUrl: 'connectingPage.html'
})

export class ConnectingPage{
  loading: boolean = true;
  @Output() connected = new EventEmitter<number>();
  constructor(private navCtrl: NavController){
  }

  writeData(){
    this.connected.emit(1);
  }
}
