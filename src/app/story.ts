import { StoryOption } from './storyOption';

export class Story {
  locationId: number;
  locationName: string;
  storyTitle: string;
  storyDescription: string;
  storyOptions: StoryOption[];
  played: boolean;
  authorPlayerId: number;
}