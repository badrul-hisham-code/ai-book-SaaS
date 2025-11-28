import React from 'react';
import SuperAdminLayout from '../../components/SuperAdminLayout';
import { mockDatabase } from '../../data/mockDatabase';
import { FileText, Download } from 'lucide-react';

const Reports: React.FC = () => {
  const reports = mockDatabase.superAdmins[0].reports;

  return (
    <SuperAdminLayout title="Reports">
      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center justify-between hover:bg-slate-800/80 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">{report.title}</h3>
                <p className="text-sm text-slate-400">{report.type} • {report.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-2 py-1 text-xs rounded-full 
                ${report.status === 'Ready' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {report.status}
              </span>
              <button 
                disabled={report.status !== 'Ready'}
                className="p-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </SuperAdminLayout>
  );
};

export default Reports;
