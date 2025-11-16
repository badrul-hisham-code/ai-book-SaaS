import React from "react";
import { Check } from "lucide-react";
import type {
  PricingPlan,
  PricingSectionProps,
} from "../interface/common-data";

const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  subtitle,
  plans,
  onPlanSelect,
}) => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-gray-400">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/25 scale-105"
                  : "bg-gradient-to-br from-gray-900 to-black border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">
                  ${plan.price}
                </span>
                <span
                  className={`${
                    plan.popular ? "text-white/80" : "text-gray-400"
                  }`}
                >
                  /month
                </span>
              </div>
              <p
                className={`mb-6 font-medium ${
                  plan.popular ? "text-white/90" : "text-gray-400"
                }`}
              >
                {plan.queries} queries/month
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-white" : "text-cyan-400"
                      }`}
                    />
                    <span
                      className={
                        plan.popular ? "text-white/90" : "text-gray-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onPlanSelect && onPlanSelect(plan.name)}
                className={`w-full py-3.5 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-white text-cyan-600 hover:bg-gray-100 shadow-lg"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
