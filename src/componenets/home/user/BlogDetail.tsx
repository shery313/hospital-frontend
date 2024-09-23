import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock blog details based on ID
  const blogPost = {
    id: parseInt(id),
    title: "The Importance of Regular Health Check-Ups",
    content: "Detailed content about the importance of regular health check-ups...",
    date: "2024-09-20",
    image: "docter.jpg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8"
    >
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <img src='/docter.jpg' alt={blogPost.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-500 mb-2">{blogPost.date}</p>
      <p>{blogPost.content}</p>
    </motion.div>
  );
};

export default BlogDetail;
