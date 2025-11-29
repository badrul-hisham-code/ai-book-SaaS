import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Chat from '../Chat';
import { describe, it, expect, vi } from 'vitest';

// Mock child components
vi.mock('../../components/UserLayout', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="user-layout">{children}</div>,
}));

describe('Chat Page', () => {
  it('renders chat interface', () => {
    render(
      <MemoryRouter>
        <Chat />
      </MemoryRouter>
    );
    expect(screen.getByTestId('user-layout')).toBeInTheDocument();
    // Chat component has optional placeholder prop, check for input element instead
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
