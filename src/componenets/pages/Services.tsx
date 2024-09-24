import React from "react";
import { motion } from "framer-motion";
import { FaAmbulance, FaHeartbeat, FaChild, FaMixer, FaRadiation, FaFlask, FaWheelchair, FaTooth } from "react-icons/fa"; // Added FaTooth for Dentistry
import Breadcrumbs from "./BreadCrumbs";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const servicesList = [
  { 
    title: "Emergency Care", 
    description: "24/7 emergency services with immediate assistance.", 
    icon: <FaAmbulance className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/emergency" 
  },
  { 
    title: "Cardiology", 
    description: "Comprehensive heart care and specialized treatments.", 
    icon: <FaHeartbeat className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/cardiology" 
  },
  { 
    title: "Pediatrics", 
    description: "Expert care for infants, children, and adolescents.", 
    icon: <FaChild className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/pediatrics" 
  },
  { 
    title: "Surgery", 
    description: "State-of-the-art surgical procedures with experienced surgeons.", 
    icon: <FaMixer className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/surgery" 
  },
  { 
    title: "Radiology", 
    description: "Advanced imaging services for accurate diagnosis.", 
    icon: <FaRadiation className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/radiology" 
  },
  { 
    title: "Laboratory Services", 
    description: "Comprehensive lab tests and analysis.", 
    icon: <FaFlask className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/laboratory" 
  },
  { 
    title: "Physiotherapy", 
    description: "Rehabilitation and pain management with expert physiotherapists.", 
    icon: <FaWheelchair className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/physiotherapy" 
  },
  { 
    title: "Dentistry", 
    description: "Comprehensive dental care and cosmetic dentistry services.", 
    icon: <FaTooth className="text-blue-600 text-3xl mb-2" />, 
    link: "/services/dentistry" // Added Dentistry link
  },
];

const Services: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-50">
      
      {/* Services List */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <Breadcrumbs items={breadcrumbItems} />
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                {service.icon}
                <h2 className="text-2xl font-semibold mb-2 ml-2">{service.title}</h2>
              </div>
              <p className="text-gray-600">{service.description}</p>
              <Link to={service.link}>
                <motion.button
                  className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md shadow transition hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Image */}
      <div className="hidden md:block md:w-1/2 h-full">
        <motion.img
          src='docter.jpg' // Replace with your actual image path
          alt="Services"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Services;
