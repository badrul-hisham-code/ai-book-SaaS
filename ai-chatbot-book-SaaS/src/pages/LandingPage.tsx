import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ChatDemo from "../components/ChatDemo";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import {
  navLinks,
  features,
  steps,
  pricingPlans,
  aiResponses,
  footerColumns,
} from "../assets/data/data-type";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // Event handlers
  const handleEmailSubmit = (email: string) => {
    alert(`Thanks for your interest! We'll contact ${email} soon.`);
  };

  const handlePlanSelect = (planName: string) => {
    alert(`You selected the ${planName} plan!`);
  };

  const handleStartTrial = () => {
    navigate("/register");
  };

  const handleBookDemo = () => {
    alert("Booking a demo!");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        brandName="BookBot AI"
        navLinks={navLinks}
        ctaText="Start Free Trial"
        onCtaClick={handleStartTrial}
      />

      <HeroSection
        badge="Powered by Advanced AI • Focused on Books"
        title="The AI Chatbot That"
        highlightedTitle="Only Talks Books"
        description="Integrate a specialized AI chatbot that provides instant, accurate answers about literature, authors, and book recommendations. No generic responses, no off-topic replies."
        emailPlaceholder="Enter your work email"
        ctaButtonText="Get API Access"
        disclaimer="Start free • No credit card • 2,500 queries included"
        onEmailSubmit={handleEmailSubmit}
      />

      <ChatDemo
        title="Try It Live"
        subtitle="Ask any question about books and see the magic happen"
        botName="BookBot AI"
        initialMessage="Hi! Ask me anything about books, authors, or literary topics. I'm here to help!"
        placeholder="Ask about any book, author, or genre..."
        suggestionText='Try: "Recommend sci-fi books"'
        aiResponses={aiResponses}
      />

      <FeaturesSection
        title="Built for Book Lovers"
        subtitle="Every feature designed around literary excellence"
        features={features}
      />

      <HowItWorks
        title="Integration Made Simple"
        subtitle="Up and running in minutes, not days"
        steps={steps}
      />

      <PricingSection
        title="Transparent Pricing"
        subtitle="Scale as you grow, no surprises"
        plans={pricingPlans}
        onPlanSelect={handlePlanSelect}
      />

      <CTASection
        title="Ready to Revolutionize Your Book Platform?"
        description="Join publishers, libraries, and bookstores using BookBot AI to engage readers like never before"
        primaryButtonText="Start Free Trial"
        secondaryButtonText="Book a Demo"
        onPrimaryClick={handleStartTrial}
        onSecondaryClick={handleBookDemo}
      />

      <Footer
        brandName="BookBot AI"
        tagline="The AI chatbot that only talks books."
        columns={footerColumns}
        copyrightText="© 2025 BookBot AI. All rights reserved."
      />
    </div>
  );
};

export default LandingPage;
