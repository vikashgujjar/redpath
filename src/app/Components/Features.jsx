'use client';

import {
  FaUserCheck,
  FaVial,
  FaMapMarkedAlt,
  FaMap,
  FaFlask,
  FaUserNurse,
} from 'react-icons/fa';

const stats = [
  {
    icon: <FaUserCheck className="text-3xl text-black" />,
    count: '70,00,000+',
    label: 'Customers served',
  },
  {
    icon: <FaVial className="text-3xl text-black" />,
    count: '70,000+',
    label: 'Tests Processed',
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-black" />,
    count: '220+',
    label: 'Cities',
  },
  {
    icon: <FaMap className="text-3xl text-black" />,
    count: '2000+',
    label: 'Collection Centres',
  },
  {
    icon: <FaFlask className="text-3xl text-black" />,
    count: '80+',
    label: 'World Class In-house Labs',
  },
  {
    icon: <FaUserNurse className="text-3xl text-black" />,
    count: '1000+',
    label: 'Home Collection Experts',
  },
];

export default function RedcliffeStats() {
  return (
    <section className="bg-gray-100 py-10 rounded-xl xl:mb-9">
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Redcliffe Labs -{' '}
          <span className="text-[#8b1ed0] font-bold">
            Healthy India ki Trusted Lab
          </span>
        </h2>
        <p className="mt-2 text-gray-700 font-medium">
          At Redcliffe Labs, we have a <strong>single goal</strong>: to give India its right to quality diagnostics.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 text-center border border-red-200 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-2">{item.icon}</div>
              <div className="w-full border-t border-dotted border-gray-300 my-2" />
              <div className="text-lg font-bold text-[#8b1ed0] text-justify">{item.count}</div>
              <div className="text-sm text-gray-700 mt-1 text-justify">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
