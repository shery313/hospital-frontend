import React from 'react'
import { motion } from 'framer-motion'

const EmergencyCareDetail: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/ambulance.jpg")' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl lg:text-6xl font-bold"
          >
            24/7 Emergency Care Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg lg:text-2xl max-w-2xl"
          >
            Our team of expert professionals is here to provide you with the best emergency care services, anytime, anywhere.
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
            Comprehensive Emergency Care Services
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
              <p>
                Our emergency care services are equipped with the latest medical technology and staffed by experienced professionals. We prioritize immediate and comprehensive care, ensuring that you receive treatment as quickly and efficiently as possible.
              </p>
              <p>
                From heart attacks to traumatic injuries, our team is trained to handle a wide variety of emergency situations, ensuring your safety and recovery.
              </p>
            </motion.div>

            {/* Service Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <img src="/cruiser.jpg" alt="Emergency Care" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Specialized Emergency Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Critical Care', icon: '💉', description: 'State-of-the-art critical care units.' },
              { title: 'Trauma Management', icon: '🚑', description: 'Rapid response trauma teams available 24/7.' },
              { title: 'Cardiac Emergency', icon: '❤️', description: 'Expert cardiologists on standby for heart emergencies.' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
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
          Contact Us for Immediate Emergency Help
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          If you or a loved one needs urgent medical attention, don’t hesitate to call our emergency care team or visit us in person.
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

export default EmergencyCareDetail
