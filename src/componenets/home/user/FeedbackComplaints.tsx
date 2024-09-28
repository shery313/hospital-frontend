import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FeedbackForm {
  type: 'Feedback' | 'Complaint';
  message: string;
  name: string;
  email: string;
}

const initialFormState: FeedbackForm = {
  type: 'Feedback',
  message: '',
  name: '',
  email: '',
};

const FeedbackComplaints: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackForm>(initialFormState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission, e.g., send data to an API.
    console.log(formData);
    // Reset the form
    setFormData(initialFormState);
  };

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Feedback and Complaints</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              className="text-center text-green-500 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you for your submission!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Feedback or Complaint Selection */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Type</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="Feedback"
                      checked={formData.type === 'Feedback'}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">Feedback</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="Complaint"
                      checked={formData.type === 'Complaint'}
                      onChange={handleInputChange}
                      className="form-radio text-red-500"
                    />
                    <span className="ml-2">Complaint</span>
                  </label>
                </div>
              </div>

              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your feedback or complaint"
                  rows={5}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg w-full transition-all duration-300"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default FeedbackComplaints;
