import React from 'react';
import SuperAdminSidebar from './SuperAdminSidebar';

interface SuperAdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const SuperAdminLayout: React.FC<SuperAdminLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <SuperAdminSidebar />
      <div className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </header>
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
