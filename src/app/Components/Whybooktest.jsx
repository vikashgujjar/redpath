// app/components/WhyBookTests.tsx
'use client';

import {
  FaUserShield,
  FaTruck,
  FaThumbsUp,
  FaCalendarCheck,
  FaUserMd,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaUserShield className="text-2xl text-black" />,
    title: 'Quality',
    desc: 'Follow Stringent Quality Control Practices',
  },
  {
    icon: <FaTruck className="text-2xl text-black" />,
    title: 'On-Time Services',
    desc: 'Sample Collection & Reports',
  },
  {
    icon: <FaThumbsUp className="text-2xl text-black" />,
    title: 'Convenience',
    desc: 'At-Home & In-Lab Services',
  },
  {
    icon: <FaCalendarCheck className="text-2xl text-black" />,
    title: 'Availability',
    desc: '365 days a year',
  },
  {
    icon: <FaUserMd className="text-2xl text-black" />,
    title: 'Expert Assistance',
    desc: 'On-Demand Report Consultation',
  },
    {
    icon: <FaUserMd className="text-2xl text-black" />,
    title: 'Expert Assistance',
    desc: 'On-Demand Report Consultation',
  },
];

export default function WhyBookTests() {
  return (
    <div className="bg-[#e9eef2] py-10 px-4 sm:px-10 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl text-gray-800 mb-2">
          Why <span className="font-bold text-[#8b1ed0]">Book Tests</span> With us?
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          According to the study presented at the 78th UN General Assembly, Redcliffe’s tests are up to 8 times more cost-effective than national treatment coverage.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 text-left shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center items-center w-10 h-10 mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#8b1ed0] text-md mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
