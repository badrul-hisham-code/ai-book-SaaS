import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserUsage from '../UserUsage';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../components/UserLayout', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="user-layout">{children}</div>,
}));

describe('UserUsage Page', () => {
  it('renders usage statistics', () => {
    render(
      <BrowserRouter>
        <UserUsage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('user-layout')).toBeInTheDocument();
    expect(screen.getByText('Current Plan')).toBeInTheDocument();
    expect(screen.getByText('Tokens Used')).toBeInTheDocument();
  });
});
