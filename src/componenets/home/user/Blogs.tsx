import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../pages/BreadCrumbs";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const Blogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" },
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const posts: BlogPost[] = [
        {
          id: 1,
          title: "The Importance of Regular Health Check-Ups",
          excerpt: "Discover why regular health check-ups are crucial for maintaining good health...",
          date: "2024-09-20",
          image: "healthcare.avif",
        },
        {
          id: 2,
          title: "Healthy Eating: A Guide to Nutrition",
          excerpt: "Learn how to maintain a balanced diet and the importance of nutrition in our lives...",
          date: "2024-09-15",
          image: "healthcare.avif",
        },
        {
          id: 3,
          title: "Managing Stress: Tips and Techniques",
          excerpt: "Explore effective ways to manage stress and improve your mental health...",
          date: "2024-09-10",
          image: "healthcare.avif",
        },
        {
          id: 4,
          title: "Understanding Your Medical Tests",
          excerpt: "Get insights into common medical tests and their significance...",
          date: "2024-09-05",
          image: "healthcare.avif",
        },
      ];
      setBlogPosts(posts);
    };
    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8"
    >
        <Breadcrumbs items={breadcrumbItems}/>
      <h1 className="text-3xl font-bold text-center mb-8">Health Care Blogs</h1>

      {/* Search Bar */}
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-600 rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white rounded-r-md px-4 flex items-center hover:bg-blue-700 transition duration-200">
          <FaSearch />
        </button>
      </div>

      {/* Blog List */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="border rounded-md shadow-lg overflow-hidden transition-transform duration-300"
          >
            <Link to={`/blogs/${post.id}`}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover object-center transition duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold hover:text-blue-600 transition duration-200">{post.title}</h2>
                <p className="text-gray-600 mb-2">{post.excerpt}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
