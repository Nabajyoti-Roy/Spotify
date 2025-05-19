import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  isMobile: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-10 flex items-center justify-between px-6 py-4 transition-colors ${
        scrolled ? 'bg-[#121212] bg-opacity-95' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        {isMobile && (
          <button 
            onClick={toggleSidebar}
            className="mr-4 text-white"
          >
            <Menu size={24} />
          </button>
        )}
        
        <div className="flex items-center space-x-4">
          <button className="bg-black bg-opacity-70 rounded-full p-1">
            <ChevronLeft size={24} color="white" />
          </button>
          <button className="bg-black bg-opacity-70 rounded-full p-1">
            <ChevronRight size={24} color="white" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-white bg-black bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center">
          <Bell size={18} />
        </button>
        <button className="text-white bg-black bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center">
          <User size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;