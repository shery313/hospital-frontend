import React from 'react';
import { motion } from 'framer-motion';

const DentistDetail: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/dentist.jpg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl lg:text-6xl font-bold"
          >
            Dental Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg lg:text-2xl max-w-2xl"
          >
            Comprehensive dental care for the entire family. Our dental team offers expert services for all your oral health needs.
          </motion.p>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="px-4 py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Dental Services
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Expert Dental Care by Leading Dentists</h3>
              <p>
                Our team of dentists specializes in preventive, restorative, and cosmetic dentistry, ensuring a healthy smile for everyone.
              </p>
              <p>
                We offer a wide range of services, including cleanings, fillings, crowns, bridges, and teeth whitening tailored to meet your specific needs.
              </p>
            </motion.div>

            {/* Service Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <img src="/dentist.jpg" alt="Dentistry" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Dental Treatments */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Dental Treatments
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Teeth Cleaning', icon: '🪥', description: 'Regular cleanings to prevent cavities and gum disease.' },
              { title: 'Fillings', icon: '🦷', description: 'Composite fillings for restoring teeth after decay.' },
              { title: 'Whitening', icon: '✨', description: 'Professional teeth whitening for a brighter smile.' }
            ].map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl">{treatment.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{treatment.title}</h3>
                <p className="mt-2 text-gray-600">{treatment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Patient Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Sarah Miller', quote: 'The dental team is fantastic! They made me feel comfortable and safe.' },
              { name: 'John Smith', quote: 'I finally have the smile I always wanted. Thank you!' }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
              >
                <p className="italic mb-4">“{testimonial.quote}”</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                question: 'What services do you provide?',
                answer: 'We provide a range of dental services, including cleanings, fillings, crowns, and whitening.'
              },
              {
                question: 'Do you accept new patients?',
                answer: 'Yes, we are currently accepting new patients. Schedule your appointment today!'
              },
              {
                question: 'What should I bring to my first appointment?',
                answer: 'Please bring your insurance information and any medical records relevant to your dental history.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-blue-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl font-bold"
        >
          Get Expert Dental Care Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          Don’t wait to take care of your smile. Schedule an appointment with our dental specialists today!
        </motion.p>
        <motion.a
          href="tel:1234567890"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 inline-block bg-white text-blue-500 rounded-lg py-2 px-4 font-semibold hover:bg-gray-200 transition-colors duration-300"
        >
          Call Us Now
        </motion.a>
      </section>
    </div>
  );
};

export default DentistDetail;
