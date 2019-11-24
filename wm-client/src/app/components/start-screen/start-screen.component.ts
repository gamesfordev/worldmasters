import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.less']
})
export class StartScreenComponent implements OnInit {

  sessionObj = {};
  requestingSession = true;
  country = 'Sri Lanka';

  constructor(private socket: Socket, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://ip-api.com/json').subscribe((data: any) => {
      this.country = data.country;
    });
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
    let avatars = ['Anonymous Panda', 'Ginger Cat', 'White Fox', 'Anonymous Dolphin', 'Quick Fox', 'Anonymous Elephant'];
    let player = {
      name: avatars[Math.floor(Math.random() * 10000) % avatars.length],
      country: this.country
    };
    this.socket.emit('connectPlayer', player);
    this.router.navigate(['game']);
  }

}
