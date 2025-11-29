import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Register from '../Register';
import { describe, it, expect, vi, beforeAll } from 'vitest';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Register Page', () => {
  beforeAll(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
  });

  it('renders registration form', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    expect(screen.getByLabelText('Full name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Create account')).toBeInTheDocument();
  });

  it('handles registration submission', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    
    fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('Confirm password'), { target: { value: 'password123' } });
    
    // Check the terms agreement checkbox
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    fireEvent.click(screen.getByText('Create account'));
    
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
