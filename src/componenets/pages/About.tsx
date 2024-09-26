import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Breadcrumbs from "./BreadCrumbs"; // Adjust the import path as necessary
import TeamSection from "./TeamSection";

const images = [
  "hospital1.jpg",
  "hospital2.jpg",
  "hospital3.jpg",
  "hospital4.jpg",
  "hospital5.jpg",
  "hospital6.jpg",
  "hospital7.jpg",
  "hospital8.jpg",
  "hospital9.jpg",
  // "hospital0.jpg",
  "hospital11.jpg",
  "hospital12.jpg",
  "hospital13.jpg",
  "hospital14.jpg",
  "hospital15.jpg",
  "hospital16.jpg",
  "hospital18.jpg",
  "hospital17.jpg",
  "hospital19.jpg", 
  "hospital20.jpg", 
  // Add paths for all images
];

const leadershipImages = [
  { name: "Dr. Jane Doe", role: "Chief Executive Officer", img: "docter1.jpg" },
  { name: "Dr. John Smith", role: "Medical Director", img: "docter4.jpg" },
  // Add more leadership members here
];

const awardsImages = [
  { title: "Best Hospital 2023", img: "docter2.jpg" },
  { title: "Top Patient Care 2022", img: "docter3.jpg" },
  // Add more awards here
];

const About: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
  ];

  return (
    <div className="bg-gray-50 md:m-5 m-3">
      {/* Breadcrumbs Section */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header Section with Background Image */}
      <motion.div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url('/nurse.jpg')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold text-white text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
      </motion.div>

      {/* History & Mission Section */}
      <motion.section
        className="py-12 px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">History & Mission</h2>
            <p className="text-lg leading-relaxed">
              Our hospital has a rich history of serving the community with dedication
              and care. Our mission is to enhance the health of the communities we serve
              by providing exceptional healthcare services and advancing medical knowledge.
            </p>
          </div>
          <img
            src="/history1.jpg"
            alt="Mission"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.section>
      <motion.div
        // className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        // style={{ backgroundImage: `url('/hospital-bg.jpg')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ><TeamSection/></motion.div>
      

      {/* Leadership Section */}
      <motion.section
        className="py-12 px-6 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipImages.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Certifications & Awards Section */}
      <motion.section
        className="py-12 px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Certifications & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardsImages.map((award, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold">{award.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Virtual Tour Section */}
      <motion.section
        className="py-12 px-6 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Hospital Virtual Tour</h2>
          <p className="text-lg leading-relaxed mb-8">
            Familiarize yourself with our hospital before you visit by taking a virtual
            tour. Explore our state-of-the-art facilities, patient rooms, and more.
          </p>
          {/* <a
            href="/virtual-tour"
            className="text-blue-600 underline hover:text-blue-800 transition-colors text-lg"
          >
            Start Virtual Tour
          </a> */}
        </div>
      </motion.section>
      
            
      {/* Swiper Image Carousel for Hospital Gallery */}
      <motion.div
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <h2 className="text-4xl font-semibold text-center mb-8">Hospital Gallery</h2> */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
          pagination={{ clickable: true }} // Enable pagination dots
          navigation // Enable navigation arrows
          modules={[Navigation, Pagination]} // Include the necessary modules
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Hospital Image ${index + 1}`}
                className="w-full h-96  object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default About;
