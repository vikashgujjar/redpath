import React from 'react';
import { FaFileAlt, FaMicrophone, FaSearch } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="bg-[#edf7f7] h-auto md:h-[280px] xl:h-[335px] lg:h-[350px] py-10 md:py-6 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:grid md:grid-cols-8 items-center gap-10">
        <div className="md:col-span-4 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/img/doctor.gif"
            alt="Online Doctor"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain pt-4 md:pt-6"
          />
        </div>
        <div className="md:col-span-4 text-center md:text-left order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-extrabold leading-snug text-[#1e1e1e]">
            <span className="text-[#8b1ed0]">Online Doctor Consultation</span><br />
            from the comfort of your home
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-sm lg:text-lg text-gray-700">
            Doctor Consultation starts from{' '}
            <span className="inline-block bg-[#e91e63] text-white px-3 py-1 rounded-md font-semibold shadow-sm">
              ₹129
            </span>
          </p>

          <div className="mt-5 relative max-w-sm mx-auto md:mx-0 lg:hidden xl:block hidden md">
                <div className="flex items-center w-full md:max-w-lg border border-gray-300 rounded-full px-4 py-3 bg-white shadow-sm">
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
