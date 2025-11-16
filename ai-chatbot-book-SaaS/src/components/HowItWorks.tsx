import React from "react";
import type { Step, HowItWorksProps } from "../interface/common-data";

const HowItWorks: React.FC<HowItWorksProps> = ({ title, subtitle, steps }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-400">{subtitle}</p>
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
              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
