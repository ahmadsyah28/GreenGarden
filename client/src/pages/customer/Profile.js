import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
      {/* Profile Image */}
      <FaUserCircle className="text-gray-500 w-24 h-24 mb-4" />
      
      {/* Profile Info */}
      <h1 className="text-3xl font-bold">Ahmad Syah Ramadhan</h1>
      <p className="text-lg text-gray-600">ahmadsyahrmdn@gmail.com</p>
      
      {/* Edit Profile Button */}
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        Edit Profil
      </button>
    </div>
  );
};

export default Profile;
