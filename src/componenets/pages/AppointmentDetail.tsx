import { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "./BreadCrumbs";

interface Appointment {
  id: number;
  doctorName: string;
  patientName: string;
  appointmentDate: string;
  appointmentTime: string;
  status: 'Scheduled' | 'Completed' | 'Canceled';
}

const AppointmentDetail = () => {
  const [appointment, setAppointment] = useState<Appointment>({
    id: 1,
    doctorName: "Dr. John Doe",
    patientName: "Jane Smith",
    appointmentDate: "2024-09-25",
    appointmentTime: "10:00 AM",
    status: "Scheduled",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newDate, setNewDate] = useState(appointment.appointmentDate);
  const [newTime, setNewTime] = useState(appointment.appointmentTime);
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Appointment", path: "/appointment" },
  ];

  const handleStatusChange = (newStatus: Appointment['status']) => {
    setAppointment({ ...appointment, status: newStatus });
  };

  const handleEditSave = () => {
    setAppointment({ ...appointment, appointmentDate: newDate, appointmentTime: newTime });
    setIsEditing(false);
  };

  return (
    <div className="m-3 md:m-5">
    <Breadcrumbs items={breadcrumbItems}/>
    <motion.div
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Details</h2>

      {/* Doctor and Patient Information */}
      <div className="mb-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Doctor: </span>{appointment.doctorName}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Patient: </span>{appointment.patientName}
        </p>
      </div>

      {/* Appointment Date and Time */}
      {!isEditing ? (
        <div className="mb-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Date: </span>{appointment.appointmentDate}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Time: </span>{appointment.appointmentTime}
          </p>
        </div>
      ) : (
        <div className="mb-4">
          <label className="block text-gray-700">Date:</label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
          <label className="block text-gray-700 mt-2">Time:</label>
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
          />
        </div>
      )}

      {/* Appointment Status */}
      <div className="mb-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Status: </span>
          <span
            className={`px-2 py-1 rounded ${
              appointment.status === 'Scheduled'
                ? 'bg-yellow-200 text-yellow-800'
                : appointment.status === 'Completed'
                ? 'bg-green-200 text-green-800'
                : 'bg-red-200 text-red-800'
            }`}
          >
            {appointment.status}
          </span>
        </p>
      </div>

      {/* Edit, Save and Cancel Buttons */}
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleEditSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>

      {/* Status Change Buttons */}
      <div className="flex justify-between mt-4 space-x-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleStatusChange('Completed')}
        >
          Mark as Completed
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => handleStatusChange('Canceled')}
        >
          Cancel Appointment
        </button>
      </div>
    </motion.div>
    </div>
  );
};

export default AppointmentDetail;
