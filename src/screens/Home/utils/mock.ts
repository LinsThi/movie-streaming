import profileOne from '~/assets/images/dummy_profile/1.jpg';
import profileTwo from '~/assets/images/dummy_profile/2.jpg';
import profileThree from '~/assets/images/dummy_profile/3.jpg';
import profileFour from '~/assets/images/dummy_profile/4.jpg';
import profileFive from '~/assets/images/dummy_profile/5.jpg';
import thumbnailBarbarians from '~/assets/images/series/barbarians/barbarians_cover.jpg';
import imageBarbarias from '~/assets/images/series/barbarians/barbarians.jpg';
import thumbnailBridgerton from '~/assets/images/series/bridgerton/bridgerton_cover.jpg';
import imageBridgerton from '~/assets/images/series/bridgerton/bridgerton.jpg';
import thumbnailHouseCards from '~/assets/images/series/house_of_cards/house_of_cards_cover.jpg';
import imageHouseCards from '~/assets/images/series/house_of_cards/house_of_cards.jpg';
import thumbnailMoneyHeist from '~/assets/images/series/money_heist/money_heist_cover.jpg';
import imageMoneyHeist from '~/assets/images/series/money_heist/money_heist.jpg';
import thumbnailPrisonBreak from '~/assets/images/series/prison_break/prison_break_cover.jpg';
import imagePrisonBreak from '~/assets/images/series/prison_break/prison_break.webp';
import thumbnailSalvation from '~/assets/images/series/salvation/salvation_cover.jpg';
import imageSalvation from '~/assets/images/series/salvation/salvation.jpg';
import type { ContinueWatchingDTO, NewSeasonDTO } from '~/dtos/NewSeason';

export const newSeason: NewSeasonDTO[] = [
  {
    id: 1,
    name: 'Barbarians',
    thumbnail: thumbnailBarbarians,
    stillWatching: [
      {
        id: 1,
        profile: profileOne,
      },
      {
        id: 2,
        profile: profileTwo,
      },
      {
        id: 3,
        profile: profileThree,
      },
      {
        id: 4,
        profile: profileFour,
      },
      {
        id: 5,
        profile: profileFive,
      },
    ],
    details: {
      image: imageBarbarias,
      age: '16+',
      genre: 'Historical Drama',
      ratings: 7.2,
      season: 'SEASON 1',
      currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
      runningTime: '45m',
      progress: '0%',
    },
  },
  {
    id: 2,
    name: 'Bridgerton',
    thumbnail: thumbnailBridgerton,
    stillWatching: [
      {
        id: 1,
        profile: profileFive,
      },
      {
        id: 2,
        profile: profileOne,
      },
      {
        id: 3,
        profile: profileThree,
      },
      {
        id: 4,
        profile: profileTwo,
      },
    ],
    details: {
      image: imageBridgerton,
      age: '18+',
      genre: 'Romance',
      ratings: 7.3,
      season: 'SEASON 1',
      currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
      runningTime: '45m',
      progress: '50%',
    },
  },
  {
    id: 3,
    name: 'Money Heist',
    thumbnail: thumbnailMoneyHeist,
    stillWatching: [],
    details: {
      image: imageMoneyHeist,
      age: '16+',
      genre: 'Crime',
      ratings: 8.3,
      season: 'SEASON 1',
      currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
      runningTime: '45m',
      progress: '50%',
    },
  },
  {
    id: 4,
    name: 'Salvation',
    thumbnail: thumbnailSalvation,
    stillWatching: [
      {
        id: 1,
        profile: profileOne,
      },
      {
        id: 2,
        profile: profileTwo,
      },
      {
        id: 3,
        profile: profileThree,
      },
    ],
    details: {
      image: imageSalvation,
      age: '13+',
      genre: 'Sci-Fi',
      ratings: 7.0,
      season: 'SEASON 1',
      currentEpisode: 'S1 : E1 "Episode 1 : Pilot"',
      runningTime: '45m',
      progress: '0%',
    },
  },
];

export const continueWatching: ContinueWatchingDTO[] = [
  {
    id: 1,
    name: 'Prison Break',
    thumbnail: thumbnailPrisonBreak,
    overallProgress: '20%',
    details: {
      image: imagePrisonBreak,
      age: '16+',
      genre: 'Action',
      ratings: 8.3,
      season: 'SEASON 1',
      currentEpisode: 'S1 : E8 "Episode 8 : The Old Head"',
      runningTime: '45m',
      progress: '50%',
    },
  },
  {
    id: 2,
    name: 'House of Cards',
    thumbnail: thumbnailHouseCards,
    overallProgress: '50%',
    details: {
      image: imageHouseCards,
      age: '16+',
      genre: 'Political Drama',
      ratings: 8.7,
      season: 'SEASON 1',
      currentEpisode: 'S4 : E1 "Chapter 40"',
      runningTime: '45m',
      progress: '50%',
    },
  },
  {
    id: 3,
    name: 'Bridgerton',
    thumbnail: thumbnailBridgerton,
    overallProgress: '70%',
    details: {
      image: imageBridgerton,
      age: '18+',
      genre: 'Romance',
      ratings: 7.3,
      season: 'SEASON 1',
      currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
      runningTime: '45m',
      progress: '50%',
    },
  },
  {
    id: 4,
    name: 'Money Heist',
    thumbnail: thumbnailMoneyHeist,
    overallProgress: '40%',
    details: {
      image: imageMoneyHeist,
      age: '16+',
      genre: 'Crime',
      ratings: 8.3,
      season: 'SEASON 1',
      currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
      runningTime: '45m',
      progress: '50%',
    },
  },
];

const dummyData = { newSeason, continueWatching };

export default dummyData;
