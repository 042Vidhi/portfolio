import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [activeOption, setActiveOption] = useState('Home');
  const navigate = useNavigate();

  const toggleOption = () => {
    const newOption = activeOption === 'Home' ? 'Projects' : 'Home';
    setActiveOption(newOption);
    navigate(newOption === 'Home' ? '/' : '/projects');
  };

  return (
    <nav className="flex justify-around items-center w-full p-8 mx-auto bg-black ">
      <h1 className="text-white md:text-3xl font-medium">
        <Link to="/" className="md:text-2xl font-bold font-grotesk">VJ</Link>
      </h1>
      <div className="relative flex items-center bg-gray-800  rounded-full cursor-pointer border-2 border-gray-700">
        <div
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeOption === 'Home' ? 'text-white' : 'text-gray-400'
          }`}
          onClick={toggleOption}
        >
          Home
        </div>
        <div
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeOption === 'Projects' ? 'text-white' : 'text-gray-400'
          }`}
          onClick={toggleOption}
        >
          Projects
        </div>
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-blue-500 opacity-40 rounded-full transition-transform duration-300 transform ${
            activeOption === 'Home' ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
