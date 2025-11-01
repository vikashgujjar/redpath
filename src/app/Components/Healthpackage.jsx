'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  FaHeart,
  FaUserMd,
} from 'react-icons/fa';
import { GiLiver } from 'react-icons/gi';
import {
  MdBloodtype,
  MdCoronavirus,
  MdAdd,
  MdAssignment,
} from 'react-icons/md';
import Link from 'next/link';

const iconMap = {
  Heart: <FaHeart className="text-red-500" />,
  Liver: <GiLiver className="text-green-600" />,
  Kidney: <FaUserMd className="text-blue-500" />,
  'Diabetes (HbA1c)': <MdBloodtype className="text-pink-500" />,
  Lipid: <FaUserMd className="text-purple-500" />,
  Infection: <MdCoronavirus className="text-yellow-600" />,
  '+2': <MdAdd className="text-gray-500" />,
  Thyroid: <MdAssignment className="text-orange-500" />,
  Vitamins: <FaUserMd className="text-teal-500" />,
  'Diabetes / Sugar': <MdBloodtype className="text-pink-500" />,
};

const packages = [
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '15 hours',
    parameters: 92,
    features: ['Heart', 'Diabetes (HbA1c)', 'Lipid', 'Liver', 'Kidney'],
    originalPrice: 7614,
    discountedPrice: 1599,
    vipPrice: 1439,
    discount: '78%',
  },
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '15 hours',
    parameters: 89,
    features: ['Diabetes (HbA1c)', 'Lipid', 'Liver', 'Kidney'],
    originalPrice: 5233,
    discountedPrice: 1099,
    vipPrice: 989,
    discount: '78%',
  },
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '15 hours',
    parameters: 98,
    features: ['Heart', 'Vitamins', 'Liver', 'Kidney', 'Diabetes'],
    originalPrice: 8260,
    discountedPrice: 2199,
    vipPrice: 1979,
    discount: '73%',
  },
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '24 hours',
    parameters: 120,
    features: ['Heart', 'Liver', 'Kidney', 'Thyroid', 'Vitamins', 'Kidney'],
    originalPrice: 9500,
    discountedPrice: 2499,
    vipPrice: 2249,
    discount: '74%',
  },
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '12 hours',
    parameters: 65,
    features: ['Heart', 'Lipid', 'Liver', 'Diabetes / Sugar', 'Kidney'],
    originalPrice: 4500,
    discountedPrice: 999,
    vipPrice: 899,
    discount: '78%',
  },
];

export default function HealthPackages() {
  return (
    <div className="px-3 lg:px-0 py-8 bg-white max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-3xl font-bold text-[#0a2540]">
          Top Health Packages
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2.3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3.5 },
        }}
      >
        {packages.map((pkg, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-3 h-full flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm transition-shadow">
              <div className="px-3 pt-4 flex-grow">
                <h3 className="text-[15px] font-semibold text-[#8b1ed0] leading-snug mb-3">
                  {pkg.title}
                </h3>
                <div className="flex items-center text-[13px] text-gray-600 mb-3 flex-wrap gap-1">
                  <span>Reports in</span>
                  <span className="px-2 py-[2px] bg-gray-100 rounded text-black font-medium text-[12px]">
                    {pkg.reportsIn}
                  </span>
                  <span className="mx-1">|</span>
                  <span>Parameters</span>
                  <span className="px-2 py-[2px] bg-gray-100 rounded text-black font-medium text-[12px]">
                    {pkg.parameters}
                  </span>
                </div>
           <Link href="/package">    <div className="flex flex-wrap gap-2 mb-3">
                  {pkg.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-xs bg-gray-100 px-3 py-[6px] rounded-full text-gray-800 gap-1"
                    >
                      <span className="text-sm">{iconMap[feature]}</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div></Link> 
              </div>

              <div className="bg-[#fff4fe] px-3 pt-3 pb-4 border-t border-gray-200  rounded-b-2xl">
                <p className="text-xs text-[#8b1ed0] font-medium mb-1">
                  Limited Time Deal
                </p>
                <div className="flex items-center space-x-2 text-gray-800 mb-1">
                  <span className="text-xl font-bold text-black">
                    ₹{pkg.discountedPrice}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    ₹{pkg.originalPrice}
                  </span>
                  <span className="text-[#1dbf73] font-semibold text-sm">
                    {pkg.discount} Off
                  </span>
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  <span className="font-medium">VIP Price:</span> ₹
                  {pkg.vipPrice}
                </div>
                <button className="w-full bg-[#8b1ed0] hover:bg-[#8b1ed0] text-white text-sm font-semibold py-2.5 rounded-full shadow">
                  Book
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
