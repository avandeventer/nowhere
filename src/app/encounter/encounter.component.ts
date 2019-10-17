import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { STORIES } from '../stories';
import { Story } from '../story';
import { Location } from '../location';
import { StoryOption } from '../storyOption';
import { Player } from '../player';

@Component({
  selector: 'encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})

export class EncounterComponent implements OnInit {

  constructor() {
    this.selectedStory = this.stories[0];
  }

  @Input() selectedLocation: Location;
  @Input() activePlayer: Player;


  @Output() playerResolve = new EventEmitter();

  stories: Story[] = STORIES;
  
  selectedStory: Story;

  selectedChoice: StoryOption;

  choiceSelected: boolean = false;

  ngOnInit() {
  }

  locationResolve(location: Location) {
    console.log("Encounter!" + location.id);

    // this.selectedStory = this.stories.filter(locationStory => {
    //   return (locationStory.id === locationId)
    // });
    // this.selectedStory { locationId: number } = locationStories[0];
    // this.selectedStory = stories[Math.floor(Math.random() * this.stories.length)];
  }

  isGreaterThanZero (stat: number): boolean {
    return stat > 0;
  }

  choiceSelect(optionSelected: StoryOption) {
    this.choiceSelected = true;
    this.selectedChoice = optionSelected;
    this.activePlayer.charisma = this.activePlayer.charisma + optionSelected.charisma;
    this.activePlayer.intellect = this.activePlayer.intellect + optionSelected.intellect;
    this.activePlayer.dexterity = this.activePlayer.dexterity + optionSelected.dexterity;
    this.activePlayer.strength = this.activePlayer.strength + optionSelected.strength;
    this.activePlayer.wealth = this.activePlayer.wealth + optionSelected.wealth;
    this.playerResolve.emit(this.activePlayer);
  }
}
