import React from 'react';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </PlayerProvider>
  );
}

export default App;