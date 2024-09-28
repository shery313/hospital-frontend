import React from "react";
import Slider from "react-slick";

// Sample partner logos array
const partnerLogos = [
  { id: 1, src: "logo1.jpg", alt: "Partner 1" },
  // { id: 2, src: "logo2.jpg", alt: "Partner 2" },
  { id: 3, src: "logo3.jpg", alt: "Partner 3" },
  { id: 4, src: "logo6.jpg", alt: "Partner 4" },
  { id: 5, src: "logo5.jpg", alt: "Partner 5" },
];

const PartnerSection: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
         autoplaySpeed: 1000,
        pauseOnHover: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
         pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="py-20 pr-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Partners</h2>
      <Slider {...settings}>
        {partnerLogos.map((logo) => (
          <div key={logo.id} className="flex justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 mx-auto object-contain" // Adjust height as needed
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSection;
