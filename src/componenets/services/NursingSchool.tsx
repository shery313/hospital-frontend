import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface NursingProgram {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
}

const NursingSchool: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const programs: NursingProgram[] = [
    { id: 1, title: 'Bachelor of Science in Nursing', description: 'Prepare for a rewarding career...', duration: '4 years', image: '/nursing1.jpg' },
    { id: 2, title: 'Associate Degree in Nursing', description: 'Fast-track your nursing career...', duration: '2 years', image: '/nursing1.jpg' },
    { id: 3, title: 'Master of Science in Nursing', description: 'Advance your career...', duration: '2 years', image: '/nursing1.jpg' },
    { id: 4, title: 'Licensed Practical Nurse Program', description: 'Get started in nursing...', duration: '1 year', image: '/nursing1.jpg' },
  ];

  const galleryImages = ['/nursing1.jpg', '/nursing2.jpg', '/nursing3.jpg', '/nursing4.jpg'];

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Wamba Nursing School Programs</h1>

      {/* Search Bar */}
      <div className="flex mb-6">
        <input type="text" placeholder="Search programs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-blue-600 rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="bg-blue-600 text-white rounded-r-md px-4 flex items-center hover:bg-blue-700 transition duration-200">
          <FaSearch />
        </button>
      </div>

      {/* Nursing Programs List */}
      <div className="space-y-6">
        {filteredPrograms.map((program) => (
          <motion.div key={program.id} whileHover={{ scale: 1.03 }} className="border rounded-md shadow-lg overflow-hidden transition-transform duration-300">
            <img src={program.image} alt={program.title} className="w-full h-48 object-cover object-center transition duration-300 hover:scale-105" />
            <div className="p-4">
              <h2 className="text-xl font-semibold hover:text-blue-600 transition duration-200">{program.title}</h2>
              <p className="text-gray-600 mb-2">{program.description}</p>
              <p className="text-gray-500 text-sm">Duration: {program.duration}</p>
            </div>
          </motion.div>
        ))}
        {filteredPrograms.length === 0 && <p className="text-center text-gray-500 mt-4">No programs found.</p>}
      </div>

      {/* Image Gallery Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Wamba Nursing School Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div key={index} className="overflow-hidden rounded-md shadow-lg cursor-pointer" whileHover={{ scale: 1.05 }} onClick={() => {
            setPhotoIndex(index);
            setIsOpen(true);
          }}>
            <img src={image} alt={`Wamba Nursing School Image ${index + 1}`} className="w-full h-40 object-cover transition duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Custom Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
          <button className="absolute left-4 text-white text-2xl" onClick={() => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)}>
            <FaArrowLeft />
          </button>
          <img src={galleryImages[photoIndex]} alt="Full-size Image" className="max-w-full max-h-full object-contain" />
          <button className="absolute right-4 text-white text-2xl" onClick={() => setPhotoIndex((photoIndex + 1) % galleryImages.length)}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default NursingSchool;
