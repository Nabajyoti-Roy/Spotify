import React from 'react';
import { Play } from 'lucide-react';
import { Album } from '../../types';
import { usePlayer } from '../../context/PlayerContext';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  const { playSong } = usePlayer();
  
  const handlePlay = () => {
    if (album.songs.length > 0) {
      playSong(album.songs[0]);
    }
  };

  return (
    <div className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors group relative">
      <div className="relative mb-4 overflow-hidden rounded-md shadow-lg">
        <img 
          src={album.coverImage} 
          alt={album.title} 
          className="w-full aspect-square object-cover transition-all duration-300 group-hover:brightness-75"
        />
        <button 
          className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-3 opacity-0 translate-y-2 shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105"
          onClick={handlePlay}
        >
          <Play fill="black" size={20} />
        </button>
      </div>
      <h3 className="font-bold text-white truncate">{album.title}</h3>
      <p className="text-sm text-gray-400 mt-1">{album.artist} • {album.releaseYear}</p>
    </div>
  );
};

export default AlbumCard;