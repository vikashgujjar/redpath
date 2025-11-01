'use client';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

const LoginDrawer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-[9999] right-0 flex justify-end h-full">
      <div
        className="bg-white w-full max-w-sm h-full p-6 overflow-y-auto shadow-xl  transition-all duration-300 "
        data-aos="fade-left"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-4">
     <h2 className="text-2xl font-bold text-gray-800">
  Hello Again! <span className="inline-block animate-wave">👋</span>
  <br />
  <span className="text-base font-medium text-gray-600">Please Log in to continue</span>
</h2>

          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Form */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Phone Number
          </label>
         <div className="flex items-center border rounded-md px-3 py-2">
  <img
    src="https://flagcdn.com/w40/in.png"
    alt="India Flag"
    className="w-6 h-4 mr-2"
  />
  <span className="text-sm font-medium mr-2">+91</span>
  <input
    type="tel"
    className="flex-1 outline-none"
    placeholder="Your Phone Number"
  />
</div>


          <div className="text-xs text-gray-500 mt-2">
            <input type="checkbox" defaultChecked className="mr-1" />
            By continuing, you agree to our{' '}
            <a href="#" className="underline font-medium">TnC</a> and{' '}
            <a href="#" className="underline font-medium">Privacy Policies</a>
          </div>

          <button className="w-full bg-gradient-to-r from-[#d28cfe] to-[#8b1ed0] text-white font-semibold py-2 rounded-md mt-4">
            Send OTP
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">Or continue with:</p>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md mt-2 text-green-600 font-medium">
            <img src="/Image/WhatsApp.webp" alt="whatsapp" className="w-5 h-5" />
            Whatsapp
          </button>

          <div className="mt-6">
            <img
              src="/img/bannnercatagory.webp"
              alt="India's Most Loved Lab"
              className="rounded-md"
            />
          </div>


  <div className="flex gap-4 xl:mt-5">
      <a
        href="#"
        className="text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 p-2 rounded-full border border-blue-600"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="#"
        className="text-pink-500 hover:text-white hover:bg-pink-500 transition-all duration-300 p-2 rounded-full border border-pink-500"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="#"
        className="text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 p-2 rounded-full border border-red-600"
      >
        <FaYoutube size={20} />
      </a>
      <a
        href="#"
        className="text-green-600 hover:text-white hover:bg-green-600 transition-all duration-300 p-2 rounded-full border border-green-600"
      >
        <FaGoogle size={20} />
      </a>
    </div>




          
        </div>
      </div>
    </div>
  );
};

export default LoginDrawer;
