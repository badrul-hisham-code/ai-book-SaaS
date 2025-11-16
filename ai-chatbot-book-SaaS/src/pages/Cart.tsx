import React, { useState } from "react";
import {
  BookOpen,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  queries: string;
  quantity: number;
  features: string[];
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Professional Plan",
      price: 149,
      queries: "10,000",
      quantity: 1,
      features: ["Priority support", "Advanced analytics", "Full API access"],
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    navigate("/payment", { state: { cartItems, total } });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-3 mb-6 text-gray-400 hover:text-cyan-400 transition"
          >
            <BookOpen className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BookBot AI
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Shopping Cart</h1>
          <p className="text-gray-400">Review your items before checkout</p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-20">
            <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-400 mb-8">
              Add some plans to get started with BookBot AI
            </p>
            <Link
              to="/#pricing"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-semibold"
            >
              Browse Plans
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 mb-3">
                        {item.queries} queries/month
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:flex-col md:items-end space-y-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-lg p-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-400 hover:text-white transition"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-gray-400 hover:text-white transition"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-white">
                          ${item.price * item.quantity}
                          <span className="text-sm text-gray-400">/mo</span>
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-300 transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (10%)</span>
                    <span className="text-white font-semibold">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-white">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-white">
                        ${total.toFixed(2)}
                        <span className="text-sm text-gray-400">/mo</span>
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition font-bold text-lg shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>14-day money back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continue Shopping */}
        {cartItems.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              to="/#pricing"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              ← Continue shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
