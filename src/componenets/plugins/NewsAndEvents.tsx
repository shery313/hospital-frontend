import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import apiInstance from "../utils/axios";
import { Link } from "react-router-dom";

// Sample news and events data
// const newsAndEventsData = [
  
// Sample related articles data


interface NewsData {
  id:number,
  title:string,
  image:string,
  event_date:string,
  description:string,
  category:string,
  slug:string,

}

const NewsAndEvents: React.FC = () => {
  const [newsAndEventsData,setNewsAndEventData]=useState<NewsData[]>([]);
  const [filter, setFilter] = useState("All");
  const sortedData = [...newsAndEventsData].sort((a, b) => new Date(b.event_date).getTime() - new Date(a.event_date).getTime());

  const filteredData = filter === "All" ? sortedData : sortedData.filter(item => item.category === filter);
  useEffect(()=>{
    const fetchData= async ()=>{
      const response=await apiInstance.get('news-events');
      setNewsAndEventData(response.data)
    }
    fetchData();
  })

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto gap-8">
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
            <option value="Announcement">Announcement</option>
          </select>
        </div>

        <div className="space-y-6">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              { item?.image&&
              <img src={item?.image} alt={item.title} className="w-full h-40 object-cover" />}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{new Date(item.event_date).toLocaleDateString()}</p>
                <p className="mt-2">{item.description}</p>
                <p className={` p-2 text-sm  w-fit text-white my-2 ${item.category==='News'? 'bg-red-500':'bg-green-500'}`}>{item.category}</p>
                <Link to={`/news-and-events/${item.slug}`} className="text-blue-500 hover:underline mt-4 block">Read more</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Related Articles Section */}
      {/* <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-bold mb-4">Related Articles</h3>
        <ul className="space-y-2">
          {relatedArticles.map((article) => (
            <li key={article.id} className="hover:underline">
              <a href={article.link} className="text-blue-600">{article.title}</a>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default NewsAndEvents;
