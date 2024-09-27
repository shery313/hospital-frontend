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
    imgSrc: 'south.jpg', // Replace with actual image path
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1632937958498!2d36.9157368!3d2.0903528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x179ac930f713eb6b%3A0x4364c1dff0ab49fe!2sSouth%20Horr%20Catholic%20Health%20Centre!5e0!3m2!1sen!2s!4v1727436794806!5m2!1sen!2s",
    description: 'A community-driven dispensary serving South Horr area with primary healthcare services.',
  },
  {
    name: 'Baragoi Catholic Hospital',
    imgSrc: 'bargoi.jpg', // Replace with actual image path
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.8871768163754!2d36.790816299999996!3d1.7827312000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17853b134001b957%3A0x7569c30263d08513!2sBaragoi%20Catholic%20Dispensary!5e0!3m2!1sen!2s!4v1727436987482!5m2!1sen!2s",
    description: 'Providing comprehensive healthcare and emergency services to the Baragoi region.',
  },
  {
    name: 'Maralal Catholic Dispensary',
    imgSrc: '/maralal.jpeg', // Replace with actual image path
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0921830841976!2d36.70183109999999!3d1.0931431000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1785d140ae12fdf5%3A0x326a1173b82e3a62!2sMaralal%20Catholic%20Dispensary!5e0!3m2!1sen!2s!4v1727436542452!5m2!1sen!2s",
    description: 'Offering quality healthcare to the community of Maralal, with a focus on maternal and child health.',
  },
  {
    name: 'Suguta Mar Mar Dispensary',
    imgSrc: '/suguta.JPG', // Replace with actual image path
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4043213566283!2d36.6894!3d0.8254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1786637b45f4d71d%3A0xb2f18ee53daa81da!2sSuguta%20Marmar%20Catholic%20Dispensary!5e0!3m2!1sen!2s!4v1727436334775!5m2!1sen!2s",
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
              {/* <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Dispensaries;
