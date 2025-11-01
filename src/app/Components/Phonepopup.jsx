'use client';

import { useState, useEffect } from 'react';

export default function PhonePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center flex-wrap z-50 px-4 md">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={closePopup}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          🎉 Exclusive discounts await!
        </h2>
        <p className="text-gray-600 mb-4">
          Enter your mobile number to unlock best prices and offers
        </p>
        <div className="flex border border-gray-300 rounded-lg overflow-hidden mb-3">
          <span className="px-4 py-2 bg-gray-100 text-gray-700">+91</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full px-4 py-2 outline-none"
          />
        </div>
        <label className="flex items-start text-sm flex-wrap text-gray-500 mb-4">
          <input
            type="checkbox"
            className="mr-2 mt-1"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          By continuing, you agree to our{' '}
          <a href="#" className="text-blue-600 underline ml-1">TnC</a> and{' '}
          <a href="#" className="text-blue-600 underline ml-1">Privacy Policies</a>
        </label>
        <button
          className="w-full bg-[#8b1ed0] hover:from-blue-700 text-white py-2 rounded-lg font-semibold"
          disabled={!agree || !phone}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
