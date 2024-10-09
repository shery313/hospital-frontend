import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample news and events data
const newsAndEventsData = [
  {
    id: 1,
    title: "Health Awareness Camp",
    description: "Join us for a health awareness camp on October 15. Free check-ups and consultations will be provided.",
    date: "2024-10-01",
    image: "hospital4.jpg",
    type: "Event", // Event or News
    link: "/events/health-awareness-camp",
  },
  {
    id: 2,
    title: "COVID-19 Vaccination Drive",
    description: "We are conducting a vaccination drive on November 10. Register now to secure your spot.",
    date: "2024-09-20",
    image: "hospital3.jpg",
    type: "Event",
    link: "/events/vaccination-drive",
  },
  {
    id: 3,
    title: "Annual Fundraising Gala",
    description: "Join us for our annual fundraising gala to support hospital services. Tickets available now!",
    date: "2024-12-05",
    image: "/hospital2.jpg",
    type: "Event",
    link: "/events/fundraising-gala",
  },
  {
    id: 4,
    title: "New Hospital Wing Opening",
    description: "We are excited to announce the opening of our new hospital wing on January 15, 2025.",
    date: "2024-11-01",
    image: "/hospital1.jpg",
    type: "News",
    link: "/news/new-hospital-wing-opening",
  },
  {
    id: 5,
    title: "COVID-19 Response Update",
    description: "Our hospital has implemented new protocols to ensure the safety of our patients and staff.",
    date: "2024-09-15",
    image: "hospital6.jpg",
    type: "News",
    link: "/news/covid-response-update",
  },
];

// Sample related articles data
const relatedArticles = [
  { id: 1, title: "Community Health Initiatives", link: "/articles/community-health" },
  { id: 2, title: "Understanding COVID-19 Vaccines", link: "/articles/covid-vaccines" },
  { id: 3, title: "Hospital Expansion Plans", link: "/articles/hospital-expansion" },
  { id: 4, title: "Importance of Regular Health Check-ups", link: "/articles/health-checkups" },
  { id: 5, title: "Mental Health Awareness", link: "/articles/mental-health" },
];

const NewsAndEvents: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const sortedData = [...newsAndEventsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredData = filter === "All" ? sortedData : sortedData.filter(item => item.type === filter);

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold text-center mb-6">News and Events</h2>

        <div className="flex justify-center mb-6">
          <select 
            className="border border-gray-300 rounded p-2"
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Event">Events</option>
            <option value="News">News</option>
          </select>
        </div>

        <div className="space-y-6">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
                <p className="mt-2">{item.description}</p>
                <a href={item.link} className="text-blue-500 hover:underline mt-4 block">Read more</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-bold mb-4">Related Articles</h3>
        <ul className="space-y-2">
          {relatedArticles.map((article) => (
            <li key={article.id} className="hover:underline">
              <a href={article.link} className="text-blue-600">{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsAndEvents;
