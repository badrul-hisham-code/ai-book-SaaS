import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserManagement from '../UserManagement';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../components/SuperAdminLayout', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="superadmin-layout">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

describe('UserManagement Page', () => {
  it('renders user table', () => {
    render(
      <BrowserRouter>
        <UserManagement />
      </BrowserRouter>
    );
    expect(screen.getByText('User Management')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Plan')).toBeInTheDocument();
  });
});
