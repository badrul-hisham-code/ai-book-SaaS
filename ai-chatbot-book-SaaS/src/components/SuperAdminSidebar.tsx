import React from 'react';
import { 
  LayoutDashboard, Settings, CreditCard, TrendingUp, 
  Users, Activity, FileText, LogOut 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const SuperAdminSidebar: React.FC = () => {
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
    <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white">
          Admin Panel
        </h1>
        <p className="text-xs text-slate-500 mt-1">Superadmin Access</p>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
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
  );
};

export default SuperAdminSidebar;
