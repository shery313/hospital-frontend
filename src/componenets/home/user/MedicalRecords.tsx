import React from 'react';
import { motion } from 'framer-motion';

interface LabResult {
  id: number;
  date: string;
  testType: string;
  result: string;
}

interface TreatmentPlan {
  id: number;
  condition: string;
  doctor: string;
  treatment: string;
  startDate: string;
  endDate: string | null;
}

interface MedicalHistory {
  id: number;
  date: string;
  condition: string;
  notes: string;
  doctor: string;
}

const medicalHistory: MedicalHistory[] = [
  {
    id: 1,
    date: '2024-07-15',
    condition: 'Hypertension',
    notes: 'Blood pressure stabilized with medication.',
    doctor: 'Dr. Emily Brown',
  },
  {
    id: 2,
    date: '2024-06-10',
    condition: 'Mild Asthma',
    notes: 'Prescribed inhaler for occasional use.',
    doctor: 'Dr. Sarah Johnson',
  },
];

const labResults: LabResult[] = [
  {
    id: 1,
    date: '2024-07-20',
    testType: 'Blood Test',
    result: 'Normal',
  },
  {
    id: 2,
    date: '2024-07-10',
    testType: 'X-Ray',
    result: 'No abnormalities detected.',
  },
];

const treatmentPlans: TreatmentPlan[] = [
  {
    id: 1,
    condition: 'Hypertension',
    doctor: 'Dr. Emily Brown',
    treatment: 'Daily medication, regular exercise, and dietary adjustments.',
    startDate: '2024-07-15',
    endDate: null,
  },
  {
    id: 2,
    condition: 'Asthma',
    doctor: 'Dr. Sarah Johnson',
    treatment: 'Inhaler use as needed.',
    startDate: '2024-06-10',
    endDate: '2024-08-10',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MedicalRecords: React.FC = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Medical History Section */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 mb-8"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-4">Medical History</h3>
          {medicalHistory.length === 0 ? (
            <p className="text-gray-700">No medical history available.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {medicalHistory.map(history => (
                <motion.div
                  key={history.id}
                  className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                  variants={cardVariants}
                >
                  <p className="text-lg font-semibold">{history.date}</p>
                  <p className="text-gray-700">Condition: {history.condition}</p>
                  <p className="text-gray-700">Doctor: {history.doctor}</p>
                  <p className="text-gray-700">Notes: {history.notes}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Lab Results Section */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 mb-8"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-4">Lab Results</h3>
          {labResults.length === 0 ? (
            <p className="text-gray-700">No lab results available.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {labResults.map(result => (
                <motion.div
                  key={result.id}
                  className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                  variants={cardVariants}
                >
                  <p className="text-lg font-semibold">{result.date}</p>
                  <p className="text-gray-700">Test: {result.testType}</p>
                  <p className="text-gray-700">Result: {result.result}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Treatment Plans Section */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-4">Treatment Plans</h3>
          {treatmentPlans.length === 0 ? (
            <p className="text-gray-700">No active treatment plans.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {treatmentPlans.map(plan => (
                <motion.div
                  key={plan.id}
                  className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                  variants={cardVariants}
                >
                  <p className="text-lg font-semibold">
                    Condition: {plan.condition}
                  </p>
                  <p className="text-gray-700">Doctor: {plan.doctor}</p>
                  <p className="text-gray-700">
                    Treatment: {plan.treatment}
                  </p>
                  <p className="text-gray-700">
                    Start Date: {plan.startDate}
                  </p>
                  {plan.endDate && (
                    <p className="text-gray-700">End Date: {plan.endDate}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MedicalRecords;
