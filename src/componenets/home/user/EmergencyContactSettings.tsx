import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EmergencyContact {
  id: number;
  name: string;
  relationship: string;
  phone: string;
  preferredContact: boolean;
}

const initialContacts: EmergencyContact[] = [
  { id: 1, name: 'Jane Doe', relationship: 'Spouse', phone: '123-456-7890', preferredContact: true },
  { id: 2, name: 'Mark Smith', relationship: 'Parent', phone: '098-765-4321', preferredContact: false },
];

const EmergencyContactSettings: React.FC = () => {
  const [contacts, setContacts] = useState<EmergencyContact[]>(initialContacts);
  const [newContact, setNewContact] = useState<EmergencyContact>({
    id: contacts.length + 1,
    name: '',
    relationship: '',
    phone: '',
    preferredContact: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setNewContact({
      ...newContact,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setContacts([...contacts, newContact]);
      setNewContact({
        id: contacts.length + 2,
        name: '',
        relationship: '',
        phone: '',
        preferredContact: false,
      });
    }
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Emergency Contact Settings</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Manage Emergency Contacts</h3>
          {/* List existing contacts */}
          {contacts.map(contact => (
            <motion.div
              key={contact.id}
              className="mb-4 p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.relationship}</p>
                  <p>{contact.phone}</p>
                  {contact.preferredContact && (
                    <p className="text-green-500 text-sm mt-2">Preferred Contact</p>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteContact(contact.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}

          {/* Add new contact */}
          <h3 className="text-xl font-semibold mt-6 mb-4">Add New Contact</h3>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={newContact.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Relationship</label>
            <input
              type="text"
              name="relationship"
              value={newContact.relationship}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={newContact.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="preferredContact"
                checked={newContact.preferredContact}
                onChange={handleInputChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Set as preferred contact</span>
            </label>
          </div>

          {/* Add Contact Button */}
          <button
            onClick={handleAddContact}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg w-full transition-all duration-300"
          >
            Add Contact
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default EmergencyContactSettings;
