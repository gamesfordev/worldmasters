import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.less']
})
export class GameScreenComponent implements OnInit {

  players = [];

  constructor(private socket: Socket) { }

  ngOnInit() {
    this.socket.on('playerConnected', (player: any) => {this.playerConnected(player)});
    this.socket.on('receiveMapData', (player: any) => {this.receiveMapData(player)});
  }

  playerConnected(player: any) {
    this.players.push(player);
  }

  receiveMapData(mapData: any) {
    console.log(mapData);
  }

}
