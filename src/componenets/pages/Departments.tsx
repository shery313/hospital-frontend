import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaBrain, FaChild, FaBone, FaClinicMedical, FaSyringe } from "react-icons/fa"; // Icons

const departments = [
  {
    name: "Cardiology",
    description: "Heart and vascular care.",
    icon: <FaHeartbeat />,
    moreInfo: "Our cardiology department provides top-notch cardiovascular care and treatments for a variety of heart conditions. Specialists available 24/7.",
    contact: "+123 456 789",
  },
  {
    name: "Oncology",
    description: "Cancer treatment and care.",
    icon: <FaSyringe />,
    moreInfo: "Our oncology department offers the latest treatments for all types of cancers with state-of-the-art technology and compassionate care.",
    contact: "+123 456 789",
  },
  {
    name: "Pediatrics",
    description: "Healthcare for children.",
    icon: <FaChild />,
    moreInfo: "Providing comprehensive healthcare services for infants, children, and adolescents. Available every day from 9 AM to 5 PM.",
    contact: "+123 456 789",
  },
  {
    name: "Orthopedics",
    description: "Bone and joint care.",
    icon: <FaBone />,
    moreInfo: "Our orthopedics department offers treatment for a wide range of bone and joint conditions, from fractures to arthritis.",
    contact: "+123 456 789",
  },
  {
    name: "Neurology",
    description: "Nervous system disorders.",
    icon: <FaBrain />,
    moreInfo: "The neurology department diagnoses and treats conditions affecting the brain, spinal cord, and nerves. Open 24/7 for emergencies.",
    contact: "+123 456 789",
  },
  {
    name: "Emergency Medicine",
    description: "Immediate medical attention.",
    icon: <FaClinicMedical />,
    moreInfo: "Our emergency department is open 24/7, providing immediate medical care for all emergencies, from trauma to heart attacks.",
    contact: "+123 456 789",
  },
];

const Departments: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);

  const toggleMoreInfo = (index: number) => {
    setSelectedDepartment(selectedDepartment === index ? null : index);
  };

  return (
    <div className="p-6 bg-white">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Departments
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department, index) => (
          <motion.div
            key={index}
            className="bg-blue-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <div className="text-4xl text-blue-500 mr-4">
                {department.icon}
              </div>
              <h2 className="text-2xl font-semibold">{department.name}</h2>
            </div>
            <p className="text-lg mt-2">{department.description}</p>
            
            {/* Learn More Section */}
            {selectedDepartment === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-4 bg-white p-4 rounded-lg shadow-inner"
              >
                <p>{department.moreInfo}</p>
                <div className="mt-2">
                  <strong>Contact:</strong> {department.contact}
                </div>
              </motion.div>
            )}

            {/* Buttons for More Info and Contact */}
            <div className="mt-4">
              <button
                onClick={() => toggleMoreInfo(index)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                {selectedDepartment === index ? "Show Less" : "Learn More"}
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Contact Us
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
