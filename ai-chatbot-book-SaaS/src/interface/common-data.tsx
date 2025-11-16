export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatDemoProps {
  title: string;
  subtitle: string;
  botName: string;
  initialMessage: string;
  placeholder: string;
  suggestionText: string;
  aiResponses: string[];
}

export interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  brandName: string;
  tagline: string;
  columns: FooterColumn[];
  copyrightText: string;
}

export interface HeroSectionProps {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  emailPlaceholder: string;
  ctaButtonText: string;
  disclaimer: string;
  onEmailSubmit: (email: string) => void;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export interface HowItWorksProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  brandName: string;
  navLinks: NavLink[];
  ctaText: string;
  onCtaClick?: () => void;
  cartItemCount?: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  queries: string;
  features: string[];
  popular?: boolean;
}

export interface PricingSectionProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  onPlanSelect?: (planName: string) => void;
}
