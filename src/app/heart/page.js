'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa';
import Banner from '../doctorconsultation/Banner';
import Link from 'next/link';

export default function DoctorBookingSection() {
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Anuj Kumar Gupta',
      degree: 'M.B.B.S',
      image: '/img/dc.webp',
      experience: '40 Years Exp.',
      languages: 'Hindi, English',
      time: '03:00 PM, TODAY',
      rating: 4.6,
      fee: 339,
      originalFee: 678,
    },
    {
      id: 2,
      name: 'Dr. Pooja Sharma',
      degree: 'M.D. Dermatology',
      image: '/img/dc2.webp',
      experience: '15 Years Exp.',
      languages: 'Hindi, English',
      time: '05:30 PM, TODAY',
      rating: 4.9,
      fee: 499,
      originalFee: 899,
    },
    {
      id: 3,
      name: 'Dr. Aman Mehra',
      degree: 'M.B.B.S, M.S.',
      image: '/img/dc3.webp',
      experience: '10 Years Exp.',
      languages: 'English, Punjabi',
      time: '02:00 PM, TODAY',
      rating: 4.5,
      fee: 250,
      originalFee: 500,
    },
  ];

  return (
    <>
      <Banner />

      <div className="bg-white px-4 sm:px-6 md:px-8 xl:px-12 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 xl:gap-12">

          {/* Left: Doctor Cards */}
          <div className="lg:col-span-2 space-y-6">
            {doctorsData.map((doctor) => (
              <DoctorCard key={doctor.id} data={doctor} />
            ))}
          </div>

          {/* Right: Booking Form */}
          <div className="w-full lg:w-auto">
            <div className="sticky top-20 border border-gray-200 shadow-md rounded-xl p-6 bg-white space-y-5">
              <img src='/img/bannnercatagory.webp' alt='banner' className="w-full rounded-md" />
              <h3 className="text-lg font-semibold text-gray-800">Book Appointment</h3>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b1ed0]">
                  <option>Gynecologist</option>
                  <option>Dermatologist</option>
                  <option>Cardiologist</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b1ed0]" />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" placeholder="Enter phone number" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8b1ed0]" />
              </div>

              <button className="w-full py-2 px-4 rounded-lg bg-[#8b1ed0] text-white font-semibold hover:bg-[#7511bd] transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DoctorCard({ data }) {
  return (
    <Link href='/doctorprofile'>
      <div className="border border-[#7511bd] rounded-md bg-white p-4 sm:p-5 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 shadow-sm w-full mb-4">

        {/* Left: Image + Info */}
        <div className="flex gap-4">
          <div className="relative w-24 h-24 min-w-[6rem] rounded-md overflow-hidden border ">
            <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-[#7511bd] text-white text-xs font-semibold px-2 py-1 rounded-tr-md">
              {data.experience}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#7511bd]">{data.name}</h3>
            <p className="text-sm text-gray-800">{data.degree}</p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Language known:</span> {data.languages}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Next available at:</span>{' '}
              <span className="text-[#0a2540] font-medium">{data.time}</span>
            </p>
          </div>
        </div>

        {/* Right: Rating + Fee + Buttons */}
        <div className="flex flex-col gap-2 sm:gap-3 w-full md:w-64">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-[#7511bd] font-semibold text-sm">
              {data.rating} <FaStar className="text-sm" />
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Consultation Fee</p>
              <div className="text-lg font-bold text-gray-800">
                ₹{data.fee}{' '}
                <span className="line-through text-sm text-gray-400">₹{data.originalFee}</span>
              </div>
            </div>
          </div>

          <button className="w-full py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition">
            View Profile
          </button>
          <button className="w-full py-2 text-sm rounded-full bg-[#7511bd] hover:bg-[#5f0ea1] text-white font-semibold transition">
            Book an Appointment
          </button>

          <p className="text-[10px] text-gray-500 text-center mt-1">
            <span className="underline decoration-dotted cursor-pointer">Get up to 100% cashback*</span>.{' '}
            <a href="#" className="underline text-[#00888a]">T&C Apply</a>
          </p>
        </div>
      </div>
    </Link>
  );
}
