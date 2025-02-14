import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/aait.jpg"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="AAiT Logo"
                className="h-10 w-40"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-16">
            <Link to="/" className="text-gray-700 hover:text-blue-600 text-xl">
              Home
            </Link>
            <Link to="/advisor/students" className="text-gray-700 hover:text-blue-600 text-xl">
              Students
            </Link>
            <Link to="/advisor/meeting" className="text-gray-700 hover:text-blue-600 text-xl">
              Meeting
            </Link>
            <Link to="/advisor/document" className="text-gray-700 hover:text-blue-600 text-xl">
              Document
            </Link>
            
          </div>

          {/* Right Side: Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <img
              src="src/assets/images/placeholder.jpg"
              alt="Profile"
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
