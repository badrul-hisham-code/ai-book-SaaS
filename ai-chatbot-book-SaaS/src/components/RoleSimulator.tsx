import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSimulator: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold text-gray-400 mb-4">
          Role Simulator (Dev Only)
        </h3>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate("/chat")}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Simulate User
          </button>
          <button
            onClick={() => navigate("/superadmin")}
            className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Simulate Superadmin
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSimulator;
