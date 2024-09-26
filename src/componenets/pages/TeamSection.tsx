import React from "react";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Slider from "react-slick";

// Sample team members array
const teamMembers = [
  { id: 1, name: "Dr Mark Lusaine Lesintiyo", position: "CEO", image: "docter1.jpg" },
  { id: 2, name: "Dr Stephen Ekai - Dentist", position: "CTO", image: "docter2.jpg" },
  { id: 3, name: "Dr Millicent Atieno, Surgeon", position: "Designer", image: "docter3.jpg" },
  { id: 4, name: "Dr Josephine Akai", position: "Developer", image: "docter4.jpg" },
  { id: 5, name: "Charlie Green", position: "Marketing", image: "docter.jpg" },
];

const TeamSection: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    // nextArrow: <MdArrowForward />,
    // prevArrow: ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:true,
        //   nextArrow: true,
        //   prevArrow: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          autoplay:true,
          autoplayspeed:2000,
        //   nextArrow: true,
        //   prevArrow: true,
        },
      },
    ],
  };

  return (
    <div className="py-10 pr-9">
      <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="p-4">
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full h-40 w-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom next arrow


// Custom previous arrow


export default TeamSection;
