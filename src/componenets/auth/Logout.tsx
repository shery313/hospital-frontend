import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  // Handle the logout process
  const handleLogout = () => {
    // Clear user authentication tokens or data
    localStorage.removeItem('authToken'); // Adjust this based on your auth logic

    // Optionally make an API call to the backend to log out the user
    // e.g., api.logout()

    // Redirect the user to the login page after logging out
    navigate('/login');
  };

  return (
    <motion.section
      className="py-16 bg-gray-50 min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6">Log Out</h2>
        <p className="text-lg mb-6">
          Are you sure you want to log out of your account?
        </p>
        <div className="space-x-4">
          {/* Confirm Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition duration-300"
          >
            Yes, Log Out
          </button>

          {/* Cancel Button */}
          <button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-6 rounded-lg transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default LogoutPage;
