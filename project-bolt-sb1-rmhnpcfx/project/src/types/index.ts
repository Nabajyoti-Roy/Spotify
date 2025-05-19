export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  duration: number;
  url: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  songs: Song[];
  createdBy: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
  monthlyListeners: number;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverImage: string;
  releaseYear: number;
  songs: Song[];
}

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  queue: Song[];
}