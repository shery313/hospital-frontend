import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "./BreadCrumbs";
import apiInstance from "../utils/axios";
import { useNavigate } from "react-router";
interface DoctersData {
  id:number;
  name:string;
  image:string;
  specialty:string;
  experience_years:number;
  availability:boolean;
  slug:string;


}

// const doctors = [
//   {
//     name: "Dr. Millicent Atieno ",
//     specialty: "Surgeon",
//     experience: "10 years",
//     image: "docter1.jpg", // Replace with actual image path
//     bio: "Dr. Millicent Atieno is a renowned surgeon with a decade of experience treating surgical conditions...",
//     education: "Harvard Medical School",
//     availability: true,
//     rating: 4.8,
//   },
//   {
//     name: "Dr.  Stephen Ekai",
//     specialty: "Dentist",
//     experience: "8 years",
//     image: "docter2.jpg", // Replace with actual image path
//     bio: "Dr. John Doe specializes in dentist and has successfully treated numerous  patients...",
//     education: "Stanford University School of Medicine",
//     availability: false,
//     rating: 4.5,
//   },
//   {
//     name: "Dr. Millicent Atieno",
//     specialty: "Pediatrician",
//     experience: "5 years",
//     image: "docter3.jpg", // Replace with actual image path
//     bio: "Dr. Emily Johnson has been dedicated to providing care to children of all ages...",
//     education: "Johns Hopkins University",
//     availability: true,
//     rating: 4.9,
//   },
//   {
//     name: "Dr. Josephine Akai",
//     specialty: "Orthopedic Surgeon",
//     experience: "12 years",
//     image: "docter4.jpg", // Replace with actual image path
//     bio: "Dr. Michael Brown is an expert orthopedic surgeon with over a decade of experience in surgical procedures...",
//     education: "Mayo Clinic School of Medicine",
//     availability: true,
//     rating: 4.7,
//   },
// ];

const Doctors: React.FC = () => {
  // const [selectedDoctor, setSelectedDoctor] = useState<null | typeof doctors[0]>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [doctors,setDoctors]=useState<DoctersData[]>([])
  const navigate=useNavigate();
  // const openModal = (doctor: typeof doctors[0]) => {
  //   setSelectedDoctor(doctor);
  // };
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Doctors", path: "/doctors" },
  ];

  // const closeModal = () => {
  //   setSelectedDoctor(null);
  // };

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterSpecialty || doctor.specialty === filterSpecialty)
    );
  });
  useEffect(()=>{
    const fetchData= async ()=>{
      const response=await apiInstance.get('doctors')
      setDoctors(response.data)
    }
    fetchData();
  })

  return (
    <div className="p-6 bg-white">
      <Breadcrumbs items={breadcrumbItems}/>
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Doctors
      </motion.h1>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search doctor by name..."
          className="border rounded-md p-2 w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border rounded-md p-2 w-full md:w-1/3"
          value={filterSpecialty}
          onChange={(e) => setFilterSpecialty(e.target.value)}
        >
          <option value="">Filter by specialty</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Oncologist">Oncologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
          <option value="Neurology">Neurology</option>
        </select>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor, index) => (
          <motion.div
            key={index}
            className="bg-blue-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={()=>(navigate(`/doctors/${doctor.slug}`))}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{doctor.name}</h2>
            <p className="text-gray-700">{doctor.specialty}</p>
            <p className="text-gray-500">{doctor.experience_years} Year of experience</p>
            <p className={`mt-2 ${doctor.availability ? "text-green-600" : "text-red-600"}`}>
              {doctor.availability ? "Available" : "Not Available"}
            </p>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
