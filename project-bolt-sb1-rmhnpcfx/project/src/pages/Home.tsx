import React from 'react';
import { songs, featuredPlaylists, topArtists, newReleases } from '../data/mockData';
import PlaylistCard from '../components/Cards/PlaylistCard';
import ArtistCard from '../components/Cards/ArtistCard';
import AlbumCard from '../components/Cards/AlbumCard';
import TrackList from '../components/TrackList/TrackList';

const Home: React.FC = () => {
  // Get current time to display appropriate greeting
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  
  let greeting = 'Good evening';
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon';
  }

  return (
    <div className="px-6 py-6 pb-28">
      <h1 className="text-3xl font-bold text-white mb-6">{greeting}</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredPlaylists.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Popular Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {topArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">New Releases</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {newReleases.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Top Tracks</h2>
        <TrackList tracks={songs} />
      </section>
    </div>
  );
};

export default Home;