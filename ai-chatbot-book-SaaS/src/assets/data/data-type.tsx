import { Brain, Zap, Lock } from "lucide-react";
// Navigation data
export const navLinks = [
  { label: "Live Demo", href: "#demo" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

// Features data
export const features = [
  {
    icon: Brain,
    title: "Trained on Literature",
    description:
      "Our AI is exclusively trained on millions of books, literary criticism, and author interviews for unmatched accuracy.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get detailed responses in under 2 seconds. No more endless searching through reviews and summaries.",
  },
  {
    icon: Lock,
    title: "Books Only, Always",
    description:
      "Built-in safeguards ensure the AI only responds to book-related queries. No off-topic distractions.",
  },
];

// How It Works steps
export const steps = [
  {
    step: "1",
    title: "Connect",
    description: "Integrate BookBot via API or use our web interface",
  },
  {
    step: "2",
    title: "Ask",
    description: "Users interact naturally with the AI chatbot",
  },
  {
    step: "3",
    title: "Discover",
    description: "Get accurate, contextual book recommendations and insights",
  },
];

// Pricing plans
export const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    queries: "2,500",
    features: [
      "Email support",
      "Web dashboard",
      "Basic API access",
      "99.5% uptime SLA",
    ],
  },
  {
    name: "Professional",
    price: "149",
    queries: "10,000",
    features: [
      "Priority support",
      "Advanced analytics",
      "Full API access",
      "Custom AI training",
      "99.9% uptime SLA",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "499",
    queries: "Unlimited",
    features: [
      "24/7 dedicated support",
      "White-label solution",
      "On-premise deployment",
      "Custom model training",
      "99.99% uptime SLA",
      "Dedicated account manager",
    ],
  },
];

// AI responses for chat demo
export const aiResponses = [
  "That's a fascinating book! It explores themes of identity and belonging through masterful storytelling.",
  "Great question! This author is known for their lyrical prose and deep character development.",
  "I'd recommend checking out similar titles in the magical realism genre - they share that same enchanting quality.",
  "This classic work has influenced countless writers and continues to resonate with readers today.",
];

// Footer data
export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export const commonIssues = [
  {
    title: "Insufficient Funds",
    description: "Make sure you have enough balance in your account",
    solution: "Add funds or try a different payment method",
  },
  {
    title: "Incorrect Card Details",
    description: "Double-check your card number, expiry date, and CVV",
    solution: "Review and correct your payment information",
  },
  {
    title: "Card Declined",
    description: "Your bank may have declined the transaction",
    solution: "Contact your bank or try another card",
  },
  {
    title: "Network Issues",
    description: "Connection problems during payment processing",
    solution: "Check your internet connection and try again",
  },
];
