import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story } from '../story';
import { Location } from '../location';
import { StoryOption } from '../storyOption';
import { Player } from '../player';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})

export class EncounterComponent implements OnInit {

  constructor(private db: AngularFirestore) {
  }

  storiesCollection: AngularFirestoreCollection<Story>;
  storyOptionsCollection: AngularFirestoreCollection<StoryOption>;
  storiesObservable: Observable<Story[]>;
  storyOptionsObservable: Observable<StoryOption[]>;
  @Input() selectedLocation: Location;
  @Input() activePlayer: Player;
  @Output() playerResolve = new EventEmitter();
  
  selectedStory: Story;
  selectedChoice: StoryOption;
  choiceSelected: boolean = false;

  ngOnInit() {
      let storyDirectory = 'locations/';
      storyDirectory = storyDirectory.concat(this.selectedLocation.name).concat('/stories/');
      this.storiesCollection = this.db.collection(storyDirectory);
      this.storiesObservable = this.storiesCollection.valueChanges();
      this.storiesObservable.subscribe((story) => {
          console.log(story);
          this.selectedStory = story[0];//Math.random() * (story.length)];
          console.log("Selected story ", this.selectedStory);
          let storyOptionsDirectory = storyDirectory.concat(this.selectedStory.storyTitle).concat('/storyOptions/');
          this.storyOptionsCollection = this.db.collection(storyOptionsDirectory);
          this.storyOptionsObservable = this.storyOptionsCollection.valueChanges();
    
          this.storyOptionsObservable.subscribe((storyOptions) => {
            console.log(storyOptions);
            this.selectedStory.storyOptions = storyOptions;
            console.log("Selected story plus options ", this.selectedStory);
          });
    
      });


      console.log("PREFIX ", this.selectedStory);
  }

  deserializeDatabaseStory(databaseStory: Story): Story {
    let angularStory: Story;
    angularStory.locationName = databaseStory.locationName;
    angularStory.storyDescription = databaseStory.storyDescription;
    angularStory.storyTitle = databaseStory.storyTitle;
    angularStory.storyOptions = databaseStory.storyOptions;
    angularStory.played = databaseStory.played;
    angularStory.authorPlayerId = databaseStory.authorPlayerId;
    return angularStory;
  }

  locationResolve(location: Location) {
    console.log("Encounter!" + location.id);

    // this.selectedStory = this.stories.filter(locationStory => {
    //   return (locationStory.id === locationId)
    // });
    // this.selectedStory { locationId: number } = locationStories[0];
    // this.selectedStory = stories[Math.floor(Math.random() * this.stories.length)];  
  }

  isNotZero (stat: number): boolean {
    return stat != 0;
  }

  rewardText (stat: number): string {
    let rewardText: string = '';
    if(this.isNotZero(stat)) {
      let rewardStatus: string = 'gained ';
      if(stat < 0) rewardStatus = 'lost ';  
      rewardText = 'You '.concat(rewardStatus).concat(stat.toString()).concat(' ');
    }
    return rewardText;
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