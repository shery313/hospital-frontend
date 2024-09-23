// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // To navigate after saving
// import { motion } from "framer-motion";

// interface Appointment {
//   id: number;
//   doctorName: string;
//   patientName: string;
//   appointmentDate: string;
//   appointmentTime: string;
//   status: 'Scheduled' | 'Completed' | 'Canceled';
// }

// const EditAppointment = () => {
//   const navigate = useNavigate();

//   // Initial Appointment Data (this should ideally come from an API)
//   const [appointment, setAppointment] = useState<Appointment>({
//     id: 1,
//     doctorName: "Dr. John Doe",
//     patientName: "Jane Smith",
//     appointmentDate: "2024-09-25",
//     appointmentTime: "10:00 AM",
//     status: "Scheduled",
//   });

//   // Form input states
//   const [doctorName, setDoctorName] = useState(appointment.doctorName);
//   const [patientName, setPatientName] = useState(appointment.patientName);
//   const [appointmentDate, setAppointmentDate] = useState(appointment.appointmentDate);
//   const [appointmentTime, setAppointmentTime] = useState(appointment.appointmentTime);
//   const [status, setStatus] = useState(appointment.status);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Form Validation and Submission Handler
//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Basic Validation (You can extend this)
//     if (!doctorName || !patientName || !appointmentDate || !appointmentTime) {
//       setErrorMessage("All fields are required.");
//       return;
//     }

//     // Save the appointment (Mocked)
//     const updatedAppointment: Appointment = {
//       id: appointment.id,
//       doctorName,
//       patientName,
//       appointmentDate,
//       appointmentTime,
//       status,
//     };

//     console.log("Updated Appointment:", updatedAppointment);

//     // Navigate back to the appointment details page after saving (mocked with navigation)
//     navigate(`/appointment/${appointment.id}`);
//   };

//   return (
//     <motion.div
//       className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Appointment</h2>

//       {/* Error Message */}
//       {errorMessage && (
//         <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
//       )}

//       <form onSubmit={handleFormSubmit}>

//         {/* Doctor Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Doctor Name</label>
//           <input
//             type="text"
//             value={doctorName}
//             onChange={(e) => setDoctorName(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-4 py-2"
//             required
//           />
//         </div>

//         {/* Patient Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Patient Name</label>
//           <input
//             type="text"
//             value={patientName}
//             onChange={(e) => setPatientName(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-4 py-2"
//             required
//           />
//         </div>

//         {/* Appointment Date */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Appointment Date</label>
//           <input
//             type="date"
//             value={appointmentDate}
//             onChange={(e) => setAppointmentDate(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-4 py-2"
//             required
//           />
//         </div>

//         {/* Appointment Time */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Appointment Time</label>
//           <input
//             type="time"
//             value={appointmentTime}
//             onChange={(e) => setAppointmentTime(e.target.value)}
//             className="w-full border border-gray-300 rounded-md px-4 py-2"
//             required
//           />
//         </div>

//         {/* Status */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-semibold mb-2">Status</label>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value as Appointment['status'])}
//             className="w-full border border-gray-300 rounded-md px-4 py-2"
//           >
//             <option value="Scheduled">Scheduled</option>
//             <option value="Completed">Completed</option>
//             <option value="Canceled">Canceled</option>
//           </select>
//         </div>

//         {/* Save Button */}
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </motion.div>
//   );
// };

// export default EditAppointment;
