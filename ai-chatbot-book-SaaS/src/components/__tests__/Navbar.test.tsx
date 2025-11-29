import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { describe, it, expect, vi } from 'vitest';

const mockNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
];

describe('Navbar Component', () => {
  it('renders brand name correctly', () => {
    render(
      <BrowserRouter>
        <Navbar 
          brandName="TestBrand" 
          navLinks={mockNavLinks} 
          ctaText="Get Started" 
          onCtaClick={() => {}} 
          cartItemCount={0}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('TestBrand')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar 
          brandName="TestBrand" 
          navLinks={mockNavLinks} 
          ctaText="Get Started" 
          onCtaClick={() => {}} 
          cartItemCount={0}
        />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  it('calls onCtaClick when CTA button is clicked', () => {
    const handleCtaClick = vi.fn();
    render(
      <BrowserRouter>
        <Navbar 
          brandName="TestBrand" 
          navLinks={mockNavLinks} 
          ctaText="Get Started" 
          onCtaClick={handleCtaClick} 
          cartItemCount={0}
        />
      </BrowserRouter>
    );
    
    const button = screen.getByText('Get Started');
    fireEvent.click(button);
    expect(handleCtaClick).toHaveBeenCalledTimes(1);
  });
});
