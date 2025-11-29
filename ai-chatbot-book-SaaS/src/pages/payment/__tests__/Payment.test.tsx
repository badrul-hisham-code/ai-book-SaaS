import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Payment from '../Payment';
import { describe, it, expect } from 'vitest';

describe('Payment Page', () => {
  it('renders payment form', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/payment', state: { total: 29 } }]}>
        <Payment />
      </MemoryRouter>
    );
    
    // Check for key elements
    expect(screen.getByText(/Secure Checkout/i)).toBeInTheDocument();
    expect(screen.getByText(/Order Summary/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/1234 5678 9012 3456/i)).toBeInTheDocument();
  });
});
