import React from 'react';
import UserSidebar from './UserSidebar';

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-black">
      <UserSidebar />
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
