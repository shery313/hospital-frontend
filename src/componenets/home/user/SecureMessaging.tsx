import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  sender: 'patient' | 'doctor';
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'doctor',
    text: 'Good morning! How can I assist you today?',
    timestamp: '2024-09-24 09:15 AM',
  },
  {
    id: 2,
    sender: 'patient',
    text: 'I would like to discuss my recent test results.',
    timestamp: '2024-09-24 09:17 AM',
  },
];

const SecureMessaging: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: 'patient',
        text: newMessage.trim(),
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Secure Messaging</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
          {/* Chat box */}
          <div className="overflow-y-auto h-64 mb-4 border-b border-gray-300">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex mb-4 ${
                  message.sender === 'patient' ? 'justify-end' : 'justify-start'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`${
                    message.sender === 'patient'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  } rounded-lg px-4 py-2 max-w-sm shadow-md`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs text-gray-500 mt-2 block">
                    {message.timestamp}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Message input */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SecureMessaging;
