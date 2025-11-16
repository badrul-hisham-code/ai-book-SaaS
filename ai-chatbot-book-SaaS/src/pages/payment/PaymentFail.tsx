import React from "react";
import {
  BookOpen,
  XCircle,
  RefreshCw,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { commonIssues } from "../../assets/data/data-type";

const PaymentFailed: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount = 149 } = location.state || {};

  const handleRetry = () => {
    navigate("/payment", { state: { amount } });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative w-full max-w-3xl">
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

        {/* Failed Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-12 shadow-2xl text-center">
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                <XCircle className="w-16 h-16 text-red-400" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-3">Payment Failed</h1>
          <p className="text-xl text-gray-400 mb-8">
            We couldn't process your payment of ${amount.toFixed(2)}
          </p>

          {/* Error Message */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-8">
            <p className="text-red-400 text-sm">
              <strong>Error:</strong> Payment declined by your bank or card
              issuer
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button
              onClick={handleRetry}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-bold flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="bg-white/5 border border-white/10 text-white py-4 rounded-lg hover:bg-white/10 transition font-medium flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Cart</span>
            </button>
          </div>

          {/* Common Issues */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left">
            <h3 className="text-lg font-bold text-white mb-4">
              Common Issues & Solutions
            </h3>
            <div className="space-y-4">
              {commonIssues.map((issue, idx) => (
                <div key={idx} className="border-l-2 border-cyan-500/30 pl-4">
                  <h4 className="text-white font-semibold mb-1">
                    {issue.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-1">
                    {issue.description}
                  </p>
                  <p className="text-xs text-cyan-400">💡 {issue.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Still having issues?</span>
            </div>
            <button
              onClick={() => window.open("mailto:support@bookbot.ai", "_blank")}
              className="text-cyan-400 hover:text-cyan-300 transition font-medium"
            >
              Contact Support Team
            </button>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-6 text-center space-y-3">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">
              <strong className="text-white">Pro Tip:</strong> Try using a
              different payment method or contact your bank to authorize the
              transaction.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              No charges were made to your account
            </p>
            <Link
              to="/"
              className="block text-sm text-cyan-400 hover:text-cyan-300 transition"
            >
              Return to homepage →
            </Link>
          </div>
        </div>

        {/* Alternative Payment Methods */}
        <div className="mt-6 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6">
          <h3 className="text-white font-bold mb-3 text-center">
            Alternative Payment Options
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              Credit Card
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              Debit Card
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              PayPal
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              Bank Transfer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
