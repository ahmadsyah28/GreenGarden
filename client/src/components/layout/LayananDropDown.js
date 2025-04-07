import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LayananDropdown = ({ onItemClick }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setIsOpen(false);
    navigate(path); 
  };

  return (
    <div className="relative inline-block">
      <button 
        onClick={toggleDropdown} 
        className="flex items-center px-3 py-2 text-gray-700 hover:text-primary"
      >
        Layanan
        <FaChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-48 bg-white rounded-md shadow-lg mt-2">
          <div className="py-1">
            <button 
              onClick={() => handleItemClick('/layanan-tanaman')} 
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Tanaman Hias
            </button>
            <button 
              onClick={() => handleItemClick('/layanan-desain')} 
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Desain Taman
            </button>
            <button 
              onClick={() => handleItemClick('/layanan-perawatan')} 
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Perawatan Taman
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayananDropdown;