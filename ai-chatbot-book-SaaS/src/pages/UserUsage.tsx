import React from 'react';
import UserLayout from '../components/UserLayout';
import { mockDatabase } from '../data/mockDatabase';
import { Zap, MessageSquare, CreditCard } from 'lucide-react';

const UserUsage: React.FC = () => {
  const userData = mockDatabase.users[0];
  const { usage } = userData;

  const tokenPercentage = (usage.tokensUsed / usage.tokensLimit) * 100;
  const queriesPercentage = (usage.queriesUsed / usage.queriesLimit) * 100;

  return (
    <UserLayout>
      <div className="p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Usage & Billing</h1>
          <p className="text-gray-400">Track your AI consumption and plan details</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Plan Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Current Plan</h3>
              <CreditCard className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-2">{usage.plan}</p>
            <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
              Upgrade Plan →
            </button>
          </div>

          {/* Tokens Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Tokens Used</h3>
              <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-2">
              {usage.tokensUsed.toLocaleString()} <span className="text-sm text-gray-500 font-normal">/ {usage.tokensLimit.toLocaleString()}</span>
            </p>
            <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
              <div 
                className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${tokenPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Queries Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Queries Used</h3>
              <MessageSquare className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white mb-2">
              {usage.queriesUsed} <span className="text-sm text-gray-500 font-normal">/ {usage.queriesLimit}</span>
            </p>
            <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${queriesPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserUsage;
