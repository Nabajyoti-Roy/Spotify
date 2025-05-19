import { Song, Playlist, Artist, Album } from '../types';

export const songs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    duration: 203,
    url: '#',
  },
  {
    id: '2',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep, Where Do We Go?',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    duration: 194,
    url: '#',
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    duration: 203,
    url: '#',
  },
  {
    id: '4',
    title: 'Drivers License',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    duration: 242,
    url: '#',
  },
  {
    id: '5',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    duration: 215,
    url: '#',
  },
  {
    id: '6',
    title: 'Peaches',
    artist: 'Justin Bieber',
    album: 'Justice',
    albumArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    duration: 198,
    url: '#',
  },
];

export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Chill Vibes',
    description: 'Relaxing music to help you unwind and focus',
    coverImage: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
    songs: songs.slice(0, 4),
    createdBy: 'Spotify',
  },
  {
    id: '2',
    name: 'Workout Motivation',
    description: 'High-energy tracks to fuel your workout',
    coverImage: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg',
    songs: songs.slice(2, 6),
    createdBy: 'Spotify',
  },
  {
    id: '3',
    name: 'Top Hits 2023',
    description: 'The biggest hits of the year all in one playlist',
    coverImage: 'https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg',
    songs: songs,
    createdBy: 'Spotify',
  },
  {
    id: '4',
    name: 'Indie Discoveries',
    description: 'Fresh indie tracks you need to hear',
    coverImage: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    songs: songs.slice(1, 5),
    createdBy: 'Spotify',
  },
  {
    id: '5',
    name: 'Throwback Classics',
    description: 'Nostalgic hits from the past decades',
    coverImage: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
    songs: songs.slice(0, 3),
    createdBy: 'Spotify',
  },
  {
    id: '6',
    name: 'Acoustic Sessions',
    description: 'Stripped-back versions of your favorite songs',
    coverImage: 'https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg',
    songs: songs.slice(3, 6),
    createdBy: 'Spotify',
  },
];

export const artists: Artist[] = [
  {
    id: '1',
    name: 'The Weeknd',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    genres: ['Pop', 'R&B'],
    monthlyListeners: 85624789,
  },
  {
    id: '2',
    name: 'Billie Eilish',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    genres: ['Pop', 'Alternative'],
    monthlyListeners: 65432178,
  },
  {
    id: '3',
    name: 'Dua Lipa',
    image: 'https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg',
    genres: ['Pop', 'Dance'],
    monthlyListeners: 54321987,
  },
  {
    id: '4',
    name: 'Olivia Rodrigo',
    image: 'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg',
    genres: ['Pop', 'Teen Pop'],
    monthlyListeners: 43219876,
  },
];

export const albums: Album[] = [
  {
    id: '1',
    title: 'After Hours',
    artist: 'The Weeknd',
    coverImage: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
    releaseYear: 2020,
    songs: songs.filter(song => song.artist === 'The Weeknd'),
  },
  {
    id: '2',
    title: 'When We All Fall Asleep, Where Do We Go?',
    artist: 'Billie Eilish',
    coverImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    releaseYear: 2019,
    songs: songs.filter(song => song.artist === 'Billie Eilish'),
  },
  {
    id: '3',
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    coverImage: 'https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg',
    releaseYear: 2020,
    songs: songs.filter(song => song.artist === 'Dua Lipa'),
  },
  {
    id: '4',
    title: 'SOUR',
    artist: 'Olivia Rodrigo',
    coverImage: 'https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg',
    releaseYear: 2021,
    songs: songs.filter(song => song.artist === 'Olivia Rodrigo'),
  },
];

export const featuredPlaylists = playlists.slice(0, 4);
export const recentlyPlayed = songs.slice(0, 6);
export const topArtists = artists.slice(0, 4);
export const newReleases = albums.slice(0, 4);