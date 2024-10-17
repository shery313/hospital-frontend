import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import apiInstance from "../utils/axios";
// import { Link } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";

interface NewsEventDetail {
  id: number,
  title: string,
  image: string,
  event_date: string,
  description: string,
  category: string,
}

const NewsAndEventsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsEventDetail, setNewsEventDetail] = useState<NewsEventDetail|null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiInstance.get(`news-events/${slug}`);
      setNewsEventDetail(response.data);
    };

    fetchData();
  }, [slug]);

  if (!newsEventDetail) {
    return <div className="content-center items-center text-center">Loading</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8"
    >
      {/* <Link to="/news-events" className="text-blue-500 hover:underline mb-4 block">
        Back to News and Events
      </Link> */}
      <h1 className="text-3xl font-bold mb-4">{newsEventDetail?.title}</h1>
      {newsEventDetail?.image && (
        <img
          src={newsEventDetail?.image}
          alt={newsEventDetail?.title}
          className="w-fit h-fit object-cover mb-4"
        />
      )}
      <p className="text-gray-500 mb-2">{new Date(newsEventDetail?.event_date).toLocaleDateString()}</p>
      <p>{newsEventDetail?.description}</p>
      <p className={`mt-4 p-2 text-sm w-fit text-white ${newsEventDetail?.category === "News" ? "bg-red-500" : "bg-green-500"}`}>
        {newsEventDetail?.category}
      </p>
    </motion.div>
  );
};

export default NewsAndEventsDetail;
