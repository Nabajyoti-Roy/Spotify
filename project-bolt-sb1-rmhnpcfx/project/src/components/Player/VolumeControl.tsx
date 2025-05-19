import React from 'react';
import { Volume1, Volume2, VolumeX } from 'lucide-react';
import { usePlayer } from '../../context/PlayerContext';

const VolumeControl: React.FC = () => {
  const { playerState, setVolume } = usePlayer();
  const { volume } = playerState;
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const VolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };

  return (
    <div className="flex items-center space-x-2 w-full max-w-xs justify-end">
      <button className="text-gray-400 hover:text-white transition-colors">
        <VolumeIcon />
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
      />
    </div>
  );
};

export default VolumeControl;