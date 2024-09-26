import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserFeaturesOpen, setIsUserFeaturesOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserFeatures = () => {
    setIsUserFeaturesOpen(!isUserFeaturesOpen);
  };

  const navItems = isAuthenticated
    ? ["About Us", "Services", "Departments", "Doctors","Dispenceries", "Contact Us", "Blogs"]
    : ["About Us", "Services", "Departments", "Doctors","Dispenceries","Contact Us"];

  // Function to handle scrolling to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 md:px-4 px-2 bg-blue-700 text-xs md:text-sm">
        <div className="flex md:space-x-6 space-x-3">
          <div className="flex items-center">
            <FaPhoneAlt className="md:mr-2 mr-1" />
            <span>+254718959781</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="md:mr-2 mr-1" />
            <span>contact@hospital.com</span>
          </div>
        </div>
        <div className="flex md:space-x-4 space-x-2">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="hover:text-gray-300 transition-colors" onClick={handleScrollToTop}>Login</Link>
              <Link to="/signup" className="hover:text-gray-300 transition-colors" onClick={handleScrollToTop}>Signup</Link>
            </>
          ) : (
            <div className="relative">
              <button onClick={toggleUserFeatures} className="hover:text-gray-300 transition-colors">
                <FaUser size={20} />
              </button>
              {isUserFeaturesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 bg-white text-blue-900 shadow-lg rounded-md mt-2 w-40"
                >
                  <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100" onClick={handleScrollToTop}>Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-blue-100" onClick={handleScrollToTop}>Settings</Link>
                  <Link to="/appointment-detail" className="block px-4 py-2 hover:bg-blue-100" onClick={handleScrollToTop}>My Appointments</Link>
                  <Link to="/logout" className="block px-4 py-2 hover:bg-blue-100" onClick={handleScrollToTop}>Logout</Link>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center py-4 px-6 bg-white text-blue-900">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-blue-600 transition-all">
          <Link to="/" onClick={handleScrollToTop}><img src="logo.png" className="w-20" alt="Hospital Logo" /></Link>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`hover:text-blue-600 hover:scale-105 transition-all ${location.pathname === `/${item.toLowerCase().replace(/\s+/g, '-')}` ? 'font-bold' : ''}`}
              onClick={handleScrollToTop} // Add scroll function here
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Appointment Button */}
        <div className="hidden md:flex">
          <Link
            to="/appointment"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out"
            onClick={handleScrollToTop}
          >
            <FaCalendarAlt className="inline mr-2" />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-blue-500">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white text-blue-900 shadow-lg"
        >
          <nav className="flex flex-col items-center py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`py-2 px-4 hover:bg-blue-100 w-full text-center transition-colors ${location.pathname === `/${item.toLowerCase().replace(/\s+/g, '-')}` ? 'font-bold' : ''}`}
                onClick={() => {
                  toggleMobileMenu();
                  handleScrollToTop(); // Ensure scrolling to top on click
                }}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-fit text-center transition-all duration-300 ease-in-out"
              onClick={() => {
                toggleMobileMenu();
                handleScrollToTop(); // Ensure scrolling to top on click
              }}
            >
              <FaCalendarAlt className="inline mr-2" />
              Book Appointment
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
