'use client'
import React from 'react';

export default function DoctorConsultationTips() {
  return (
    <div className="bg-[#edf7f7] pt-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            How to get the best out of your doctor video consultation session
          </h2>
          <ul className="text-gray-700 space-y-4 list-disc list-inside">
            <li>
              Make a list of questions and concerns you want to highlight. Tell your doctor your symptoms clearly and honestly, every little detail helps.
            </li>
            <li>
              Keep your medical history, such as previous test reports or prescriptions handy.
            </li>
            <li>
              Make sure there is no noise disturbance before connecting.
            </li>
            <li>
              It may be a good idea to have someone sit with you during the consultation just in case you miss something, the other person can fill you in.
            </li>
          </ul>
        </div>

        {/* Right Form Card */}
        <div className="bg-white shadow-md  p-6 md:p-8 w-full">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">We are Here to Help!</h3>
          <p className="text-sm text-gray-600 mb-6">Get instant call back in few mins</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7043]"
            />
            <input
              type="tel"
              placeholder="Enter 10-digit mobile no.*"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7043]"
            />
            <select
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff7043]"
            >
              <option>Gurgaon</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>

            <div className="flex items-start gap-2 text-xs text-gray-600">
              <input type="checkbox" className="mt-1" />
              <span>
                You hereby affirm & authorise Healthians to process the personal data as per the{' '}
                <a href="#" className="text-blue-600 underline">T&C</a>.
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8b1ed0] text-white font-semibold py-3 rounded-md hover:bg-[#e04e3d] transition"
            >
              Book an Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
