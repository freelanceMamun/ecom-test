'use client';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Newest');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-32  flex justify-center  bg-transparent rounded-lg items-center border-[#7E53D4] px-4 py-2 text-black font-semibold text-[16px] bg-white border focus:outline-none "
      >
        {selectedOption}
        <span className="ml-2 text-gray-500">
          <BsChevronDown></BsChevronDown>
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 text-gray-700 hover:bg-[#7E53D4] hover:text-[#fff] cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
