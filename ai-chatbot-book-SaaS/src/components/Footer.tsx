import React from "react";
import { BookOpen } from "lucide-react";
import type {
  FooterLink,
  FooterColumn,
  FooterProps,
} from "../interface/common-data";

const Footer: React.FC<FooterProps> = ({
  brandName,
  tagline,
  columns,
  copyrightText,
}) => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {brandName}
              </span>
            </div>
            <p className="text-sm text-gray-400">{tagline}</p>
          </div>

          {columns.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-3">{column.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="hover:text-cyan-400 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
