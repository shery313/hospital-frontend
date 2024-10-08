import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // For navigation
// import loginImage from "./path/to/your/image.jpg"; // Replace with your image path

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    // Simulate successful login
    setSuccess("Login successful!");
    // Here you would typically send a request to your backend
  };

  return (
    <div className="flex flex-col-reverse md:flex-row h-fit">
      {/* Login Form */}
      <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Login to Your Account
        </motion.h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </button>

          <Link to="/signup" className="mt-4 text-blue-600 hover:underline text-center">
            Don’t have an account? Sign Up
          </Link>
        </motion.form>
      </div>

      {/* Side Image */}
      <div className="hidden md:block md:w-1/2 h-full">
        <img src='docter.jpg' alt="Login" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Login;
