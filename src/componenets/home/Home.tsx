import React from "react";
import { FaHeartbeat, FaStethoscope, FaUserMd, FaAmbulance } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Slider settings
const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

const testimonialSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
};

const Home: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="visible">
      {/* Hero Section with Slider */}
      <section className="relative h-fit">
        <Slider {...imageSliderSettings} className="w-full h-full">
          {[
            { imgSrc: "hospital.jpg", alt: "Hospital Front View" },
            { imgSrc: "hospital1.jpg", alt: "ICU Facilities" },
            { imgSrc: "hospital2.jpg", alt: "Modern Operation Theater" },
            // { imgSrc: "hospital3.jpg", alt: "Private Rooms" },
          ].map((image, index) => (
            <div key={index} className="relative h-full">
              <img src={image.imgSrc} alt={image.alt} className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <motion.h1 className="text-white hover:text-blue-500 text-center text-3xl  md:text-6xl font-bold" variants={fadeInUp}>
                  Your Health, Our Priority
                </motion.h1>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <motion.div className="container mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeartbeat className="text-blue-500 text-6xl mb-4 mx-auto" />,
                title: "Cardiology",
                description: "Advanced heart care and cardiovascular treatments.",
              },
              {
                icon: <FaStethoscope className="text-blue-500 text-6xl mb-4 mx-auto" />,
                title: "General Medicine",
                description: "Comprehensive healthcare for all ages and conditions.",
              },
              {
                icon: <FaUserMd className="text-blue-500 text-6xl mb-4 mx-auto" />,
                title: "Specialist Care",
                description: "Access to a wide range of medical specialists.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Doctor Section */}
      <section className="py-16 bg-gray-50">
        <motion.div className="container mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold mb-8">Doctor & Specialist Directory</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Patrick Ekuwam",
                specialty: "Cardiologist",
                imgSrc: "patrick.jpg",
              },
              {
                name: "Dr. Mark Smith",
                specialty: "General Practitioner",
                imgSrc: "docter.jpg",
              },
              {
                name: "Dr. Emily Davis",
                specialty: "Pediatrician",
                imgSrc: "docter.jpg",
              },
            ].map((doctor, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <img src={doctor.imgSrc} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <Link to="/appointment" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
                  Schedule Appointment
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Emergency Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Emergency Information</h2>
          <p className="text-lg mb-4">For emergencies, contact us immediately!</p>
          <p className="text-xl font-bold mb-2">Emergency Phone: 123-456-7890</p>
          <p className="text-lg">Emergency Room Wait Times: <span className="text-red-500">15 minutes</span></p>
        </div>
      </section>

      {/* Health Resources Section */}
      <section className="py-16 bg-gray-50">
        <motion.div className="container mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold mb-8">Health Resources</h2>
          <Link to="/health-resources" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all">
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
          <Slider {...testimonialSliderSettings} className="w-full">
            {[
              {
                quote: "The care and service at this hospital were exceptional. I always felt in safe hands.",
                name: "Jane Doe",
                imgSrc: "docter.jpg",
              },
              {
                quote: "Doctors and nurses were always attentive and made sure I was comfortable.",
                name: "John Smith",
                imgSrc: "docter.jpg",
              },
              {
                quote: "Excellent facilities with top-notch healthcare services.",
                name: "Emily Johnson",
                imgSrc: "docter.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <motion.div variants={fadeInUp}>
                  <img src={testimonial.imgSrc} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-blue-500 font-bold">- {testimonial.name}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Book an Appointment Today!</h2>
        <Link to="/appointment" className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-200 transition-all">
          Schedule Now
        </Link>
      </section>
    </motion.div>
  );
};

export default Home;
