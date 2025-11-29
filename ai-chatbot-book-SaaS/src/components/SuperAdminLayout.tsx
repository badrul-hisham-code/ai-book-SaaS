import React, { useState } from 'react';
import SuperAdminSidebar from './SuperAdminSidebar';
import { Menu } from 'lucide-react';
import type { SuperAdminLayoutProps } from '../interface/common-data';

const SuperAdminLayout: React.FC<SuperAdminLayoutProps> = ({ children, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 p-4 bg-slate-900 border-b border-slate-800 z-30 flex items-center">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="text-white p-2 hover:bg-slate-800 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span className="ml-4 text-lg font-bold text-white">
          Admin Panel
        </span>
      </div>

      <SuperAdminSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8 min-w-0 w-full">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">{title}</h1>
        </header>
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 md:p-6 shadow-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
