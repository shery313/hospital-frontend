import React, { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "./BreadCrumbs";
// import ReCAPTCHA from "react-google-recaptcha";

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
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!captchaValue) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSuccess("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "", phone: "" });
      setCaptchaValue(null); // Reset reCAPTCHA
      setIsSubmitting(false);
    }, 1500); // Simulating an API call delay
  };

  // const handleRecaptcha = (value: string | null) => {
  //   setCaptchaValue(value);
  // };

  return (
    <div className="flex flex-col lg:flex-row p-6 bg-white">
      <Breadcrumbs items={breadcrumbItems} />
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
            <label className="block mb-2" htmlFor="name">Name</label>
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
            <label className="block mb-2" htmlFor="phone">Phone (Optional)</label>
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
            <label className="block mb-2" htmlFor="message">Message</label>
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

          {/* Google reCAPTCHA */}
          {/* <div className="mb-4">
            <ReCAPTCHA
              sitekey="your_site_key" // Replace with your actual reCAPTCHA site key
              onChange={handleRecaptcha}
            />
          </div> */}

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
