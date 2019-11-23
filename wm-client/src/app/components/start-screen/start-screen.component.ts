import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.less']
})
export class StartScreenComponent implements OnInit {

  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.emit('start');
  }

}
