'use client'
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

export default function BookingSteps() {
  return (
    <div className="px-4 md:px-8 py-10 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Call Banner */}
        <div className="bg-[#edf7f7]  border border-[#fcebdc] p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">Not sure which doctor to consult?</h3>
            <p className="text-gray-600 text-sm mt-1">Let us help you.</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-[#8b1ed0] font-medium hover:shadow-md transition">
            <FiPhoneCall className="text-lg" />
            Call Us
          </button>
        </div>

        {/* Booking Steps */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            How to book online doctor consultation
          </h2>

          {/* Responsive 2x2 layout on mobile */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { number: '1.', title: 'Choose doctor specialisation' },
              { number: '2.', title: 'Check doctor’s availability' },
              { number: '3.', title: 'Select date & time slot' },
              { number: '4.', title: 'Book an Appointment' },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-sm bg-[#8b1ed0] text-white font-bold text-2xl flex items-center justify-center shadow-md">
                  {step.number}
                </div>
                <p className="text-gray-700">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
