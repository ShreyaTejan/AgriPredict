import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import react-router components
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About us' },
    { path: '/soil-analysis', label: 'Soil Analysis' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#0F1C0D] fixed w-full top-0 left-0 shadow-md z-50">
      <div className="container mx-auto px-4 md:px-16 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="AgriPredict Logo" className="h-10" />
            <span className="text-white text-xl font-semibold ml-2">
              Agri<span className="text-green-500">Predict</span>
            </span>
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex md:items-center md:justify-center flex-grow">
            <ul className="flex space-x-8 lg:space-x-12">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`transition duration-300 ${
                      isActive(link.path)
                        ? 'text-green-500 font-medium'
                        : 'text-white hover:text-green-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Signup Button - Right */}
          <div className="hidden md:block">
            <Link
              to="/signup"
              className="inline-block text-green-500 border-2 border-green-500 px-6 py-2 rounded-full font-semibold hover:bg-green-500 hover:text-white transition duration-300"
            >
              Sign Up →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 pb-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 border-b border-gray-700 ${
                    isActive(link.path)
                      ? 'text-green-500 font-medium'
                      : 'text-white hover:text-green-500'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link
              to="/signup"
              className="block text-center text-green-500 border-2 border-green-500 px-6 py-2 rounded-full font-semibold hover:bg-green-500 hover:text-white transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              Sign Up →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
