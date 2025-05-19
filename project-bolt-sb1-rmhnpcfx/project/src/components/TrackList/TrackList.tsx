import React from 'react';
import { Clock } from 'lucide-react';
import { Song } from '../../types';
import TrackItem from './TrackItem';

interface TrackListProps {
  tracks: Song[];
  showHeader?: boolean;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, showHeader = true }) => {
  return (
    <div className="w-full">
      {showHeader && (
        <div className="grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 px-4 py-2 border-b border-[#282828] text-gray-500 text-sm uppercase">
          <div>#</div>
          <div>Title</div>
          <div>Album</div>
          <div className="flex justify-end pr-8">
            <Clock size={16} />
          </div>
        </div>
      )}
      
      <div className="mt-2">
        {tracks.map((track, index) => (
          <TrackItem 
            key={track.id} 
            track={track} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;