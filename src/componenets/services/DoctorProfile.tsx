import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DoctorProfile: React.FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>();

  // Mock doctor data based on the doctorId
  const doctorData = {
    "patrick-ekuwam": {
      name: "Dr. Patrick Ekuwam",
      specialty: "Cardiologist",
      imgSrc: "/patrick.jpg",
      bio: "Dr. Patrick Ekuwam is a highly experienced cardiologist specializing in heart diseases and treatments.",
      qualifications: "MBBS, MD (Cardiology)",
      experience: "15+ years of experience",
      availability: ["Monday", "Wednesday", "Friday"],
      contact: "123-456-7890",
      ratings: 4.8,
      reviews: [
        { patient: "John Doe", review: "Great experience, highly professional." },
        { patient: "Jane Smith", review: "Very knowledgeable and kind." },
      ],
    },
    "mark-smith": {
      name: "Dr. Mark Smith",
      specialty: "General Practitioner",
      imgSrc: "/docter.jpg",
      bio: "Dr. Mark Smith has extensive experience in family medicine and general health care.",
      qualifications: "MBBS",
      experience: "10+ years of experience",
      availability: ["Tuesday", "Thursday", "Saturday"],
      contact: "123-456-7890",
      ratings: 4.2,
      reviews: [{ patient: "Paul Jones", review: "Helpful and patient." }],
    },
    "emily-davis": {
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      imgSrc: "/docter.jpg",
      bio: "Dr. Emily Davis specializes in providing care for children from infancy to young adulthood.",
      qualifications: "MBBS, MD (Pediatrics)",
      experience: "12+ years of experience",
      availability: ["Monday", "Thursday"],
      contact: "123-456-7890",
      ratings: 4.6,
      reviews: [{ patient: "Sarah Green", review: "Fantastic with children." }],
    },
  };

  const doctor = doctorData[doctorId as keyof typeof doctorData];

  const [rating, setRating] = useState(doctor.ratings);
  const [newReview, setNewReview] = useState("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview) {
      doctor.reviews.push({ patient: "Anonymous", review: newReview });
      setNewReview("");
      setRating(0);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <img src={doctor.imgSrc} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4 md:mb-80  md:mr-6" />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <h2 className="text-xl text-gray-600">{doctor.specialty}</h2>
          <p className="mt-4 text-gray-700">{doctor.bio}</p>
          <h3 className="mt-4 text-lg font-semibold">Qualifications:</h3>
          <p className="text-gray-600">{doctor.qualifications}</p>
          <h3 className="mt-4 text-lg font-semibold">Experience:</h3>
          <p className="text-gray-600">{doctor.experience}</p>
          <h3 className="mt-6 text-lg font-semibold">Availability:</h3>
          <ul className="list-disc list-inside  mt-2 ">
            {doctor.availability.map((day, index) => (
              <li key={index} className="text-gray-600 ">{day}</li>
            ))}
          </ul>
          <h3 className="mt-6 text-lg font-semibold">Contact:</h3>
          <p className="text-gray-600">{doctor.contact}</p>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Inquire About an Appointment</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows={4} required />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Patient Reviews & Ratings</h2>
        <p className="text-xl">Rating: {rating} / 5</p>
        <ul className="mt-4">
          {doctor.reviews.map((review, index) => (
            <li key={index} className="text-gray-600 mb-2">
              <strong>{review.patient}:</strong> {review.review}
            </li>
          ))}
        </ul>

        {/* Add Review */}
        <form className="mt-6" onSubmit={handleReviewSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
              Add Your Review
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review here"
              rows={3}
              required
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorProfile;
