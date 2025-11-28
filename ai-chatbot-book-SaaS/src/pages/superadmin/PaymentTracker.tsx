import React from 'react';
import SuperAdminLayout from '../../components/SuperAdminLayout';
import { mockDatabase } from '../../data/mockDatabase';

const PaymentTracker: React.FC = () => {
  const payments = mockDatabase.superAdmins[0].payments;

  return (
    <SuperAdminLayout title="Payment Tracker">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{payment.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${payment.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 
                      payment.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                      'bg-red-500/20 text-red-400'}`}>
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-400">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SuperAdminLayout>
  );
};

export default PaymentTracker;
