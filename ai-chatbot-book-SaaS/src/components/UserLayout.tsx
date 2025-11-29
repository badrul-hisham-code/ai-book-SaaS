import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import { Menu } from 'lucide-react';
import type { UserLayoutProps } from '../interface/common-data';

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 p-4 bg-black border-b border-white/10 z-30 flex items-center">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="text-white p-2 hover:bg-white/10 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span className="ml-4 text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          BookBot AI
        </span>
      </div>

      <UserSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className="flex-1 md:ml-64 pt-20 md:pt-0">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
