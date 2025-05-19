import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Player from '../components/Player/Player';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <Sidebar 
        isMobile={isMobile} 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div 
        className={`transition-all duration-300 ${
          isMobile ? '' : 'ml-64'
        }`}
      >
        <Header isMobile={isMobile} toggleSidebar={toggleSidebar} />
        <main>
          {children}
        </main>
      </div>
      
      <Player />
    </div>
  );
};

export default MainLayout;