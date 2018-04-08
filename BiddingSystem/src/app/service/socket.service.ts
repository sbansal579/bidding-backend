/* import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


import * as socketIo from 'socket.io-client';

const SERVER_URL = '/rt-auction';
@Injectable()
export class Socketservice {

  private socket;

  constructor() {
    console.log('socket opening')
    this.socket = socketIo(SERVER_URL);
    console.log('socket created')
  }

  public initSocket(): void {
    //  this.socket = socketIo(SERVER_URL);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

}

class Message {

} */