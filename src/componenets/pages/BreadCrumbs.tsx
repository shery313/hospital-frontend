import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"; // Import icons as needed

const iconMapping: Record<string, React.ReactNode> = {
  home: <FaHome />,
  about: <FaInfoCircle />,
  contact: <FaEnvelope />,
};

const Breadcrumbs: React.FC<{ items: { label: string; path: string }[] }> = ({ items }) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <nav className="mb-4">
      <ul className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-center">
            {iconMapping[item.label.toLowerCase()] && (
              <span className="mr-1">{iconMapping[item.label.toLowerCase()]}</span>
            )}
            <Link onClick={handleScrollToTop} to={item.path} className="hover:text-blue-500 transition-colors">
              {item.label}
            </Link>
            {index < items.length - 1 && <span className="mx-1"> &gt; </span>} {/* Separator */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
