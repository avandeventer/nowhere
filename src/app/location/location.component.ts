import { Component, OnInit, Input } from '@angular/core';
import { STORIES } from '../stories';
import { Story } from '../story';
import { Location } from '../location';
import { LOCATIONS } from '../locations';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {

  constructor() { }
  // @Input() selectedLocation: Location;
  @Input() location: Location;

  locationChosen: boolean = false;
  MAP_LOCATION: Location = { id: 0, name: 'Places in Between' };
  selectedLocation: Location = this.MAP_LOCATION;
  locations = LOCATIONS;
  stories: Story[] = STORIES;  
  selectedStory: Story;


  ngOnInit() {
  }

  locationChange(location: Location) {
    this.locationChosen = true;
    this.selectedLocation = location;
    // console.log("HEY LOOK " + this.selectedLocation.name);
  }

  returnToMap() {
    this.locationChosen = false;
    this.selectedLocation = this.MAP_LOCATION;
    // console.log("HEY LISTEN"+ this.selectedLocation.name);
  }

}