import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LOCATIONS } from '../locations';
import { Location } from '../location';
import { Player } from '../player';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() {
  }

  @Input() activePlayer: Player;
  @Output() playerResolve = new EventEmitter();

  locationChosen: boolean = false;
  MAP_LOCATION: Location = { id: 0, name: 'Places in Between' };
  selectedLocation: Location = this.MAP_LOCATION;
  locations = LOCATIONS;
  ngOnInit() { }

  locationChange(location: Location) {
    this.locationChosen = true;
    this.selectedLocation = location;
  }

  returnToMap() {
    this.locationChosen = false;
    this.selectedLocation = this.MAP_LOCATION;
  }

  switchPlayer(resolvedPlayer: Player) {
    this.activePlayer = resolvedPlayer;
    this.playerResolve.emit(resolvedPlayer);
  }

}