import { Component } from '@angular/core'; 
import { NavController } from 'ionic-angular';
import { DynamicService } from '../dynamic.service';
import { DrinkPage } from '../drink/drink';

@Component({
  selector: 'connect',
  templateUrl: 'connect.html'
})

export class ConnectPage{
  connection: boolean = false;
  drinkPage = DrinkPage;
  constructor(public navCtr: NavController, private dynamicService: DynamicService){
    
  }

  switchPressed()
  {
    this.navCtr.push(this.drinkPage);
  }
}
