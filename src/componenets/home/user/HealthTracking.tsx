import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HealthMetric {
  id: number;
  date: string;
  weight: number;
  bloodPressure: string; // Format: "120/80"
}

const initialMetrics: HealthMetric[] = [
  { id: 1, date: '2024-09-01', weight: 70, bloodPressure: '120/80' },
  { id: 2, date: '2024-09-10', weight: 68, bloodPressure: '118/79' },
];

const HealthTracking: React.FC = () => {
  const [metrics, setMetrics] = useState<HealthMetric[]>(initialMetrics);
  const [newMetric, setNewMetric] = useState<HealthMetric>({
    id: metrics.length + 1,
    date: '',
    weight: 0,
    bloodPressure: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMetric({
      ...newMetric,
      [name]: name === 'weight' ? parseFloat(value) : value,
    });
  };

  const handleAddMetric = () => {
    if (newMetric.date && newMetric.weight > 0 && newMetric.bloodPressure) {
      setMetrics([...metrics, newMetric]);
      setNewMetric({
        id: metrics.length + 2,
        date: '',
        weight: 0,
        bloodPressure: '',
      });
    }
  };

  const handleDeleteMetric = (id: number) => {
    setMetrics(metrics.filter(metric => metric.id !== id));
  };

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Health Tracking</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Track Your Health Metrics</h3>
          
          {/* Display health metrics */}
          {metrics.map(metric => (
            <motion.div
              key={metric.id}
              className="mb-4 p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">Date: {metric.date}</p>
                  <p className="text-sm text-gray-500">Weight: {metric.weight} kg</p>
                  <p>Blood Pressure: {metric.bloodPressure}</p>
                </div>
                <button
                  onClick={() => handleDeleteMetric(metric.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}

          {/* Add new health metric */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Add New Health Metric</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={newMetric.date}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={newMetric.weight}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Blood Pressure (e.g., 120/80)</label>
            <input
              type="text"
              name="bloodPressure"
              value={newMetric.bloodPressure}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Add Metric Button */}
          <button
            onClick={handleAddMetric}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg w-full transition-all duration-300"
          >
            Add Metric
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default HealthTracking;
