import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Logout from "./pages/auth/Logout";
import Cart from "./pages/Cart";
import Payment from "./pages/payment/Payment";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentFailed from "./pages/payment/PaymentFail";
import Chat from "./pages/Chat";
import UserUsage from "./pages/UserUsage";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import SystemConfig from "./pages/superadmin/SystemConfig";
import PaymentTracker from "./pages/superadmin/PaymentTracker";
import GrowthTracker from "./pages/superadmin/GrowthTracker";
import UserManagement from "./pages/superadmin/UserManagement";
import SystemStatuses from "./pages/superadmin/SystemStatuses";
import Reports from "./pages/superadmin/Reports";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        {/* Cart & Payment Routes */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />

        {/* Chat Routes */}
        <Route path="/chat" element={<Chat 
          title="Your Book ChatBot"
          subtitle="Helping You in any research or book summary"
          botName="Book Bot"
          initialMessage="Hello! I'm your AI assistant. How can I help you today?"
          suggestionText="Try asking about a specific book or author."
          placeholder="Ask about a book..."
          aiResponses={["I can help with that!", "That's a great book."]}
        />} />
        <Route path="/usage" element={<UserUsage />} />

        {/* Role-Based Routes */}
        <Route path="/superadmin" element={<SuperAdminDashboard />} />
        <Route path="/superadmin/config" element={<SystemConfig />} />
        <Route path="/superadmin/payments" element={<PaymentTracker />} />
        <Route path="/superadmin/growth" element={<GrowthTracker />} />
        <Route path="/superadmin/users" element={<UserManagement />} />
        <Route path="/superadmin/system" element={<SystemStatuses />} />
        <Route path="/superadmin/reports" element={<Reports />} />

        {/* Catch all - 404 */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
