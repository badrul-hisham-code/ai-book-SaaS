import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PaymentTracker from '../PaymentTracker';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../components/SuperAdminLayout', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="superadmin-layout">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

describe('PaymentTracker Page', () => {
  it('renders payment table', () => {
    render(
      <BrowserRouter>
        <PaymentTracker />
      </BrowserRouter>
    );
    expect(screen.getByText('Payment Tracker')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
});
