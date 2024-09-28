import React from 'react';
import { motion } from 'framer-motion';

interface Prescription {
  id: number;
  medication: string;
  dosage: string;
  prescribedBy: string;
  startDate: string;
  endDate: string | null;
  refillsLeft: number;
}

const prescriptions: Prescription[] = [
  {
    id: 1,
    medication: 'Lisinopril',
    dosage: '10 mg',
    prescribedBy: 'Dr. Emily Brown',
    startDate: '2024-07-15',
    endDate: '2024-12-15',
    refillsLeft: 2,
  },
  {
    id: 2,
    medication: 'Albuterol',
    dosage: 'Inhaler as needed',
    prescribedBy: 'Dr. Sarah Johnson',
    startDate: '2024-06-10',
    endDate: '2024-08-10',
    refillsLeft: 0,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PrescriptionManagement: React.FC = () => {
  const handleRefillRequest = (prescriptionId: number) => {
    alert(`Refill request sent for prescription ID: ${prescriptionId}`);
    // You can integrate this with an API call to handle actual refill requests.
  };

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Prescription Management</h2>

        {prescriptions.length === 0 ? (
          <p className="text-gray-700 text-center">No prescriptions available.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {prescriptions.map(prescription => (
              <motion.div
                key={prescription.id}
                className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
                variants={cardVariants}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {prescription.medication}
                    </h3>
                    <p className="text-gray-600">Dosage: {prescription.dosage}</p>
                    <p className="text-gray-600">Prescribed by: {prescription.prescribedBy}</p>
                    <p className="text-gray-600">Start Date: {prescription.startDate}</p>
                    {prescription.endDate && (
                      <p className="text-gray-600">End Date: {prescription.endDate}</p>
                    )}
                    <p className="text-gray-800 font-semibold">
                      Refills Left: {prescription.refillsLeft}
                    </p>
                  </div>

                  {/* Refill Request Button */}
                  <button
                    onClick={() => handleRefillRequest(prescription.id)}
                    disabled={prescription.refillsLeft === 0}
                    className={`${
                      prescription.refillsLeft === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300`}
                  >
                    {prescription.refillsLeft === 0 ? 'No Refills' : 'Request Refill'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default PrescriptionManagement;
