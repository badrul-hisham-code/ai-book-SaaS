import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Cart';
import { describe, it, expect } from 'vitest';

describe('Cart Page', () => {
  it('renders cart with items', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
    expect(screen.getByText('Professional Plan')).toBeInTheDocument();
    expect(screen.getByText('Proceed to Checkout')).toBeInTheDocument();
  });
});
