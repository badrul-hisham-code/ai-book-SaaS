import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GrowthTracker from '../GrowthTracker';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../components/SuperAdminLayout', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="superadmin-layout">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  AreaChart: () => <div>AreaChart</div>,
  BarChart: () => <div>BarChart</div>,
  Area: () => null,
  Bar: () => null,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
  Legend: () => null,
}));

describe('GrowthTracker Page', () => {
  it('renders growth charts', () => {
    render(
      <BrowserRouter>
        <GrowthTracker />
      </BrowserRouter>
    );
    expect(screen.getByText('Growth Tracker')).toBeInTheDocument();
    expect(screen.getByText('AreaChart')).toBeInTheDocument();
  });
});
