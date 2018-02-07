import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class DynamicService {
  private isConnected = new Subject<boolean>();
  
  connected$ = this.isConnected.asObservable();
  switchPage(isConnect: boolean){
    this.isConnected.next(isConnect); 
  }


}
