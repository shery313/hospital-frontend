import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="py-10 px-4 max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className="text-3xl font-bold mb-6" variants={itemVariants}>
        Privacy Policy
      </motion.h1>
      <motion.p className="mb-4" variants={itemVariants}>
        Effective Date: January 1, 2024
      </motion.p>
      <motion.p className="mb-4" variants={itemVariants}>
        At the Catholic Diocese of Maralal Wamba Hospital, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-6 mb-4" variants={itemVariants}>
        1. Information We Collect
      </motion.h2>
      <motion.p className="mb-4" variants={itemVariants}>
        We may collect the following types of information:
        <ul className="list-disc list-inside mb-4">
          <li>Personal Information: Name, email address, phone number, etc.</li>
          <li>Health Information: Medical history, health records, etc.</li>
          <li>Usage Data: Information on how you use our website and services.</li>
        </ul>
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-6 mb-4" variants={itemVariants}>
        2. How We Use Your Information
      </motion.h2>
      <motion.p className="mb-4" variants={itemVariants}>
        We use the information we collect for the following purposes:
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain our services.</li>
          <li>To communicate with you regarding your appointments and health information.</li>
          <li>To improve our services and user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-6 mb-4" variants={itemVariants}>
        3. How We Protect Your Information
      </motion.h2>
      <motion.p className="mb-4" variants={itemVariants}>
        We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
        <ul className="list-disc list-inside mb-4">
          <li>Encryption of sensitive data.</li>
          <li>Access controls to limit who can view your information.</li>
          <li>Regular security assessments and updates.</li>
        </ul>
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-6 mb-4" variants={itemVariants}>
        4. Sharing Your Information
      </motion.h2>
      <motion.p className="mb-4" variants={itemVariants}>
        We do not sell, trade, or otherwise transfer your personal information to outside parties, except as required by law or to provide our services. We may share your information with:
        <ul className="list-disc list-inside mb-4">
          <li>Healthcare providers involved in your care.</li>
          <li>Service providers who assist us in our operations.</li>
          <li>Regulatory authorities as required by law.</li>
        </ul>
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-6 mb-4" variants={itemVariants}>
        5. Your Rights
      </motion.h2>
      <motion.p className="mb-4" variants={itemVariants}>
        You have the following rights regarding your personal information:
        <ul className="list-disc list-inside mb-4">
          <li>The right to access your personal information.</li>
          <li>The right to request correction of inaccurate information.</li>
          <li>The right to request deletion of your information.</li>
          <li>The right to withdraw consent to data processing.</li>
        </ul>
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-6 mb-4" variants={itemVariants}>
        6. Changes to This Privacy Policy
      </motion.h2>
      <motion.p className="mb-4" variants={itemVariants}>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
      </motion.p>

      <motion.h2 className="text-2xl font-semibold mt-6 mb-4" variants={itemVariants}>
        7. Contact Us
      </motion.h2>
      <motion.p className="mb-4" variants={itemVariants}>
        If you have any questions or concerns regarding this Privacy Policy, please contact us at:
      </motion.p>
      <motion.p className="mb-4" variants={itemVariants}>
        <strong>Email:</strong> info@maralalwambahospital.org<br />
        <strong>Phone:</strong> +254 700 000 000
      </motion.p>
    </motion.div>
  );
};

export default PrivacyPolicy;
