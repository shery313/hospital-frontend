import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../pages/BreadCrumbs";
import apiInstance from "../../utils/axios";
interface BlogPost {
  id: number;
  title: string;
  description: string;
  published_date: string;
  featured_image: string;
  slug:string;
}

const Blogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" },
  ];
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response=await apiInstance.get('blogs')
      
      setBlogPosts(response.data);
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
            <Link onClick={handleScrollToTop} to={`/blogs/${post.slug}`}>
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-fit h-fit object-cover object-center transition duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold hover:text-blue-600 transition duration-200">{post.title}</h2>
                <p className="text-gray-600 mb-2">{`${post.description.slice(0,50)}.....`}</p>
                <p className="text-gray-500 text-sm">{post.published_date}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
