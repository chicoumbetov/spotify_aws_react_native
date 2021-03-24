export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  "Your Library": undefined;
  Premium: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type YourLibraryParamList = {
  YourLibraryScreen: undefined;
};

export type PremiumParamList = {
  PremiumScreen: undefined;
};

export type Album = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number,
  imageUri: string;
  artistsHeadline: string;
  song: Song;
}

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,
}