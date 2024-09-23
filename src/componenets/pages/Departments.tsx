import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaBrain, FaChild, FaBone, FaClinicMedical, FaSyringe } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrumbs from "./BreadCrumbs";

const departments = [
  { id: 'cardiology', name: "Cardiology", description: "Heart and vascular care.", icon: <FaHeartbeat /> },
  { id: 'oncology', name: "Oncology", description: "Cancer treatment and care.", icon: <FaSyringe /> },
  { id: 'pediatrics', name: "Pediatrics", description: "Healthcare for children.", icon: <FaChild /> },
  { id: 'orthopedics', name: "Orthopedics", description: "Bone and joint care.", icon: <FaBone /> },
  { id: 'neurology', name: "Neurology", description: "Nervous system disorders.", icon: <FaBrain /> },
  { id: 'emergency', name: "Emergency Medicine", description: "Immediate medical attention.", icon: <FaClinicMedical /> },
];

const Departments: React.FC = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);

//   const toggleMoreInfo = (index: number) => {
//     setSelectedDepartment(selectedDepartment === index ? null : index);
//   };
const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Departments", path: "/departments" },
  ];
  return (
    <div className="p-6 bg-white">
        <Breadcrumbs items={breadcrumbItems}/>
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

            <div className="mt-4">
              <Link to={`/services/${department.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                Learn More
              </Link>
              <Link to="/contact" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
