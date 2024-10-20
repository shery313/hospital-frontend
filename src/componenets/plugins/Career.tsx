import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Example job data
const jobs = [
  { id: 1, title: 'Nurse', department: 'Healthcare', location: 'New York', description: 'Provide care to patients in various departments.' },
  { id: 2, title: 'Surgeon', department: 'Surgery', location: 'California', description: 'Perform surgeries and oversee patient recovery.' },
  { id: 3, title: 'Medical Assistant', department: 'Outpatient', location: 'Texas', description: 'Assist doctors with outpatient procedures.' },
  { id: 4, title: 'Pharmacist', department: 'Pharmacy', location: 'New York', description: 'Dispense medication and provide healthcare advice.' },
];

// Define an interface for the applicant state
interface Applicant {
  name: string;
  email: string;
  phone: string;
  resume: File | null;  // Allow `null` if no file is uploaded
  message: string;
}

function Career() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null); // Specify job or null
  const [applicant, setApplicant] = useState<Applicant>({
    name: '',
    email: '',
    phone: '',
    resume: null,
    message: ''
  });

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicant((prevApplicant) => ({
      ...prevApplicant,
      [name]: value
    }));
  };

  // Handle resume upload
  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicant((prevApplicant) => ({
        ...prevApplicant,
        // resume: e.target.files[0] // Set the first uploaded file
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicant);

    alert('Your application has been submitted!');
    setApplicant({ name: '', email: '', phone: '', resume: null, message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="p-8"
    >
      {/* Job Listing Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-500">Join Our Team</h1>
        <p className="text-lg mb-8">Explore career opportunities at our hospital. Apply to join us in making a difference in healthcare!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedJob(job)}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-2">{job.title}</h2>
              <p className="text-md font-medium mb-2">{job.department} | {job.location}</p>
              <p>{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Job Application Form */}
      {selectedJob && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="border-t pt-8 mt-8"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-500">Apply for {selectedJob.title}</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={applicant.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={applicant.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={applicant.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleResumeUpload}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={applicant.message}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
                rows={4}
                placeholder="Tell us why you'd be a great fit for this role."
              />
            </div>

            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit Application
            </button>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Career;
