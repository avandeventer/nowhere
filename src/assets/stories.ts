import { Story } from './story';

export const STORIES: Story[] = [
    { 
        locationName: 'The Forest', 
        storyTitle: 'Cat Eye McCreedy', 
        storyDescription: 'As you step into the woods, a haggard looking man staggers out from the forest. His eyes glow yellow, the sign of something nocturnal.', 
        played: false,
        authorPlayerId: null,
        storyOptions: [
            {
                choiceText: 'Give him a drink of water',
                strength: 0,
                dexterity: 0,
                charisma: 2,
                intellect: 0,
                wealth: 0,
                resolutionText: 'The old man seems thankful. He gives you a wink with his cat eye and promises to return the favor someday.',
                nextStoryName: 'Cat Eye Returns',
                authorPlayerId: null
            },
            {
                choiceText: 'Cat eyes!? He\'s evil! Vanquish him!',
                strength: 2,
                dexterity: 0,
                charisma: 0,
                intellect: 0,
                wealth: 0,
                resolutionText: 'He dies! You\'re a hero probably!',
                nextStoryName: 'none',
                authorPlayerId: null
            }
        ]
    },
    { 
        locationName: 'The Forest', 
        storyTitle: 'The Mad Hypnotist', 
        storyDescription: 'A woman approaches you with a strange request.',
        played: false,
        authorPlayerId: null,
        storyOptions: [
            {
                choiceText: 'Sure. You\'ll learn hypnotism.',
                strength: 0,
                dexterity: 0,
                charisma: 0,
                intellect: 2,
                wealth: 0,
                resolutionText: 'You gain the power to hypnotize people, but become hypnotized yourself. To do what you\'re not sure.',
                nextStoryName: 'Political Sway',
                authorPlayerId: null
            },
            {
                choiceText: 'Hypnotism is evil! Kill her!',
                strength: 2,
                dexterity: 0,
                charisma: 0,
                intellect: 0,
                wealth: 0,
                resolutionText: 'She dies! You\'re a hero probably!',
                nextStoryName: 'none',
                authorPlayerId: null
            }
        ]
    },
];