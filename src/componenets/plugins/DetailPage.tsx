import React from "react";
import { useParams } from "react-router-dom";

// Sample data for demonstration
const newsAndEventsData = [
  {
    id: 1,
    title: "Health Awareness Camp",
    description: "Join us for a health awareness camp on October 15. Free check-ups and consultations will be provided.",
    date: "2024-10-01",
    image: "health_camp.jpg",
    type: "Event",
    content: "This camp will feature various health screenings, consultations with doctors, and informative sessions on health topics. All are welcome!",
  },
  {
    id: 2,
    title: "COVID-19 Vaccination Drive",
    description: "We are conducting a vaccination drive on November 10. Register now to secure your spot.",
    date: "2024-09-20",
    image: "vaccination_drive.jpg",
    type: "Event",
    content: "Get vaccinated against COVID-19 at our hospital. The vaccination drive will take place from 9 AM to 5 PM. Make sure to bring your ID.",
  },
  {
    id: 3,
    title: "Annual Fundraising Gala",
    description: "Join us for our annual fundraising gala to support hospital services. Tickets available now!",
    date: "2024-12-05",
    image: "fundraising_gala.jpg",
    type: "Event",
    content: "Enjoy a night of entertainment while supporting a great cause. The gala will feature guest speakers, performances, and an auction.",
  },
  {
    id: 4,
    title: "New Hospital Wing Opening",
    description: "We are excited to announce the opening of our new hospital wing on January 15, 2025.",
    date: "2024-11-01",
    image: "new_hospital_wing.jpg",
    type: "News",
    content: "The new wing will feature state-of-the-art facilities and equipment to enhance our patient care services.",
  },
  {
    id: 5,
    title: "COVID-19 Response Update",
    description: "Our hospital has implemented new protocols to ensure the safety of our patients and staff.",
    date: "2024-09-15",
    image: "covid_response_update.jpg",
    type: "News",
    content: "We have updated our safety protocols based on the latest guidelines to ensure the safety of everyone who visits our hospital.",
  },
];

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsAndEventsData.find((item) => item.id === Number(id));

  if (!article) {
    return <div className="text-center py-10">Article not found!</div>;
  }

  return (
    <div className="py-10 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600">{new Date(article.date).toLocaleDateString()}</p>
      <img src={article.image} alt={article.title} className="w-full h-60 object-cover my-4 rounded-lg" />
      <p className="text-lg mb-4">{article.description}</p>
      <div className="text-gray-700">{article.content}</div>
      <a href="/news-and-events" className="text-blue-600 hover:underline mt-4 block">Back to News and Events</a>
    </div>
  );
};

export default DetailPage;
