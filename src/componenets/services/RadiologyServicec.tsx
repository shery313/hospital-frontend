import React from 'react'
import { motion } from 'framer-motion'

const RadiologyDetail: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/radiology.jpeg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl lg:text-6xl font-bold"
          >
            Radiology Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg lg:text-2xl max-w-2xl"
          >
            Advanced imaging technologies to provide accurate and timely diagnoses for your health needs.
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
            Our Radiology Services
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Comprehensive Radiology Care</h3>
              <p>
                Our radiology department offers a wide range of imaging services including X-rays, CT scans, MRI, and ultrasound to aid in the diagnosis and treatment of various conditions. 
              </p>
              <p>
                With cutting-edge technology and expert radiologists, we ensure that every patient receives high-quality diagnostic services in a comfortable environment.
              </p>
            </motion.div>

            {/* Service Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <img src="/radiology1.jpeg" alt="Radiology" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Radiology Services */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Radiology Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'MRI Scans', icon: '🧠', description: 'Advanced magnetic imaging for detailed diagnosis of tissues and organs.' },
              { title: 'CT Scans', icon: '💻', description: 'Comprehensive cross-sectional images for a deeper look inside the body.' },
              { title: 'X-rays', icon: '📷', description: 'Traditional and digital X-rays for quick and effective diagnosis.' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
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
            Patient Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Emma Watson', quote: 'The radiology team was professional and made me feel at ease during my scan.' },
              { name: 'John Doe', quote: 'Thanks to the accurate imaging, my doctor was able to diagnose my condition quickly.' }
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

      {/* Call to Action */}
      <section className="px-4 py-16 bg-blue-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl font-bold"
        >
          Schedule a Radiology Appointment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          Our expert radiologists are here to provide you with the most accurate and timely diagnostics. Contact us today to schedule your appointment.
        </motion.p>
        <motion.a
          href="tel:1234567890"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="inline-block mt-8 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Call Now
        </motion.a>
      </section>
    </div>
  )
}

export default RadiologyDetail
