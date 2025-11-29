import React from 'react';
import { mockDatabase } from '../data/mockDatabase';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { DollarSign, Users, Activity, Server } from 'lucide-react';
import SuperAdminLayout from '../components/SuperAdminLayout';

const SuperAdminDashboard: React.FC = () => {
  const superAdminData = mockDatabase.superAdmins[0];

  return (
    <SuperAdminLayout title="Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">Total Revenue</h3>
            <p className="text-3xl font-bold text-emerald-400">{superAdminData.globalStats.totalRevenue}</p>
          </div>
          <DollarSign className="w-8 h-8 text-emerald-500/20" />
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">Total Users</h3>
            <p className="text-3xl font-bold text-blue-400">{superAdminData.globalStats.totalUsers.toLocaleString()}</p>
          </div>
          <Users className="w-8 h-8 text-blue-500/20" />
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">Active Subs</h3>
            <p className="text-3xl font-bold text-indigo-400">{superAdminData.globalStats.activeSubscriptions.toLocaleString()}</p>
          </div>
          <Activity className="w-8 h-8 text-indigo-500/20" />
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-slate-400 mb-1">Server Health</h3>
            <div className={`text-3xl font-bold ${superAdminData.globalStats.serverHealth === 'Healthy' ? 'text-green-500' : 'text-red-500'}`}>
              {superAdminData.globalStats.serverHealth}
            </div>
          </div>
          <Server className="w-8 h-8 text-slate-500/20" />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-6">Revenue Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={superAdminData.revenueChart}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-lg font-semibold text-white mb-6">User Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={superAdminData.userGrowthChart}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Total Users" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* System Logs */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/50">
          <h2 className="text-lg font-semibold text-white">System Logs</h2>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {superAdminData.systemLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${log.level === 'info' ? 'bg-blue-500/20 text-blue-400' : 
                        log.level === 'warn' ? 'bg-yellow-500/20 text-yellow-400' : 
                        'bg-red-500/20 text-red-400'}`}>
                      {log.level.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{log.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{new Date(log.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;
