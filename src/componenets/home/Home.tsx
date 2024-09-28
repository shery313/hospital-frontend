import React from "react";
import {  FaAmbulance, FaHeartbeat, FaStethoscope, FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import PartnerSection from "../pages/PartnerSection";

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


// Custom arrow components
const CustomNextArrow = (props: any) => (
  <div {...props} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
    <button className="bg-blue-500 text-white p-2 font-bold rounded-full hover:bg-blue-600 transition-all">
      <MdArrowForward/>
    </button>
  </div>
);
const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
const CustomPrevArrow = (props: any) => (
  <div {...props} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
    <button className="bg-blue-500 text-white font-bold  p-2 rounded-full hover:bg-blue-600 transition-all">
      <MdArrowBack/>
    </button>
  </div>
);

const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  
  const doctorSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
const Home: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      {/* Hero Section with Foreground Images */}
      <section className="relative overflow-hidden">
        <Slider {...imageSliderSettings} className="w-full">
          {[ 
            { imgSrc: "hospital.jpg", alt: "Hospital Front View" }, 
            { imgSrc: "collage1.jpg", alt: "Hospital Front View" }, 
            { imgSrc: "collage2.jpg", alt: "Hospital Front View" }, 
            { imgSrc: "hospital20.jpg", alt: "ICU Facilities" }, 
            { imgSrc: "hospital4.jpg", alt: "Modern Operation Theater" }, 
            { imgSrc: "hospital12.jpg", alt: "Nurses" }, 
            { imgSrc: "hospital11.jpg", alt: "Nurses" },  
            { imgSrc: "hospital9.jpg", alt: "Nurses" },  
            { imgSrc: "hospital14.jpg", alt: "Nurses" },  
          ].map((image, index) => (
            <motion.div key={index} className="relative flex justify-center items-center">
              {/* Image as Foreground */}
              <img src={image.imgSrc} alt={image.alt} className="object-cover w-full h-auto" />
            </motion.div>
          ))}
        </Slider>
      </section>

      {/* Hospital Information Section */}
      <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Catholic Diocese of Maralal Wamba Hospital</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Welcome to the Catholic Diocese of Maralal Wamba Hospital, where we provide top-quality healthcare services
            to our community with state-of-the-art medical equipment and expert doctors.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <motion.div className="container mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>Our Services</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                icon: <FaHeartbeat className="text-blue-500 text-6xl mb-4 mx-auto" />,
                title: "Cardiology",
                description: "Advanced heart care and cardiovascular treatments.",
                link: "/services/cardiology",
              }, 
              {
                icon: <FaStethoscope className="text-blue-500 text-6xl mb-4 mx-auto" />,
                title: "General Medicine",
                description: "Comprehensive healthcare for all ages and conditions.",
                link: "/services/general-medicine",
              }, 
              {
                icon: <FaUserMd className="text-blue-500 text-6xl mb-4 mx-auto" />,
                title: "Specialist Care",
                description: "Access to a wide range of medical specialists.",
                link: "/services/specialist-care",
              }, 
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <Link to={service.link} onClick={handleScrollToTop} className="flex flex-col items-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Doctor Section */}
      <section className="py-16 bg-gray-50">
        <motion.div className="container mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeInUp}>Doctor & Specialist Directory</motion.h2>
          <Slider {...doctorSliderSettings} className="w-full">
            {[ 
              {
                name: "Dr. Patrick Ekuwam",
                specialty: "Cardiologist",
                imgSrc: "patrick.jpg",
                profileLink: "/doctors/patrick-ekuwam",
              }, 
              {
                name: "Dr. Millicent Atieno",
                specialty: "Surgeon",
                imgSrc: "docter.jpg",
                profileLink: "/doctors/millicent-atieno",
              }, 
              {
                name: "Dr. Stephen Ekai",
                specialty: "Dentist",
                imgSrc: "docter2.jpg",
                profileLink: "/doctors/stephen-Ekai",
              }, 
              {
                name: "Dr. Mark Lusaine Lesintiyo",
                specialty: "Dentist",
                imgSrc: "docter4.jpg",
                profileLink: "/doctors/mark-lusaine",
              }, 
              {
                name: "Dr. Josephine Akai",
                specialty: "Dentist",
                imgSrc: "docter4.jpg",
                profileLink: "/doctors/mark-lusaine",
              }, 
            ].map((doctor, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <Link to={doctor.profileLink} onClick={handleScrollToTop} className="flex flex-col items-center">
                  <img src={doctor.imgSrc} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <span className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
                    View Profile
                  </span>
                </Link>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </section>

      {/* Emergency Information Section */}
      <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-8">Emergency Information</h2>
    <p className="text-lg mb-4">For emergencies, contact us immediately!</p>
    <p className="text-xl font-bold mb-2">
      <FaAmbulance className="inline text-red-500 h-10 w-10 mr-2" />Emergency Phone: 123-456-7890
    </p>
    <p className="text-lg mb-4">
      Emergency Room Wait Times: <span className="text-red-500">15 minutes</span>
    </p>
    
    {/* Ambulance Image */}
    <div className="mt-8">
      <img
        src="cruiser.jpg" 
        alt="Ambulance" 
        className="mx-auto h-48 w-auto object-cover rounded-md shadow-md"
      />
    </div>
  </div>
</motion.section>


      {/* Health Resources Section */}
      <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Health Resources</h2>
          <Link onClick={handleScrollToTop} to="/health-resources" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
            Explore Our Health Resources
          </Link>
        </div>
      </motion.section>
      <motion.section className="py-16 bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Patients Say</h2>
          <Slider {...imageSliderSettings} className="w-full">
            {[
              {
                quote: "The care and service at this hospital are exceptional.",
                name: "John Doe",
                imgSrc: "patient2.jpeg",
              },
              {
                quote: "I felt so much better after my surgery, thanks to the great staff here.",
                name: "Jane Smith",
                imgSrc: "patient1.jpeg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <img src={testimonial.imgSrc} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4 md:mt-0 mt-10" />
                <p className="text-xl italic mb-4 ">"{testimonial.quote}"</p>
                <p className="text-lg font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </motion.section>
      <PartnerSection/>
    </motion.div>
  );
};

export default Home;
