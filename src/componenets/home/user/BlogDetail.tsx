import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../pages/BreadCrumbs";
import apiInstance from "../../utils/axios";

interface BlogObject {
  id: number;
  title: string;
  published_date: string;
  featured_image: string;
  description: string;
}

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);

  const breadcrumbItems = [
    { label: "Blogs", path: "/blogs" },
    { label: "Blog Detail", path: `/blogs/${slug}` },
  ];

  // Initialize blogPost with null to indicate it hasn't been loaded yet
  const [blogPost, setBlogPost] = useState<BlogObject | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiInstance.get(`blogs/${slug}`);
      setBlogPost(response.data);
    };
    fetchData();
  }, [slug]);

  // Check if blogPost is loaded
  if (!blogPost) {
    return <div>Loading...</div>; // Fallback when blogPost data is not yet available
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8"
    >
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
      <img
        src={blogPost.featured_image}
        alt={blogPost.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-gray-500 mb-2">{blogPost.published_date}</p>
      <p>{blogPost.description}</p>
    </motion.div>
  );
};

export default BlogDetail;
