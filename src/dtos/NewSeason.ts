export type ProfileDTO = {
  id: number;
  profile: any;
};

export type DetailsDTO = {
  image: any;
  age: string;
  genre: string;
  ratings: number;
  season: string;
  currentEpisode: string;
  runningTime: string;
  progress: string;
};

export type NewSeasonDTO = {
  id: number;
  name: string;
  thumbnail: any;
  stillWatching: ProfileDTO[] | [];
  details: DetailsDTO;
};

export type ContinueWatchingDTO = {
  id: number;
  name: string;
  thumbnail: string;
  overallProgress: string;
  details: DetailsDTO;
};
