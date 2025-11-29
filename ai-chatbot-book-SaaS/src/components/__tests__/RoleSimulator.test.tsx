import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RoleSimulator from '../RoleSimulator';
import { describe, it, expect, vi } from 'vitest';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('RoleSimulator Component', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <RoleSimulator />
      </BrowserRouter>
    );
    expect(screen.getByText('Role Simulator (Dev Only)')).toBeInTheDocument();
    expect(screen.getByText('Simulate User')).toBeInTheDocument();
    expect(screen.getByText('Simulate Superadmin')).toBeInTheDocument();
  });

  it('navigates to /chat when Simulate User is clicked', () => {
    render(
      <BrowserRouter>
        <RoleSimulator />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Simulate User'));
    expect(mockNavigate).toHaveBeenCalledWith('/chat');
  });

  it('navigates to /superadmin when Simulate Superadmin is clicked', () => {
    render(
      <BrowserRouter>
        <RoleSimulator />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Simulate Superadmin'));
    expect(mockNavigate).toHaveBeenCalledWith('/superadmin');
  });
});
