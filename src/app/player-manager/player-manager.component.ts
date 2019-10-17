import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Story } from '../story';

@Component({
  selector: 'player-manager',
  templateUrl: './player-manager.component.html',
  styleUrls: ['./player-manager.component.scss']
})
export class PlayerManagerComponent implements OnInit {

  numberOfPossiblePlayers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  numberOfPlayers: number;
  players: Player[] = [];
  numberOfPlayersSelected: boolean = false;
  playersNamed: boolean = false;
  playersSelected: boolean = false;
  activePlayer: Player;
  storyDeck: Story[] = [];

  constructor() { }

  ngOnInit() {
  }

  selectNumberOfPlayers(numberOfPlayers: number) {
    this.numberOfPlayers = numberOfPlayers;
    this.numberOfPlayersSelected = true;
    for(let i = 0; i < this.numberOfPlayers; i++) {
      let player: Player = { id: i, name: '', strength: 0, intellect: 0, charisma: 0, dexterity: 0, wealth: 0, playerNamed: false};
      this.players.push(player);
    }
    this.activePlayer = this.players[0];
  }

  namePlayer(playerId: number) {
    this.players[playerId].playerNamed = true;
    let playersNamed: number = 0;
    for(let player of this.players) {
      if(player.playerNamed) {
        playersNamed = playersNamed + 1;
      }
    }
    if(this.players.length == playersNamed) {
      this.playersNamed = true;
    }
  }

  switchPlayer(resolvedPlayer: Player) {
    this.players[resolvedPlayer.id] = resolvedPlayer;
    let nextPlayerId = resolvedPlayer.id+1;
    if(nextPlayerId >= this.players.length) {
      nextPlayerId = 0;
    }
    this.activePlayer = this.players[nextPlayerId];
    console.log("player manager reached: ");
    console.log(this.players);
    console.log("active player: ");
    console.log(this.activePlayer);
  }
}