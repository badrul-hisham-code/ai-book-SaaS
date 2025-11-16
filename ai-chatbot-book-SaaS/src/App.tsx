import React, { useState, ChangeEvent } from 'react';
import { BookOpen, MessageSquare, Sparkles, Check, Menu, X, ChevronRight, Zap, Brain, Lock, Send } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Step {
  step: string;
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  queries: string;
  features: string[];
  popular?: boolean;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const BookBotLanding: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [chatInput, setChatInput] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! Ask me anything about books, authors, or literary topics. I\'m here to help!' }
  ]);

  const handleSubmit = (): void => {
    if (email) {
      alert(`Thanks for your interest! We'll contact ${email} soon.`);
      setEmail('');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleChatSubmit = (): void => {
    if (!chatInput.trim()) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: chatInput }
    ];
    setMessages(newMessages);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a fascinating book! It explores themes of identity and belonging through masterful storytelling.",
        "Great question! This author is known for their lyrical prose and deep character development.",
        "I'd recommend checking out similar titles in the magical realism genre - they share that same enchanting quality.",
        "This classic work has influenced countless writers and continues to resonate with readers today."
      ];
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: responses[Math.floor(Math.random() * responses.length)]
      }]);
    }, 1000);
  };

  const features: Feature[] = [
    {
      icon: Brain,
      title: "Trained on Literature",
      description: "Our AI is exclusively trained on millions of books, literary criticism, and author interviews for unmatched accuracy."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get detailed responses in under 2 seconds. No more endless searching through reviews and summaries."
    },
    {
      icon: Lock,
      title: "Books Only, Always",
      description: "Built-in safeguards ensure the AI only responds to book-related queries. No off-topic distractions."
    }
  ];

  const steps: Step[] = [
    { step: "1", title: "Connect", description: "Integrate BookBot via API or use our web interface" },
    { step: "2", title: "Ask", description: "Users interact naturally with the AI chatbot" },
    { step: "3", title: "Discover", description: "Get accurate, contextual book recommendations and insights" }
  ];

  const pricingPlans: PricingPlan[] = [
    { 
      name: "Starter", 
      price: "49", 
      queries: "2,500", 
      features: ["Email support", "Web dashboard", "Basic API access", "99.5% uptime SLA"] 
    },
    { 
      name: "Professional", 
      price: "149", 
      queries: "10,000", 
      features: ["Priority support", "Advanced analytics", "Full API access", "Custom AI training", "99.9% uptime SLA"], 
      popular: true 
    },
    { 
      name: "Enterprise", 
      price: "499", 
      queries: "Unlimited", 
      features: ["24/7 dedicated support", "White-label solution", "On-premise deployment", "Custom model training", "99.99% uptime SLA", "Dedicated account manager"] 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <BookOpen className="w-9 h-9 text-cyan-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                BookBot AI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#demo" className="text-gray-300 hover:text-cyan-400 transition">Live Demo</a>
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition">Pricing</a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium">
                Start Free Trial
              </button>
            </div>

            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#demo" className="block text-gray-300 hover:text-cyan-400 py-2">Live Demo</a>
              <a href="#features" className="block text-gray-300 hover:text-cyan-400 py-2">Features</a>
              <a href="#pricing" className="block text-gray-300 hover:text-cyan-400 py-2">Pricing</a>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:from-cyan-400 hover:to-blue-500 font-medium">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Powered by Advanced AI • Focused on Books</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                The AI Chatbot That
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Only Talks Books
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Integrate a specialized AI chatbot that provides instant, accurate answers about literature, authors, and book recommendations. No generic responses, no off-topic replies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your work email"
                className="w-full sm:w-80 px-6 py-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
              />
              <button 
                onClick={handleSubmit}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
              >
                <span>Get API Access</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-500">Start free • No credit card • 2,500 queries included</p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Try It Live
            </h2>
            <p className="text-xl text-gray-400">
              Ask any question about books and see the magic happen
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-white">BookBot AI</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Online</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-black/40">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md px-5 py-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-sm' 
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm'
                  }`}>
                    {msg.role === 'assistant' && (
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-400 font-medium">AI</span>
                      </div>
                    )}
                    <p className="leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-4 bg-black/60">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                  placeholder="Ask about any book, author, or genre..."
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500"
                />
                <button 
                  onClick={handleChatSubmit}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Try: "What's 1984 about?" or "Recommend sci-fi books"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Built for Book Lovers
            </h2>
            <p className="text-xl text-gray-400">
              Every feature designed around literary excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30">
                    <feature.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Integration Made Simple
            </h2>
            <p className="text-xl text-gray-400">
              Up and running in minutes, not days
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((item, idx) => (
              <div key={idx} className="text-center relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
                <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-cyan-500/25">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Scale as you grow, no surprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/25 scale-105' 
                    : 'bg-gradient-to-br from-gray-900 to-black border border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className={`${plan.popular ? 'text-white/80' : 'text-gray-400'}`}>/month</span>
                </div>
                <p className={`mb-6 font-medium ${plan.popular ? 'text-white/90' : 'text-gray-400'}`}>
                  {plan.queries} queries/month
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-cyan-400'}`} />
                      <span className={plan.popular ? 'text-white/90' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3.5 rounded-lg font-semibold transition ${
                  plan.popular 
                    ? 'bg-white text-cyan-600 hover:bg-gray-100 shadow-lg' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your Book Platform?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Join publishers, libraries, and bookstores using BookBot AI to engage readers like never before
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-bold text-lg shadow-lg shadow-cyan-500/25">
              Start Free Trial
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-lg hover:bg-white/10 transition font-bold text-lg">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">BookBot AI</span>
              </div>
              <p className="text-sm text-gray-400">The AI chatbot that only talks books.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">API Docs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Security</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 BookBot AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookBotLanding;