import React, { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import type { NavLink, NavbarProps } from "../interface/common-data";

const Navbar: React.FC<NavbarProps> = ({
  brandName,
  navLinks,
  ctaText,
  onCtaClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <BookOpen className="w-9 h-9 text-cyan-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {brandName}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onCtaClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-medium"
            >
              {ctaText}
            </button>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block text-gray-300 hover:text-cyan-400 py-2"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onCtaClick}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:from-cyan-400 hover:to-blue-500 font-medium"
            >
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
