import React from 'react';
import SuperAdminLayout from '../../components/SuperAdminLayout';
import { mockDatabase } from '../../data/mockDatabase';

const SystemConfig: React.FC = () => {
  const config = mockDatabase.superAdmins[0].systemConfig;

  return (
    <SuperAdminLayout title="System Configuration">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Setting</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {config.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.setting}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{item.value}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-400 hover:text-blue-300">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SuperAdminLayout>
  );
};

export default SystemConfig;
