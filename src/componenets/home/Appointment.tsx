import React, { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  doctor: string;
}

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.doctor) newErrors.doctor = "Doctor selection is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage("");
      return;
    }

    // Submit form logic here (e.g., API call)
    setSuccessMessage("Appointment successfully booked!");
    setErrors({});
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      doctor: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      <motion.div
        className="md:w-1/2 p-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-2 rounded mb-4">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Email"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Your Phone Number"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.date ? "border-red-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.date && <span className="text-red-500 text-sm">{errors.date}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.time ? "border-red-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.time && <span className="text-red-500 text-sm">{errors.time}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium">Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className={`mt-1 block w-full border ${errors.doctor ? "border-red-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select a Doctor</option>
              <option value="dr-john-doe">Dr. John Doe</option>
              <option value="dr-jane-smith">Dr. Jane Smith</option>
              {/* Add more doctors as needed */}
            </select>
            {errors.doctor && <span className="text-red-500 text-sm">{errors.doctor}</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Book Appointment
          </button>
        </form>
      </motion.div>

      <motion.div
        className="md:w-1/2 hidden md:block h-64 md:h-auto bg-cover bg-center rounded-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img className="md:w-full h-40 md:h-auto bg-cover bg-center rounded-md" src="docter.jpg" alt="doctor" />
      </motion.div>
    </div>
  );
};

export default Appointment;
