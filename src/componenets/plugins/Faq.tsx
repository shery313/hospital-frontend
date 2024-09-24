import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const faqData = [
  { category: "General", question: "What are the hospital visiting hours?", answer: "Our visiting hours are from 9 AM to 7 PM daily." },
  { category: "General", question: "How can I make an appointment?", answer: "Appointments can be made online or by calling our reception." },
  { category: "Services", question: "What services does the hospital offer?", answer: "We offer a range of services including emergency care, surgery, and maternity." },
  { category: "Policies", question: "What is your patient privacy policy?", answer: "We adhere to strict confidentiality and privacy standards." },
  { category: "Services", question: "Do you offer maternity services?", answer: "Yes, we provide comprehensive maternity services." },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="flex items-center mb-4">
        <AiOutlineSearch className="mr-2 text-gray-600" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md p-2 flex-grow"
        />
      </div>
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border p-4 rounded-md shadow-sm transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <motion.p
                className="mt-2 text-gray-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
