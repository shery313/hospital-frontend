import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

interface NursingProgram {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
}

const NursingSchool: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [programs] = useState<NursingProgram[]>([
    {
      id: 1,
      title: 'Bachelor of Science in Nursing',
      description: 'Prepare for a rewarding career in nursing with our comprehensive Bachelor of Science in Nursing program.',
      duration: '4 years',
      image: '/nursing1.jpg',
    },
    {
      id: 2,
      title: 'Associate Degree in Nursing',
      description: 'Fast-track your nursing career with our Associate Degree program, designed to equip you with essential skills.',
      duration: '2 years',
      image: '/nursing1.jpg',
    },
    {
      id: 3,
      title: 'Master of Science in Nursing',
      description: 'Advance your career with our Master of Science in Nursing program, focusing on leadership and specialization.',
      duration: '2 years',
      image: '/nursing1.jpg',
    },
    {
      id: 4,
      title: 'Licensed Practical Nurse Program',
      description: 'Get started in nursing with our practical nursing program, ideal for those looking to enter the field quickly.',
      duration: '1 year',
      image: '/nursing1.jpg',
    },
  ]);

  const filteredPrograms = programs.filter((program) =>
    program.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Array of images related to nursing school
  const galleryImages = [
    '/nursing1.jpg',
    '/nursing2.jpg',
    '/nursing3.jpg',
    '/nursing4.jpg',
    // 'nursing_gallery_5.jpg',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Wamba Nursing School Programs</h1>

      {/* Search Bar */}
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-600 rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white rounded-r-md px-4 flex items-center hover:bg-blue-700 transition duration-200">
          <FaSearch />
        </button>
      </div>

      {/* Nursing Programs List */}
      <div className="space-y-6">
        {filteredPrograms.map((program) => (
          <motion.div
            key={program.id}
            whileHover={{ scale: 1.03 }}
            className="border rounded-md shadow-lg overflow-hidden transition-transform duration-300"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover object-center transition duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold hover:text-blue-600 transition duration-200">{program.title}</h2>
              <p className="text-gray-600 mb-2">{program.description}</p>
              <p className="text-gray-500 text-sm">Duration: {program.duration}</p>
            </div>
          </motion.div>
        ))}

        {filteredPrograms.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No programs found.</p>
        )}
      </div>

      {/* Image Gallery Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Wamba Nursing School Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-md shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={image}
              alt={`Wamba Nursing School Image ${index + 1}`}
              className="w-full h-40 object-cover transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NursingSchool;
