import React, { useState } from "react";
import { motion } from "framer-motion";

const healthResources = [
  {
    title: "Understanding Your Health Insurance",
    description: "Learn the basics of health insurance, including terms and coverage.",
    link: "https://www.healthcare.gov/learn-about-health-insurance/",
    category: "Insurance",
  },
  {
    title: "Nutrition and Healthy Eating",
    description: "Explore tips for maintaining a healthy diet and lifestyle.",
    link: "https://www.choosemyplate.gov/",
    category: "Nutrition",
  },
  {
    title: "Mental Health Awareness",
    description: "Resources to help you understand and manage mental health.",
    link: "https://www.nami.org/",
    category: "Mental Health",
  },
  {
    title: "Exercise Guidelines",
    description: "Find recommendations for physical activity to stay healthy.",
    link: "https://www.cdc.gov/physicalactivity/basics/adults/index.htm",
    category: "Fitness",
  },
  // Add more resources as needed
];

const categories = ["All", "Insurance", "Nutrition", "Mental Health", "Fitness"];

const HealthResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = healthResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className="container mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Health Resources</h2>

      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search Resources..."
          className="border rounded px-4 py-2 w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8 text-center">
        {categories.map(category => (
          <button
            key={category}
            className={`mx-2 px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition-all`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resources List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HealthResources;
