import React from 'react';
import { MessageSquare, BarChart2, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { UserSidebarProps } from '../interface/common-data';


const UserSidebar: React.FC<UserSidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-black border-r border-white/10 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            BookBot AI
          </h1>
          <button 
            onClick={onClose}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <LogOut className="w-5 h-5 rotate-180" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => {
              navigate('/chat');
              onClose();
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/chat')
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat</span>
          </button>

          <button
            onClick={() => {
              navigate('/usage');
              onClose();
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/usage')
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <BarChart2 className="w-5 h-5" />
            <span>Usage</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
