import React, { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "./BreadCrumbs";
import apiInstance from "../utils/axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact-us" },
  ];

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

  
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    

    setIsSubmitting(true);

    try {
      // API call to submit the contact form
      const response = await apiInstance.post('contact', formData);

      if (response.status === 201) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" });
        // setCaptchaValue(null); // Reset reCAPTCHA if used
      } else {
        setError("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setError("There was an error sending your message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="p-5">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="flex flex-col lg:flex-row p-6 bg-white">
        {/* Side Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="contactus.webp" // Replace with the actual path to your image
            alt="Contact Us"
            className="object-cover h-full rounded-lg shadow-md"
          />
        </div>

        {/* Contact Form */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-blue-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
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
              <label className="block mb-2" htmlFor="phone">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </div>

      {/* Google Maps */}
      <div className="my-8">
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.237236024185!2d37.317893399999996!3d0.9778808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178f552bad1932b7%3A0x944393e76f48efa6!2sCatholic%20Hospital%20Wamba!5e0!3m2!1sen!2s!4v1727359736891!5m2!1sen!2s"
          width="100%"
          height="400"
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          <strong>General Inquiries:</strong> +1 234 567 890
        </p>
        <p>
          <strong>Billing:</strong> +1 234 567 891
        </p>
        <p>
          <strong>Emergency:</strong> +1 234 567 892
        </p>
      </div>
    </div>
  );
};

export default Contact;
