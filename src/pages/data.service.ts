import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Subject, Observable } from 'rxjs/Rx';
import { MixerAlcohol } from './models/mixer-alcohol';
import { Drink } from './models/drink';
import { Robot } from './models/robot';

@Injectable()
export class DataService {
  private drinks = new Subject<string>();
  drink$ = this.drinks.asObservable();
  toBeverageDetails: Observable<Drink>;
  backToAddDrink: Observable<Drink>;
  anEditDrink: Observable<Drink>;
  url: string = "http://138.197.205.247:8080/api/";
  headers: Headers = new Headers();

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
