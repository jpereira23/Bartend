import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx'; 
import { MixerAlcohol } from './models/mixer-alcohol';
import { Drink } from './models/drink';

@Injectable()
export class DataService {
  private drinks = new Subject<string>();
  drink$ = this.drinks.asObservable();
  toBeverageDetails: Observable<Drink>;
  backToAddDrink: Observable<Drink>;
  anEditDrink: Observable<Drink>;
  addDrink(drink: string){
    this.drinks.next(drink);
  } 

  toTheBeverageDetails(aDrink: Drink)
  {
    this.toBeverageDetails = new Observable(tBD => {
      setTimeout(() => {
	tBD.next(aDrink);
      }, 1000);
    });
  }

  toTheBackToAddDrink(aDrink: Drink){
    this.toBeverageDetails = new Observable(tBD => {
      setTimeout(() => {
	tBD.next(aDrink);
      }, 1000);	
    });
  }

  editDrink(aDrink: Drink)
  {
    this.anEditDrink = new Observable(tBD => {
      setTimeout(() => {
	tBD.next(aDrink);
      }, 1000);
    });
  }

  
}
