import { Component, OnInit } from '@angular/core';
import { Player } from '../../assets/player';
import { GameSession } from '../../assets/gameSession';
import { GameSessionService } from 'services/game-session.service';

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
  gameStarted: boolean;
  gameCode: string;

  constructor(private gameSessionService: GameSessionService) { }

  ngOnInit() {  }

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

  createGameSession() {
    this.gameStarted = true;
    this.gameCode = this.generateGameCode(4);
    let gameSession: Object = {"code": this.generateGameCode(4), "players": []};
    console.log("GAME SESSION ", gameSession);
    this.gameSessionService.form.value.gameSession = gameSession;
    let data = this.gameSessionService.form.value;
    this.gameSessionService.createGameSession(data)
        .then(res => {
          console.log("You saved a new game session! " + res);
        });
  }

  generateGameCode(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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