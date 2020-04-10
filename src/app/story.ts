import { StoryOption } from './storyOption';

export class Story {
  locationName: string;
  storyTitle: string;
  storyDescription: string;
  storyOptions: StoryOption[];
  played: boolean;
  authorPlayerId: string;
}