import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, X, Menu } from 'lucide-react';
import { playlists } from '../../data/mockData';

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, isOpen, toggleSidebar }) => {
  if (isMobile && !isOpen) return null;

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 ease-in-out z-20
        ${isMobile ? (isOpen ? 'w-64' : 'w-0') : 'w-64'}`}
    >
      <div className="p-6">
        {isMobile && (
          <div className="flex justify-end mb-4">
            <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
        )}
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-8 flex items-center text-white">
            <span className="mr-2 text-[#1DB954]">●</span>
            Spotify Clone
          </h1>
          
          <nav className="space-y-4">
            <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <Home className="mr-4" size={24} />
              <span className="font-medium">Home</span>
            </a>
            <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <Search className="mr-4" size={24} />
              <span className="font-medium">Search</span>
            </a>
            <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <Library className="mr-4" size={24} />
              <span className="font-medium">Your Library</span>
            </a>
          </nav>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <PlusSquare className="mr-4" size={24} />
              <span className="font-medium">Create Playlist</span>
            </a>
          </div>
          <div className="flex items-center text-gray-400 hover:text-white transition-colors mb-6">
            <Heart className="mr-4" size={24} />
            <span className="font-medium">Liked Songs</span>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <h3 className="text-gray-400 uppercase text-xs font-bold mb-4">Playlists</h3>
            <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-300px)]">
              {playlists.map(playlist => (
                <a 
                  key={playlist.id} 
                  href="#" 
                  className="block text-gray-400 hover:text-white transition-colors truncate"
                >
                  {playlist.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;