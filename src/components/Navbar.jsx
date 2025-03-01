import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/aait.jpg";
import PlaceholderImage from "../assets/images/placeholder.jpg"; // Ensure the path is correct

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/milestones" className="text-gray-700 hover:text-blue-600">
              Milestones
            </Link>
            <Link to="/meeting" className="text-gray-700 hover:text-blue-600">
              Meeting
            </Link>
            <Link to="/issues" className="text-gray-700 hover:text-blue-600">
              Issues and Support
            </Link>
            <Link to="/report" className="text-gray-700 hover:text-blue-600">
              Report
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
              src={PlaceholderImage}
              alt="Profile"
              className="h-12 w-10 rounded-full object-cover"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;