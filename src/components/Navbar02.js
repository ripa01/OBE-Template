import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.png"

export default function Navbar02() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0  w-screen z-50 bg-indigo-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OBE Master</span>
        </Link>
        <button
          onClick={handleToggle}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
          
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg bg-indigo-100 md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-indigo-100 dark:bg-gray-800 md:dark:bg-gray-900">
            
            <li>
              <Link to="/login" className="inline-block py-2 w-full px-4 mt-1 text-md font-medium text-blue-700  bg-gray-50 rounded-lg hover:bg-blue-300 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 dark:bg-blue-200 dark:hover:bg-blue-300">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="inline-block w-full py-2 px-4 mt-1 text-md font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
