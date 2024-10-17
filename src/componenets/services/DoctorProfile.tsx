import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiInstance from "../utils/axios";

interface DoctorType {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  education: string;
  experience_years: number;
  availability: boolean;
  contact_number: string;
}

const DoctorProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [doctorData, setDoctorData] = useState<DoctorType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`doctors/${slug}`);
        setDoctorData(response.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchData();
  }, [slug]);

  if (!doctorData) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16 shadow-2xl m-5 w-fit rounded-3xl">
      <div className="flex flex-col md:flex-row items-center content-center text-center md:items-start">
        <img
          src={doctorData.image}
          alt={doctorData.name}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">{doctorData.name}</h1>
          <h2 className="text-xl text-gray-600">{doctorData.specialty}</h2>
          <p className="mt-4 text-gray-700">{doctorData.bio}</p>

          <h3 className="mt-6 text-lg font-semibold">Qualifications:</h3>
          <p className="text-gray-600">{doctorData.education}</p>

          <h3 className="mt-6 text-lg font-semibold">Experience:</h3>
          <p className="text-gray-600">{doctorData.experience_years} Years of experience</p>

          <h3
            className={`mt-6 text-lg font-semibold md:p-3 p-2 ml-14 w-fit md:ml-1 text-white rounded-full ${
              doctorData.availability ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {doctorData.availability ? "Available" : "Unavailable"}
          </h3>

          <h3 className="mt-6 text-lg font-semibold">Contact:</h3>
          <p className="text-gray-600">{doctorData.contact_number}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
