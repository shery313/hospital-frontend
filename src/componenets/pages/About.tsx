import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper"; // Import Navigation module
import "swiper/css";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Breadcrumbs from "./BreadCrumbs"; // Adjust the import path as necessary

const images = [
  "hospital1.jpg",
  "hospital2.jpg",
  "hospital3.jpg",
  // Add paths for all images
];

const About: React.FC = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
  ];

  return (
    <div className="p-6 bg-white">
      {/* Breadcrumbs Section */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header Section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      {/* About Content Section */}
      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg">
          Welcome to our hospital, where we prioritize patient care and comfort.
          Our dedicated team of healthcare professionals is committed to providing
          the highest quality of medical services in a safe and welcoming environment.
        </p>

        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-lg">
          Our mission is to enhance the health of the communities we serve by
          providing exceptional healthcare services and advancing medical knowledge.
        </p>

        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="text-lg">
          To be a leader in healthcare by delivering innovative, high-quality, and
          patient-centered care.
        </p>

        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Compassion: We treat our patients with empathy and respect.</li>
          <li>Integrity: We adhere to the highest ethical standards in all we do.</li>
          <li>Excellence: We strive for excellence in healthcare delivery.</li>
          <li>Teamwork: We work collaboratively to achieve the best outcomes for our patients.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <p className="text-lg">
          Our hospital is staffed by highly trained and experienced healthcare
          professionals dedicated to your well-being. From doctors and nurses to
          support staff, everyone is committed to providing personalized care.
        </p>
      </motion.div>

      {/* Swiper Component for Image Carousel */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl p-3 text-center">Hospital Gallery</h1>
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
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default About;
