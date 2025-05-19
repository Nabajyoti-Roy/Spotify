import React from 'react';
import { Play } from 'lucide-react';
import { Playlist } from '../../types';
import { usePlayer } from '../../context/PlayerContext';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { playSong } = usePlayer();
  
  const handlePlay = () => {
    if (playlist.songs.length > 0) {
      playSong(playlist.songs[0]);
    }
  };

  return (
    <div className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors group relative">
      <div className="relative mb-4 overflow-hidden rounded-md shadow-lg">
        <img 
          src={playlist.coverImage} 
          alt={playlist.name} 
          className="w-full aspect-square object-cover transition-all duration-300 group-hover:brightness-75"
        />
        <button 
          className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-3 opacity-0 translate-y-2 shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105"
          onClick={handlePlay}
        >
          <Play fill="black" size={20} />
        </button>
      </div>
      <h3 className="font-bold text-white truncate">{playlist.name}</h3>
      <p className="text-sm text-gray-400 mt-1 line-clamp-2">{playlist.description}</p>
    </div>
  );
};

export default PlaylistCard;