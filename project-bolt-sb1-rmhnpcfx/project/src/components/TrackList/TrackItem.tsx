import React from 'react';
import { Play, Pause, MoreHorizontal } from 'lucide-react';
import { Song } from '../../types';
import { usePlayer } from '../../context/PlayerContext';
import { formatTime } from '../../utils/formatTime';

interface TrackItemProps {
  track: Song;
  index: number;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, index }) => {
  const { playerState, playSong, pauseSong } = usePlayer();
  const { currentSong, isPlaying } = playerState;
  
  const isCurrentSong = currentSong?.id === track.id;
  
  const handlePlayPause = () => {
    if (isCurrentSong && isPlaying) {
      pauseSong();
    } else {
      playSong(track);
    }
  };

  return (
    <div 
      className={`grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 px-4 py-2 rounded-md items-center text-gray-400 hover:bg-[#282828] group ${isCurrentSong ? 'text-green-500' : ''}`}
    >
      <div className="flex items-center justify-center w-4">
        <span className="group-hover:hidden">{index + 1}</span>
        <button 
          className="hidden group-hover:block"
          onClick={handlePlayPause}
        >
          {isCurrentSong && isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
      
      <div className="flex items-center gap-3 min-w-0">
        <img 
          src={track.albumArt} 
          alt={track.album} 
          className="h-10 w-10 object-cover"
        />
        <div className="min-w-0">
          <h4 className={`text-sm font-medium truncate ${isCurrentSong ? 'text-green-500' : 'text-white'}`}>
            {track.title}
          </h4>
          <p className="text-xs truncate">{track.artist}</p>
        </div>
      </div>
      
      <div className="text-sm truncate">
        {track.album}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm">{formatTime(track.duration)}</span>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default TrackItem;