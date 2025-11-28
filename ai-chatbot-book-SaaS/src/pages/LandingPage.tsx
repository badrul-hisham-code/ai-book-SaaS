import React, { useState } from "react";
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
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  // Event handlers
  const handleEmailSubmit = (email: string) => {
    alert(`Thanks for your interest! We'll contact ${email} soon.`);
  };

  const handlePlanSelect = (planName: string) => {
    // Add item to cart and update count
    setCartItemCount((prev) => prev + 1);

    // Navigate to cart page
    navigate("/cart", {
      state: {
        selectedPlan: planName,
        message: `${planName} plan added to cart!`,
      },
    });
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
        cartItemCount={cartItemCount}
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

      <div className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-400 mb-4">Role Simulator (Dev Only)</h3>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => navigate("/chat")}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Simulate User
            </button>
            {/* <button
              onClick={() => navigate("/usage")}
              className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
            >
              Simulate User (Usage)
            </button> */}
            <button
              onClick={() => navigate("/superadmin")}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Simulate Superadmin
            </button>
          </div>
        </div>
      </div>

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
