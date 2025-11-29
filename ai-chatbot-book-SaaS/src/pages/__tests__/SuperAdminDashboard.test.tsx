import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SuperAdminDashboard from '../SuperAdminDashboard';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('../../components/SuperAdminLayout', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="superadmin-layout">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

// Mock Recharts to avoid rendering issues in test environment
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  BarChart: () => <div>BarChart</div>,
  Bar: () => null,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
  Legend: () => null,
  LineChart: () => <div>LineChart</div>,
  Line: () => null,
}));

describe('SuperAdminDashboard Page', () => {
  it('renders dashboard stats and charts', () => {
    render(
      <BrowserRouter>
        <SuperAdminDashboard />
      </BrowserRouter>
    );
    expect(screen.getByTestId('superadmin-layout')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('BarChart')).toBeInTheDocument();
    expect(screen.getByText('LineChart')).toBeInTheDocument();
  });
});
