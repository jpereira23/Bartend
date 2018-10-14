import { Component, Input, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'connected-page',
  templateUrl: 'connectedPage.html'
})

export class ConnectedPage{

  @Input() connectedLoading: boolean;
  @Output() isPressed = new EventEmitter<boolean>();
  @Output() tryConnect = new EventEmitter<boolean>();
  didntWork: boolean = false;
  loading: boolean = true;
  constructor(){
  }

  ngOnChanges(changes: SimpleChanges){
    const aLoading: SimpleChange = changes.connectedLoading;
    this.loading = aLoading.currentValue;
    console.log(this.loading + " from connected page");
    if(this.loading == false){
      this.didntWork = true;
    }
    else{
      this.tryConnect.emit(false);
      this.didntWork = false;
      this.loading = false;
    }
  }

  tryAgain(){
    this.isPressed.emit(false);
  }
}
