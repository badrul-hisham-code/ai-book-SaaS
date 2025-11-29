import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Reports from '../Reports';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../../components/SuperAdminLayout', () => ({
  default: ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div data-testid="superadmin-layout">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

describe('Reports Page', () => {
  it('renders reports interface', () => {
    render(
      <BrowserRouter>
        <Reports />
      </BrowserRouter>
    );
    expect(screen.getByText('Reports')).toBeInTheDocument();
    // Reports page displays report items from mock data, not a "Generate Report" button
  });
});
