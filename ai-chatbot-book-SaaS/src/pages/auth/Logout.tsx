import React, { useEffect, useState } from "react";
import { BookOpen, LogOut, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(true);

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // TODO: Add actual logout logic here (clear tokens, session, etc.)
      console.log("User logged out");
      setIsLoggingOut(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleLoginAgain = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative w-full max-w-md">
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

        {/* Logout Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-12 shadow-2xl text-center">
          {isLoggingOut ? (
            <>
              {/* Loading State */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <LogOut className="w-16 h-16 text-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Logging you out...
              </h1>
              <p className="text-gray-400">
                Please wait while we securely sign you out
              </p>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white mb-3">
                You're all logged out
              </h1>
              <p className="text-gray-400 mb-8">
                Thanks for using BookBot AI. We hope to see you again soon!
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleLoginAgain}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-semibold shadow-lg shadow-cyan-500/25"
                >
                  Sign in again
                </button>

                <button
                  onClick={handleGoHome}
                  className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-lg hover:bg-white/10 transition font-medium"
                >
                  Go to homepage
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  Your session has been cleared and all local data has been
                  removed.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Support Link */}
        {!isLoggingOut && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Need help?{" "}
              <a href="#" className="text-cyan-400 hover:text-cyan-300">
                Contact support
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;
