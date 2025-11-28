import React from 'react';
import SuperAdminLayout from '../../components/SuperAdminLayout';
import { mockDatabase } from '../../data/mockDatabase';

const SystemStatuses: React.FC = () => {
  const statuses = mockDatabase.superAdmins[0].systemStatuses;

  return (
    <SuperAdminLayout title="System Statuses">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statuses.map((status, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-white mb-1">{status.component}</h3>
              <p className="text-sm text-slate-400">Uptime: {status.uptime}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-semibold 
              ${status.status === 'Operational' ? 'bg-green-500/20 text-green-400' : 
                status.status === 'Degraded' ? 'bg-yellow-500/20 text-yellow-400' : 
                'bg-red-500/20 text-red-400'}`}>
              {status.status}
            </div>
          </div>
        ))}
      </div>
    </SuperAdminLayout>
  );
};

export default SystemStatuses;
