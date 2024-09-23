import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChat: React.FC = () => {
  const phoneNumber = '+923075304856'; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 h-20 w-20">
      <button onClick={handleClick} className="bg-green-500  font-bold h-full w-full text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" /> Chat
      </button>
    </div>
  );
};

export default WhatsAppChat;
