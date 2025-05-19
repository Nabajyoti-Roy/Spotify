import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';
import { formatTime } from '../../utils/formatTime';

const MusicControls: React.FC = () => {
  const { playerState, playSong, pauseSong, nextSong, prevSong, setProgress } = usePlayer();
  const { currentSong, isPlaying, progress } = playerState;

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseSong();
    } else if (currentSong) {
      playSong(currentSong);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
  };

  // Format duration for display
  const formattedProgress = formatTime(progress);
  const formattedDuration = currentSong ? formatTime(currentSong.duration) : '0:00';
  
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <div className="flex items-center justify-center w-full mb-1 space-x-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <Shuffle size={16} />
        </button>
        <button 
          onClick={prevSong}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <SkipBack size={20} />
        </button>
        <button 
          onClick={handlePlayPause}
          className="bg-white rounded-full p-2 text-black hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button 
          onClick={nextSong}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <SkipForward size={20} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Repeat size={16} />
        </button>
      </div>
      
      <div className="flex items-center w-full space-x-2">
        <span className="text-xs text-gray-400 w-10 text-right">{formattedProgress}</span>
        <input
          type="range"
          min="0"
          max={currentSong?.duration || 100}
          value={progress}
          onChange={handleProgressChange}
          className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        />
        <span className="text-xs text-gray-400 w-10">{formattedDuration}</span>
      </div>
    </div>
  );
};

export default MusicControls;