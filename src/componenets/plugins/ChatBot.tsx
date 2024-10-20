import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { MdSend } from 'react-icons/md';

interface Message {
  user: string;
  bot: string | null;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);

  useEffect(() => {
    if (isChatOpen) {
      const greetUserTimeout = setTimeout(() => {
        setMessages((prev) => [...prev, { user: '', bot: "Hi there! How can I assist you today?" }]);
        setGreeted(true);
      }, 50);
      return () => clearTimeout(greetUserTimeout);
    }
  }, [isChatOpen]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { user: input, bot: null }]);
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/chatbot/', { message: input });
      setMessages((prev) => [...prev, { user: input, bot: response.data.bot_message }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    } finally {
      setInput('');
      setLoading(false);
    }
  };

  const toggleChat = () => setIsChatOpen(true);

  return (
    <div className="fixed bottom-5 left-5 z-50 hidden">
      {/* Avatar Component */}
      {!isChatOpen && <Avatar onClick={toggleChat} />}
      {/* Chatbox Component */}
      {isChatOpen && (
        <ChatBox
          messages={messages}
          loading={loading}
          input={input}
          setInput={setInput}
          onSend={handleSendMessage}
          greeted={greeted}
        />
      )}
    </div>
  );
};

const Avatar = ({ onClick }: { onClick: () => void }) => (
  <motion.img
    src="/assistant.jpeg" // Replace with actual DP URL
    alt="Girl Avatar"
    className="w-20 h-20 rounded-full border-4 border-blue-500 cursor-pointer animate-pulse"
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    onClick={onClick}
  />
);

const ChatBox = ({
  messages,
  loading,
  input,
  setInput,
  onSend,
  greeted,
}: {
  messages: Message[];
  loading: boolean;
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  greeted: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white shadow-lg p-5 rounded-lg max-w-xs"
  >
    {greeted && (
      <div className="chatbox mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg.user && <div className="text-right text-blue-500 font-semibold">You: {msg.user}</div>}
            {msg.bot && <div className="text-gray-700">Bot: {msg.bot}</div>}
          </div>
        ))}
        {loading && <div className="text-center text-gray-500">Bot is typing...</div>}
      </div>
    )}
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
        className="border border-gray-300 p-2 flex-1 rounded-lg mb-2"
        placeholder="Type your message"
      />
      <button onClick={onSend} className="bg-blue-500 text-white p-2 rounded-lg">
        <MdSend />
      </button>
    </div>
  </motion.div>
);

export default Chatbot;
