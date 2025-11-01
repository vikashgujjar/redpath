'use client';

import React, { useState } from 'react';
import {
  FaPlus,
  FaMinus,
} from 'react-icons/fa';

const faqs = [
  {
    question: 'What does RedPath do?',
    answer:
      'RedPath is the fastest-growing network of diagnostic services offering Integrated radiology and pathology services to identify Communicable and Non-Communicable Diseases (NCDs) altering your health conditions.',
  },
  {
    question: 'What is The Procedure for Booking a Test with RedPath?',
    answer:
      'Being a client-oriented diagnostic center, we have made online health packages or test booking fast and easy. Simple steps to book a health test or package.',
  },
  {
    question: 'How Can I Make Payment for The Booking?',
    answer:
      'We at RedPath support all reliable online payment options: internet banking, debit/credit card, UPI (Paytm, GPay, PhonePe), and wallets.',
  },
  {
    question: 'How does my prescription get validated?',
    answer:
      'We validate every prescription: ensuring it’s prescribed by a certified practitioner, checking date & patient details before proceeding.',
  },
  {
    question: 'Why is Redpath the best Pathology Lab?',
    answer:
      'RedPath is the fastest-growing diagnostic network offering integrated services to identify Communicable and Non-Communicable Diseases.',
  },
];

export default function ContactAndFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 ">
      {/* Left Side: Image */}
      <div className="flex items-center justify-center">
        <img
          src="/img/faq.gif" // Replace with your image path
          alt="Contact RedPath"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Side: FAQs */}
      <div className=" xl:p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md bg-white transition-shadow hover:shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-purple-600" />
                ) : (
                  <FaPlus className="text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
