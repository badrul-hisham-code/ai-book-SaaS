import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SystemConfig from '../SystemConfig';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../components/SuperAdminLayout', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="superadmin-layout">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

describe('SystemConfig Page', () => {
  it('renders configuration table', () => {
    render(
      <BrowserRouter>
        <SystemConfig />
      </BrowserRouter>
    );
    expect(screen.getByText('System Configuration')).toBeInTheDocument();
    expect(screen.getByText('Setting')).toBeInTheDocument();
    expect(screen.getByText('Value')).toBeInTheDocument();
    // Check for specific config item from mock data
    expect(screen.getByText('Max Tokens Per Request')).toBeInTheDocument();
  });
});
