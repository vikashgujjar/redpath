'use client';

import Image from 'next/image';

const healthCheckups = {
  men: [
    { label: 'Under 30 yrs', image: '/Image/vishal.webp' },
    { label: '30 – 45 yrs', image: '/Image/vishal.webp' },
    { label: '45 – 60 yrs', image: '/Image/vishal.webp' },
  ],
  women: [
    { label: 'Under 30 yrs', image: '/Image/vishal.webp' },
    { label: '30 – 45 yrs', image: '/Image/vishal.webp' },
    { label: '45 – 60 yrs', image: '/Image/vishal.webp' },
  ],
};

export default function RoutineCheckups() {
  return (
    <>
      <div className='my-6 xl:px-30'>
        <img src='/Image/indian.webp' alt=''></img>
      </div>


      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4 py-8 bg-gray-100 xl:px-30">
        {/* Men's Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center flex-wrap mb-4">
            <h2 className="text-xl font-semibold text-[#8b1ed0]">
              Routine health checkups for men
            </h2>
            <a href="#" className="text-sm text-[#8b1ed0] font-medium">
              View All &gt;
            </a>
          </div>
          <div className="flex justify-between gap-3">
            {healthCheckups.men.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-3 w-full"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={150}
                  height={150}
                  className="rounded-xl"
                />
                <p className="mt-2 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          {/* Pagination Dot */}
          <div className="flex justify-center mt-4">
            <div className="w-3 h-1 rounded-full bg-blue-800" />
          </div>
        </div>

        {/* Women's Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center flex-wrap mb-4">
            <h2 className="text-xl font-semibold text-[#8b1ed0]">
              Routine health checkups for women
            </h2>
            <a href="#" className="text-sm text-[#8b1ed0] font-medium">
              View All &gt;
            </a>
          </div>
          <div className="flex justify-between gap-3">
            {healthCheckups.women.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-3 w-full"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={150}
                  height={150}
                  className="rounded-xl"
                />
                <p className="mt-2 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          {/* Pagination Dot */}
          <div className="flex justify-center mt-4">
            <div className="w-3 h-1 rounded-full bg-blue-800" />
          </div>
        </div>
      </div>
    </>
  );
}
