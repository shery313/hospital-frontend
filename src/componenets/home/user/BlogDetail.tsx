import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../pages/BreadCrumbs";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const breadcrumbItems = [
    { label: "Blogs", path: "/blogs" },
    { label: "Blog Detail", path: "/blog-detial" },
  ];

  // If id is undefined, return a fallback or redirect
  if (!id) {
    return <div>Blog post not found</div>; // Or you can redirect to a different page
  }

  // Mock blog details based on ID
  const blogPost = {
    id: parseInt(id),
    title: "The Importance of Regular Health Check-Ups",
    content: "Regular health check-ups are crucial for maintaining optimal physical and mental well-being. By scheduling annual or bi-annual visits with your healthcare provider, you can prevent health issues, detect hidden problems, and improve overall health outcomes. These routine check-ups enable your doctor to identify risk factors for chronic diseases, monitor existing conditions, and adjust treatment plans accordingly. Moreover, regular health check-ups encourage healthy habits, reduce healthcare costs, and boost quality of life. By investing in preventive care, you can avoid costly medical procedures, minimize lost productivity, and ensure a healthier, happier life. So, prioritize your well-being and schedule your next health check-up today!",
    date: "2024-09-20",
    image: "/docter.jpg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8"
    >
        <Breadcrumbs items={breadcrumbItems}/>
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <img src={blogPost.image} alt={blogPost.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-500 mb-2">{blogPost.date}</p>
      <p>{blogPost.content}</p>
    </motion.div>
  );
};

export default BlogDetail;
