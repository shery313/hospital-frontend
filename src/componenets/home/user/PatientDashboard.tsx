import React from 'react';
import { motion } from 'framer-motion';

interface Appointment {
  id: number;
  date: string;
  time: string;
  doctor: string;
  status: string;
}

interface MedicalRecord {
  id: number;
  date: string;
  description: string;
  doctor: string;
}

interface Patient {
  name: string;
  age: number;
  gender: string;
  contact: string;
  address: string;
  profileImg: string;
}

const patient: Patient = {
  name: 'John Doe',
  age: 34,
  gender: 'Male',
  contact: '123-456-7890',
  address: '1234 Medical Lane, Health City',
  profileImg: '/images/patient-profile.jpg', // Replace with actual image path
};

const appointments: Appointment[] = [
  {
    id: 1,
    date: '2024-09-28',
    time: '10:00 AM',
    doctor: 'Dr. Sarah Johnson',
    status: 'Upcoming',
  },
  {
    id: 2,
    date: '2024-09-15',
    time: '3:00 PM',
    doctor: 'Dr. Emily Brown',
    status: 'Completed',
  },
];

const medicalRecords: MedicalRecord[] = [
  {
    id: 1,
    date: '2024-08-22',
    description: 'Annual check-up, all vitals normal.',
    doctor: 'Dr. Sarah Johnson',
  },
  {
    id: 2,
    date: '2024-07-10',
    description: 'Treated for mild flu, prescribed medication.',
    doctor: 'Dr. Emily Brown',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PatientDashboard: React.FC = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Profile Section */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 mb-8"
          variants={cardVariants}
        >
          <div className="flex items-center">
            <img
              src={patient.profileImg}
              alt={patient.name}
              className="w-20 h-20 object-cover rounded-full mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{patient.name}</h2>
              <p className="text-gray-700">
                Age: {patient.age} | Gender: {patient.gender}
              </p>
              <p className="text-gray-700">Contact: {patient.contact}</p>
              <p className="text-gray-700">Address: {patient.address}</p>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Appointments Section */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 mb-8"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-4">Upcoming Appointments</h3>
          {appointments.filter(app => app.status === 'Upcoming').length === 0 ? (
            <p className="text-gray-700">No upcoming appointments.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {appointments
                .filter(app => app.status === 'Upcoming')
                .map(appointment => (
                  <motion.div
                    key={appointment.id}
                    className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                    variants={cardVariants}
                  >
                    <p className="text-lg font-semibold">
                      {appointment.date} at {appointment.time}
                    </p>
                    <p className="text-gray-700">
                      Doctor: {appointment.doctor}
                    </p>
                    <p className="text-gray-700">Status: {appointment.status}</p>
                  </motion.div>
                ))}
            </div>
          )}
        </motion.div>

        {/* Recent Medical Records Section */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 mb-8"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-4">Recent Medical Records</h3>
          {medicalRecords.length === 0 ? (
            <p className="text-gray-700">No recent medical records available.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {medicalRecords.map(record => (
                <motion.div
                  key={record.id}
                  className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                  variants={cardVariants}
                >
                  <p className="text-lg font-semibold">{record.date}</p>
                  <p className="text-gray-700">{record.description}</p>
                  <p className="text-gray-700">Doctor: {record.doctor}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Appointment Management Section */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold mb-4">Appointment Management</h3>
          <div className="grid grid-cols-1 gap-4">
            {appointments.map(appointment => (
              <motion.div
                key={appointment.id}
                className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
                variants={cardVariants}
              >
                <p className="text-lg font-semibold">
                  {appointment.date} at {appointment.time}
                </p>
                <p className="text-gray-700">
                  Doctor: {appointment.doctor}
                </p>
                <p className="text-gray-700">Status: {appointment.status}</p>
                {/* Manage Button */}
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4">
                  Manage Appointment
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PatientDashboard;
