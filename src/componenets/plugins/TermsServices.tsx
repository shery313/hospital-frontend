import React from "react";
import { motion } from "framer-motion";

const TermsOfService: React.FC = () => {
  const terms = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content:
        "By using our services, you agree to these Terms of Service. If you do not agree, you may not use our services.",
    },
    {
      id: 2,
      title: "Changes to Terms",
      content:
        "We may update our Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page.",
    },
    {
      id: 3,
      title: "User Responsibilities",
      content:
        "You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others.",
    },
    {
      id: 4,
      title: "Limitation of Liability",
      content:
        "In no event shall we be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
    },
    {
      id: 5,
      title: "Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate.",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Terms of Service</h1>
      <div className="space-y-4">
        {terms.map((term) => (
          <motion.div
            key={term.id}
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 20 }}
            transition={{ duration: 0.5 }}
            className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold">{term.title}</h2>
            <p className="text-gray-600">{term.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
