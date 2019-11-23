import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.less']
})
export class StartScreenComponent implements OnInit {

  sessionObj = {};
  requestingSession = true;

  constructor(private socket: Socket, private router: Router) { }

  ngOnInit() {
   this.socket.emit('getSession'); 
   this.socket.on('receiveSession', (session: any) => { 
     this.receiveSession(session);
   });
  }

  hasSession(): boolean {
    return Object.keys(this.sessionObj).length > 0;
  }

  receiveSession(sessionObj: any) {
    this.sessionObj = sessionObj;
    this.requestingSession = false;
    console.log("from server", sessionObj);
  }

  joinGame() {
    let player = {
      name: 'Anonymous Panda',
      country: 'Sri Lanka'
    };
    this.socket.emit('connectPlayer', player);
    this.router.navigate(['game']);
  }

}
