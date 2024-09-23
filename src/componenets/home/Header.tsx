import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = isAuthenticated
    ? ["About Us", "Services", "Departments", "Doctors", "Contact Us", "Blogs"]
    : ["About Us", "Services", "Departments", "Doctors", "Contact Us"];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 md:px-4 px-2 bg-blue-700 text-xs md:text-sm">
        <div className="flex md:space-x-6 space-x-3">
          <div className="flex items-center">
            <FaPhoneAlt className="md:mr-2 mr-1" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="md:mr-2 mr-1" />
            <span>contact@hospital.com</span>
          </div>
        </div>
        <div className="flex md:space-x-4 space-x-2">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
              <Link to="/signup" className="hover:text-gray-300 transition-colors">Sign Up</Link>
            </>
          ) : (
            <Link to="/profile" className="hover:text-gray-300 transition-colors">Profile</Link>
          )}
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center py-4 px-6 bg-white text-blue-900">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-blue-600 transition-all">
          <Link to="/"><img src="logo.png" className="w-20" alt="Hospital Logo" /></Link>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`hover:text-blue-600 hover:scale-105 transition-all ${location.pathname === `/${item.toLowerCase().replace(/\s+/g, '-')}` ? 'font-bold' : ''}`}
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
                onClick={toggleMobileMenu}
              >
                {item}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full text-center transition-all duration-300 ease-in-out"
              onClick={toggleMobileMenu}
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
