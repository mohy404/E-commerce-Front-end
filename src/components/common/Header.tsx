import React from 'react';

const Header = () => {
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

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          <a
            href="/"
            className="text-gray-800 hover:text-indigo-600 transition duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="/category"
            className="text-gray-800 hover:text-indigo-600 transition duration-300 font-medium"
          >
            Category
          </a>
          <a
            href="/about"
            className="text-gray-800 hover:text-indigo-600 transition duration-300 font-medium"
          >
            About
          </a>
          <a
            href="/contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 font-medium"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;