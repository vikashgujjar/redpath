'use client';

import { useEffect, useState } from 'react';


import {
  FaSearch,
  FaMapMarkerAlt,
  FaUserCircle,
  FaShoppingCart,
  FaMicrophone,
  FaFileAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoginDrawer from './Logindraw';
import Link from 'next/link';


export default function Topbar() {
  const [location, setLocation] = useState('Delhi');
 const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
      },
      () => alert('Unable to get location')
    );
  };

  return (
  <>
    <div className="w-full bg-white border-b border-gray-200 shadow-sm" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 py-3 lg:px-8 flex flex-col lg:flex-row gap-2 lg:gap-3 xl:justify-between xl:px-0">
        {/* Top Row for Mobile */}
        <div className="flex items-center justify-between lg:hidden">
       <Link href='/'>  <img src="/logo.webp" alt="Logo" className="h-10" /></Link> 

          <div className="flex items-center gap-2">
            <button
              onClick={handleLocationClick}
              className="flex items-center gap-1 text-sm text-gray-700 border border-gray-300 rounded-full px-3 py-1"
            >
              <FaMapMarkerAlt className="text-black" />
              <span>{location}</span>
            </button>
            <a
              href="https://wa.me/917056997000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Desktop: Logo + Location */}
        <div className="hidden lg:flex items-center gap-4 w-full lg:w-auto justify-between">
      <Link href='/'>   <img src="/logo.webp" alt="Logo" className="h-12" /></Link> 
          <button
            onClick={handleLocationClick}
            className="hidden lg:flex items-center gap-2 text-sm text-gray-700 border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-100 transition"
          >
            <FaMapMarkerAlt className="text-black" />
            <span>{location}</span>
            <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.185l3.71-3.955a.75.75 0 111.08 1.04l-4.24 4.525a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full xl:max-w-xl lg:w-md ">
          <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-3 bg-white shadow-sm">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Tests"
              className="flex-grow bg-transparent outline-none text-gray-800 text-sm"
            />
            <div className="flex items-center gap-3 pl-2 border-l border-gray-300">
              <FaMicrophone className="text-red-500 cursor-pointer" />
              <FaFileAlt className="text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Cart + Profile */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 cursor-pointer">
            <span className="font-semibold text-sm">Cart</span>
            <FaShoppingCart className="text-black" />
          </div>
        <div
        className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span className="font-semibold text-sm">Profile</span>
        <FaUserCircle className="text-black" />
      </div>

      
        </div>
      </div>
    </div>

    <LoginDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} /></>
  );
}
