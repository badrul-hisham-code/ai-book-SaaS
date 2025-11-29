import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logout from '../Logout';
import { describe, it, expect } from 'vitest';

describe('Logout Page', () => {
  it('renders logout message', () => {
    render(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    );
    
    // Check that the logout component renders
    expect(screen.getByText(/Logging.*out/i)).toBeInTheDocument();
  });
});
