import React from 'react';
import { 
  LayoutDashboard, Settings, CreditCard, TrendingUp, 
  Users, Activity, FileText, LogOut 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SuperAdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuperAdminSidebar: React.FC<SuperAdminSidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/superadmin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/superadmin/config', label: 'System Config', icon: Settings },
    { path: '/superadmin/payments', label: 'Payment Tracker', icon: CreditCard },
    { path: '/superadmin/growth', label: 'Growth Tracker', icon: TrendingUp },
    { path: '/superadmin/users', label: 'User Management', icon: Users },
    { path: '/superadmin/system', label: 'System Statuses', icon: Activity },
    { path: '/superadmin/reports', label: 'Reports', icon: FileText },
  ];

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
        fixed top-0 left-0 h-full w-64 bg-slate-900 border-r border-slate-800 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white">
              Admin Panel
            </h1>
            <p className="text-xs text-slate-500 mt-1">Superadmin Access</p>
          </div>
          <button 
            onClick={onClose}
            className="md:hidden text-slate-400 hover:text-white"
          >
            <LogOut className="w-5 h-5 rotate-180" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
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

export default SuperAdminSidebar;
