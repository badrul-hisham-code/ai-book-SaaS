import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../LandingPage';
import { describe, it, expect, vi } from 'vitest';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock child components to simplify integration test
vi.mock('../../components/HeroSection', () => ({
  default: ({ onEmailSubmit }: { onEmailSubmit: (email: string) => void }) => (
    <div data-testid="hero-section">
      <button onClick={() => onEmailSubmit('test@example.com')}>Submit Email</button>
    </div>
  ),
}));

vi.mock('../../components/PricingSection', () => ({
  default: ({ onPlanSelect }: { onPlanSelect: (plan: string) => void }) => (
    <div data-testid="pricing-section">
      <button onClick={() => onPlanSelect('Pro Plan')}>Select Pro Plan</button>
    </div>
  ),
}));

describe('LandingPage Integration', () => {
  it('renders main sections', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('pricing-section')).toBeInTheDocument();
  });

  it('handles email submission flow', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Submit Email'));
    expect(alertMock).toHaveBeenCalledWith("Thanks for your interest! We'll contact test@example.com soon.");
    alertMock.mockRestore();
  });

  it('handles plan selection and navigation to cart', () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Select Pro Plan'));
    
    // Check if it navigates to cart with correct state
    expect(mockNavigate).toHaveBeenCalledWith('/cart', expect.objectContaining({
      state: {
        selectedPlan: 'Pro Plan',
        message: 'Pro Plan plan added to cart!',
      }
    }));
  });
});
