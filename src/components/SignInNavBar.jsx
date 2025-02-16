import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/aait.jpg"

const SignInNavBar = () => {
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
             <h1>AAiT's PhD Progress Monitoring</h1>
            
          </div>

          {/* Right Side: Search and Profile */}
          <div className="flex items-center space-x-4">
            
            <img
              src="src/assets/images/placeholder.jpg"
              alt="Profile"
              className="h-12 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SignInNavBar