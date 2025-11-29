import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SystemStatuses from '../SystemStatuses';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../components/SuperAdminLayout', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="superadmin-layout">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

describe('SystemStatuses Page', () => {
  it('renders system status indicators', () => {
    render(
      <BrowserRouter>
        <SystemStatuses />
      </BrowserRouter>
    );
    expect(screen.getByText('System Statuses')).toBeInTheDocument();
    expect(screen.getByText('API Gateway')).toBeInTheDocument();
    expect(screen.getByText(/Database/i)).toBeInTheDocument();
  });
});
