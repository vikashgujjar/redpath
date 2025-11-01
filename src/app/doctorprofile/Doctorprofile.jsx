'use client';
import React from 'react';
import Image from 'next/image';

export default function DoctorProfilePage() {
  return (
    <div className="bg-white min-h-screen xl:px-32">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 px-4 py-4 md:px-10">
        Home / Online Doctor Consultation / <span className="text-gray-800 font-medium">Profile</span>
      </div>

      {/* Profile Header */}
      <div className="bg-[#8b1ed0] text-white px-4 py-10 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-b-2xl shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="/img/dc.webp"
              alt="Doctor"
              width={120}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">Dr. Syed Mukhtar Mohiuddin</h2>
            <p className="text-sm mt-1 font-medium">M.B.B.S, MD</p>
            <p className="text-sm mt-2 text-white/90">
              General Physician, Health Checkup (General), Geriatric Healthcare, Viral Fever Treatment,<br />
              Healthians Reports Consultant (10 Years Experience Overall)
            </p>
            <div className="mt-3 text-xs bg-green-500 inline-block rounded-full px-4 py-1 font-semibold">
              ✔ Verified Profile
            </div>
          </div>
        </div>
        <button className="bg-[#e91e63] hover:bg-[#c2185b] transition-all duration-300 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md">
          Book an Appointment
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-10 py-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="col-span-2 space-y-8">
          {/* Rating */}
          <div className="flex items-center gap-4 border-b pb-5">
            <div className="text-5xl font-bold text-teal-600">3.7</div>
            <div className="flex flex-col">
              <div className="flex text-yellow-500 text-lg">
                {[...Array(4)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-gray-300">★</span>
              </div>
              <p className="text-sm text-gray-500">Overall Rating</p>
            </div>
          </div>

          {/* Info Sections */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Doctor Profile</h3>
              <p className="text-sm text-gray-600">MBBS MD Doctor</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Area of Expertise</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Health Checkup (General), Geriatric Healthcare, Viral Fever Treatment, Healthians reports consultant
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Education</h3>
              <p className="text-sm text-gray-600">M.B.B.S, MD</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-teal-50 p-6 rounded-xl shadow-sm space-y-6">
          <div>
            <h4 className="text-base font-semibold text-gray-800">Specialization</h4>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              General Physician, Health Checkup (General), Geriatric Healthcare, Viral Fever Treatment,
              Healthians Reports Consultant
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800">Languages Known</h4>
            <p className="text-sm text-gray-600 mt-1">Hindi, English, Telugu</p>
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-800">Consultation Fees</h4>
            <p className="text-sm text-gray-600 mt-1">₹299</p>
          </div>
        </div>
      </div>
    </div>
  );
}
