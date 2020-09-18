import { AngularFirestoreCollection, AngularFirestore } from "angularfire2/firestore";
import { Story } from "assets/story";
import { StoryOption } from "assets/storyOption";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StoryService {
    storiesCollection: AngularFirestoreCollection<Story>;
    storyOptionsCollection: AngularFirestoreCollection<StoryOption>;
    storiesObservable: Observable<Story[]>;
    storyOptionsObservable: Observable<StoryOption[]>;  

    generalStory: Story;

    constructor(private db: AngularFirestore) {}  

    readStory(locationName: string): Story {
        let storyDirectory = 'locations/';
        console.log("YOUR LOCATION DURING READ: ", locationName);
        // let readStory: Story;
        storyDirectory = storyDirectory.concat(locationName).concat('/stories/');
        this.storiesCollection = this.db.collection(storyDirectory);
        this.storiesObservable = this.storiesCollection.valueChanges();
        this.storiesObservable.subscribe((story) => {
            console.log(story);
            this.generalStory = story[0];//Math.random() * (story.length)];
            console.log("Selected story ", this.generalStory);
            let storyOptionsDirectory = storyDirectory.concat(this.generalStory.storyTitle).concat('/storyOptions/');
            this.storyOptionsCollection = this.db.collection(storyOptionsDirectory);
            this.storyOptionsObservable = this.storyOptionsCollection.valueChanges();
      
            this.storyOptionsObservable.subscribe((storyOptions) => {
              console.log(storyOptions);
              this.generalStory.storyOptions = storyOptions;
              console.log("Selected story plus options ", this.generalStory);
            });
        });
        console.log("YOUR STORY DURING READ: ", this.generalStory);
        return this.generalStory;
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
    
}