import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaSave, FaLock, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  profilePic: string; // URL for profile picture
}

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
    profilePic: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [profilePic, setProfilePic] = useState<string>(""); // Store the image URL
  const navigate = useNavigate();

  // Fetch user data (mocked for this example)
  useEffect(() => {
    const fetchUserProfile = async () => {
      const userData = await getUserData();
      setUserProfile(userData);
      setProfilePic(userData.profilePic); // Initialize profilePic state
    };
    fetchUserProfile();
  }, []);

  const getUserData = async (): Promise<UserProfile> => {
    return {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 890",
      profilePic: "docter.jpg", // Mock image URL
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = async () => {
    // Mock save operation
    console.log("Saving user data:", userProfile);
    setIsEditing(false);
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl); // Set the new profile picture URL
      setUserProfile((prevProfile) => ({ ...prevProfile, profilePic: imageUrl }));
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword) {
      console.log("Password updated:", newPassword);
      setIsPasswordEditing(false);
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg m-5"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Profile</h1>

      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <motion.img
            src={profilePic || "default-profile.jpg"} // Use profilePic state
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-600"
            whileHover={{ scale: 1.1 }}
          />
          <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer">
            <FaCamera className="text-white" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicChange}
            />
          </label>
        </div>
        <h2 className="text-xl mt-4">{userProfile.name}</h2>
      </div>

      {/* Profile Details */}
      <div className="space-y-6">
        {/* Name */}
        <div className="flex items-center">
          <FaUser className="mr-2 text-blue-600" />
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userProfile.name}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          ) : (
            <p className="text-lg">{userProfile.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center">
          <FaEnvelope className="mr-2 text-blue-600" />
          <p className="text-lg">{userProfile.email}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center">
          <FaPhoneAlt className="mr-2 text-blue-600" />
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={userProfile.phone}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          ) : (
            <p className="text-lg">{userProfile.phone}</p>
          )}
        </div>

        {/* Edit Profile Buttons */}
        <div className="flex space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                <FaSave className="mr-2" />
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <FaSave className="mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Password Change */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>
        {isPasswordEditing ? (
          <>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border rounded-md p-2 w-full mb-4"
            />
            <div className="flex space-x-4">
              <button
                onClick={handlePasswordChange}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Update Password
              </button>
              <button
                onClick={() => setIsPasswordEditing(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => setIsPasswordEditing(true)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            <FaLock className="mr-2" />
            Change Password
          </button>
        )}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-8 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </motion.div>
  );
};

export default Profile;
