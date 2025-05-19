import React from 'react';
import NowPlaying from './NowPlaying';
import MusicControls from './MusicControls';
import VolumeControl from './VolumeControl';

const Player: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-3 z-30">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <NowPlaying />
        <MusicControls />
        <VolumeControl />
      </div>
    </div>
  );
};

export default Player;