import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToTop = () => {
    setIsServicesDropdownOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const navItems = ["About Us", "Services", "Doctors", "Dispensaries", "Contact Us", "Blogs"];

  const servicesDropdown = [
    { name: "Emergency Care", link: "/services/emergency" },
    { name: "Surgical Services", link: "/services/surgery" },
    { name: "Cardiology", link: "/services/cardiology" },
    { name: "Neurology", link: "/services/neurology" },
    { name: "Pediatrics", link: "/services/pediatrics" },
    { name: "Nursing School", link: "/services/nursing-school" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg sticky top-0 z-50">
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
        {/* <div className="flex md:space-x-4 space-x-2">
          <Link to="/login" className="hover:text-gray-300 transition-colors" onClick={handleScrollToTop}>Login</Link>
          <Link to="/signup" className="hover:text-gray-300 transition-colors" onClick={handleScrollToTop}>Signup</Link>
        </div> */}
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center py-4 px-6 bg-white text-blue-900">
        {/* Logo */}
        <div className="text-2xl font-bold hover:text-blue-600 transition-all">
          <Link to="/" onClick={handleScrollToTop}><img src="logo.png" className="w-20" alt="Hospital Logo" /></Link>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-6">
        <Link
                // key={index}
                to={`/`}
                className={`hover:text-blue-600 hover:scale-105 transition-all ${location.pathname === `/` ? 'font-bold' : ''}`}
                onClick={handleScrollToTop}
              >
                {/* {item} */}Home
              </Link>
          
          {navItems.map((item, index) => (
            
            item === "Services" ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                // onMouseLeave={() => setIsServicesDropdownOpen(false)}
                
              >
                <button className="hover:text-blue-600 flex items-center space-x-1">
                  {item}
                  <FaChevronDown />
                </button>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bg-white text-blue-900 shadow-lg rounded-md mt-2 w-48"
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    {servicesDropdown.map((service, idx) => (
                      <Link
                        key={idx}
                        to={service.link}
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={handleScrollToTop}
                        
                        
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : (
              
             
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`hover:text-blue-600 hover:scale-105 transition-all ${location.pathname === `/${item.toLowerCase().replace(/\s+/g, '-')}` ? 'font-bold' : ''}`}
                onClick={handleScrollToTop}
              >
                {item}
              </Link>
            )
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
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white text-blue-900 py-2  "
        >
          <nav className="flex flex-col space-y-2 px-6 p-3  ">
          <Link
                  // key={index}
                  to={`/`}
                  className={`py-2 hover:text-blue-600 ${location.pathname === `/` ? 'font-bold' : ''}`}
                  onClick={() => {
                    handleScrollToTop();
                    setIsMobileMenuOpen(false);  
                  }}
                >
                  Home
                </Link>
            
            
            {navItems.map((item, index) => (
              item === "Services" ? (
                <div key={index} className="relative">
                  <button
                    onClick={toggleServicesDropdown}
                    className="flex justify-between items-center w-full py-2 hover:text-blue-600"
                  >
                    {item}
                    {isServicesDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {isServicesDropdownOpen && (
                    <div className="flex flex-col space-y-1 pl-4">
                      {servicesDropdown.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.link}
                          className="block py-2 hover:text-blue-600"
                          onClick={() => {
                            handleScrollToTop();
                            setIsMobileMenuOpen(false);  // Close menu after selection
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`py-2 hover:text-blue-600 ${location.pathname === `/${item.toLowerCase().replace(/\s+/g, '-')}` ? 'font-bold' : ''}`}
                  onClick={() => {
                    handleScrollToTop();
                    setIsMobileMenuOpen(false);  // Close menu after selection
                  }}
                >
                  {item}
                </Link>
              )
            ))}
            <div className=" text-center w-full">
              <Link
                to="/appointment"
                className="bg-blue-600 text-white px-6 py-2 rounded-full w-full hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out  text-center"
                onClick={() => {
                  handleScrollToTop();
                  setIsMobileMenuOpen(false);  // Close menu after selection
                }}
              >
                <FaCalendarAlt className="inline mr-2" />
                Book Appointment
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
