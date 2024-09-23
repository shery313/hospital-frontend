import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChat: React.FC = () => {
  const phoneNumber = '+923075304856'; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={handleClick} className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </button>
    </div>
  );
};

export default WhatsAppChat;
