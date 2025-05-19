import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Song, PlayerState } from '../types';

interface PlayerContextType {
  playerState: PlayerState;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  nextSong: () => void;
  prevSong: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  addToQueue: (song: Song) => void;
}

const defaultPlayerState: PlayerState = {
  currentSong: null,
  isPlaying: false,
  volume: 0.8,
  progress: 0,
  queue: [],
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [playerState, setPlayerState] = useState<PlayerState>(defaultPlayerState);

  const playSong = (song: Song) => {
    setPlayerState(prev => ({
      ...prev,
      currentSong: song,
      isPlaying: true,
    }));
  };

  const pauseSong = () => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: false,
    }));
  };

  const nextSong = () => {
    const { queue } = playerState;
    if (queue.length > 0) {
      const nextSong = queue[0];
      const newQueue = queue.slice(1);
      setPlayerState(prev => ({
        ...prev,
        currentSong: nextSong,
        queue: newQueue,
        progress: 0,
      }));
    }
  };

  const prevSong = () => {
    // In a real app, we'd have a history stack
    setPlayerState(prev => ({
      ...prev,
      progress: 0,
    }));
  };

  const setVolume = (volume: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume,
    }));
  };

  const setProgress = (progress: number) => {
    setPlayerState(prev => ({
      ...prev,
      progress,
    }));
  };

  const addToQueue = (song: Song) => {
    setPlayerState(prev => ({
      ...prev,
      queue: [...prev.queue, song],
    }));
  };

  return (
    <PlayerContext.Provider
      value={{
        playerState,
        playSong,
        pauseSong,
        nextSong,
        prevSong,
        setVolume,
        setProgress,
        addToQueue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};