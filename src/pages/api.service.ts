import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';

@Injectable()
export class APIService {

  url: string = "http://138.197.205.247:8080/api/";
  headers = new Headers();
  result: any;
  socket = io('http://138.197.205.247:4000');


  constructor(private http: Http){
    console.log("Hello from api.service constructor");
    this.socket.on('new-message', function (data) {
      console.log(data.message);
    });
    this.headers.append('Content-Type', 'application/json');
  }

  registerRobot(robot: any, drink: any){
    console.log(robot);
    this.socket.emit('message', {
          msg: drink
      });
    return this.http.post(this.url + 'registerRobot', JSON.stringify(robot), { headers: this.headers}).map(res => res.json());
  }

  sendOrder(aOrder: any){
    return this.http.post(this.url + 'sendOrder', JSON.stringify(aOrder), { headers: this.headers}).map(res => res.json());
  }

}
