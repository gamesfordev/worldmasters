import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.less']
})
export class GameScreenComponent implements OnInit {

  sessionActive = true;
  players = [];

  constructor(private socket: Socket, private router: Router) { }

  ngOnInit() {
    this.socket.on('playerConnected', (player: any) => {this.playerConnected(player)});
    this.socket.on('receiveMapData', (mapData: any) => {this.receiveMapData(mapData)});
    this.socket.on('sessionEnded', (mapData: any) => {this.sessionEnded(mapData)});
  }

  playerConnected(player: any) {
    this.players.push(player);
  }

  receiveMapData(mapData: any) {
    console.log(mapData);
  }

  sessionEnded(mapData: any) {
    this.sessionActive = false;
  }

  startAgain() {
    this.router.navigate(['start']);
  }

}
