import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Beverage } from '../models/beverage';
import { CustomPopoverSelect } from '../customPopoverSelect/customPopoverSelect';

@Component({
  selector: 'custom-slot-view',
  templateUrl: 'customSlotView.html'
})



export class CustomSlotView implements OnChanges{
  @Input() beverages: Array<Beverage> = [];
  @Input() aLabel: string;
  @Input() aSelectedBeverage: Beverage;
  @Output() finalProduct = new EventEmitter<Beverage>();
  selectedBeverage: Beverage;

  element: HTMLElement = document.getElementById("thePopover") as HTMLElement;

  constructor(private popoverController: PopoverController){
    this.selectedBeverage = this.aSelectedBeverage;
    console.log(this.selectedBeverage);
    console.log("AFTER PRINTING SELECTED BEVERAGE");
  }

  ngOnChanges(change: SimpleChanges){
    this.selectedBeverage = change['aSelectedBeverage'].currentValue;
  }

  clickIt(){
    this.presentPopover(this.element);
  }
  presentPopover(event){
    let popover = this.popoverController.create(CustomPopoverSelect, {
      beverages: this.beverages
    });

    popover.present({
      ev: event
    });

    popover.onDidDismiss((data) => {
      this.selectedBeverage = data.selectedBeverage;
      this.finalProduct.emit(data.selectedBeverage);
    });
  }
}
