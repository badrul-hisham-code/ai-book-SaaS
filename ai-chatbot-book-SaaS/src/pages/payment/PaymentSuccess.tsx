import React, { useEffect, useState } from "react";
import {
  BookOpen,
  CheckCircle,
  Download,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount = 149 } = location.state || {};
  const [orderNumber] = useState<string>(
    () => `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
  );

  useEffect(() => {
    // Confetti effect or celebration animation could go here
    console.log("Payment successful!");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative w-full max-w-2xl">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center space-x-3 mb-8"
        >
          <div className="relative">
            <BookOpen className="w-10 h-10 text-cyan-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            BookBot AI
          </span>
        </Link>

        {/* Success Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-12 shadow-2xl text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                <CheckCircle className="w-16 h-16 text-green-400" />
              </div>
              <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-3">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for subscribing to BookBot AI
          </p>

          {/* Order Details */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-sm text-gray-400 mb-1">Order Number</p>
                <p className="text-white font-mono font-semibold">
                  {orderNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Amount Paid</p>
                <p className="text-white font-semibold text-2xl">
                  ${amount.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Payment Method</p>
                <p className="text-white">•••• •••• •••• 3456</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Date</p>
                <p className="text-white">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 text-cyan-400 mr-2" />
              What's Next?
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">1.</span>
                <span>
                  Check your email for your API credentials and getting started
                  guide
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">2.</span>
                <span>Access your dashboard to manage your subscription</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">3.</span>
                <span>Start integrating BookBot AI into your application</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-bold flex items-center justify-center space-x-2"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => window.print()}
              className="bg-white/5 border border-white/10 text-white py-4 rounded-lg hover:bg-white/10 transition font-medium flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Receipt</span>
            </button>
          </div>

          {/* Support */}
          <p className="text-sm text-gray-400">
            Need help? Contact our{" "}
            <a href="#" className="text-cyan-400 hover:text-cyan-300">
              support team
            </a>
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-500">
            A confirmation email has been sent to your registered email address
          </p>
          <Link
            to="/"
            className="block text-sm text-cyan-400 hover:text-cyan-300 transition"
          >
            Return to homepage →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
