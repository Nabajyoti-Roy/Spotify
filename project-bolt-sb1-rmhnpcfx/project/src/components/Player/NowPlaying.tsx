import React from 'react';
import { Heart } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';

const NowPlaying: React.FC = () => {
  const { playerState } = usePlayer();
  const { currentSong } = playerState;

  if (!currentSong) {
    return (
      <div className="flex items-center space-x-3 w-full max-w-xs">
        <div className="text-sm text-gray-400">
          Not playing
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 w-full max-w-xs">
      <img
        src={currentSong.albumArt}
        alt={`${currentSong.album} cover`}
        className="h-14 w-14 object-cover rounded"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-white truncate">{currentSong.title}</h4>
        <p className="text-xs text-gray-400 truncate">{currentSong.artist}</p>
      </div>
      <button className="text-gray-400 hover:text-green-500 transition-colors">
        <Heart size={16} />
      </button>
    </div>
  );
};

export default NowPlaying;