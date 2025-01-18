import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a
            href="/"
            className="flex items-center hover:text-gray-600 transition duration-300"
          >
            <span className="text-indigo-600">Elegant</span>
            <span className="text-gray-800">Store</span>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 absolute md:static bg-white w-full md:w-auto left-0 px-6 pb-4 md:pb-0`}
        >
          <a
            href="/"
            className="block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0"
          >
            Home
          </a>
          <a
            href="/category"
            className="block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0"
          >
            Categories
          </a>
          <a
            href="/about"
            className="block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0"
          >
            About
          </a>
          <a
            href="/login"
            className="block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0"
          >
            Login
          </a>
          <a
            href="/register"
            className="block md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 font-medium mt-2 md:mt-0"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;