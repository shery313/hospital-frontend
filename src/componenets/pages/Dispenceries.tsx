import React from 'react';
import { motion } from 'framer-motion';

interface Dispensary {
  name: string;
  imgSrc: string;
  mapSrc: string;
  description: string;
}

const dispensaries: Dispensary[] = [
  {
    name: 'South Horr Dispensary',
    imgSrc: 'hospital5.jpg', // Replace with actual image path
    mapSrc: 'https://www.google.com/maps/embed?pb=...SouthHorrCoords...', // Replace with actual iframe URL
    description: 'A community-driven dispensary serving South Horr area with primary healthcare services.',
  },
  {
    name: 'Baragoi Catholic Hospital',
    imgSrc: 'hospital.jpg', // Replace with actual image path
    mapSrc: 'https://www.google.com/maps/embed?pb=...BaragoiCoords...', // Replace with actual iframe URL
    description: 'Providing comprehensive healthcare and emergency services to the Baragoi region.',
  },
  {
    name: 'Maralal Catholic Dispensary',
    imgSrc: '/hospital6.jpg', // Replace with actual image path
    mapSrc: 'https://www.google.com/maps/embed?pb=...MaralalCoords...', // Replace with actual iframe URL
    description: 'Offering quality healthcare to the community of Maralal, with a focus on maternal and child health.',
  },
  {
    name: 'Suguta Mar Mar Dispensary',
    imgSrc: '/hospital7.jpg', // Replace with actual image path
    mapSrc: 'https://www.google.com/maps/embed?pb=...SugutaCoords...', // Replace with actual iframe URL
    description: 'A well-established dispensary in Suguta Mar Mar providing essential healthcare services.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const Dispensaries: React.FC = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Dispensaries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {dispensaries.map((dispensary, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              variants={cardVariants}
            >
              {/* Dispensary Name */}
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{dispensary.name}</h3>
              
              {/* Dispensary Image */}
              <img
                src={dispensary.imgSrc}
                alt={dispensary.name}
                className="w-full h-48 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity duration-300"
              />

              {/* Description */}
              <p className="text-gray-700 text-base mb-4">{dispensary.description}</p>

              {/* Google Map */}
              <div className="map-container rounded-md overflow-hidden mb-4">
                <iframe
                  src={dispensary.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                  title={`Map of ${dispensary.name}`}
                ></iframe>
              </div>

              {/* Call to Action (Optional) */}
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Dispensaries;
