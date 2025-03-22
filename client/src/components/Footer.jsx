import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <section className="bg-green-950 text-white py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-8xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-8">
          <div className="sm:col-span-2 md:col-span-3">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="AgriPredict logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl sm:text-2xl font-bold">AgriPredict</span>
            </div>
            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              Using machine learning to optimize crop selection and maximize
              agricultural productivity through data-driven insights and
              AI-powered forecasting.
            </p>
          </div>

          <div className="sm:col-span-1 md:col-span-2 md:col-start-5 mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-500">
              Product
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-2 mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-500">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Guides & tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Help center
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-2 mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-500">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 text-sm sm:text-base"
                >
                  Media kit
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-2 mt-6 md:mt-0">
            <h3 className="text-xl font-bold mb-3">Try It Today</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Get started for free.
            </p>
            <a
              href="/"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg text-sm"
              role="button"
            >
              Start today <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom section with language, links, copyright, and social icons */}
        <div
          className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center"
        >
          <div className="flex items-center">
            <span className="inline-flex items-center text-gray-400 text-sm">
              <Globe className="h-5 w-5 mr-2" />
              English
              <ChevronDown className="h-5 w-5 ml-1" />
            </span>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm">
              Terms & privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm">
              Security
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm">
              Status
            </a>
          </div>

          <div className="text-gray-400 text-sm">&copy;2025 AgriPredict LLC.</div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;