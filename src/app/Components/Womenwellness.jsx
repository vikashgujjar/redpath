'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaHeart, FaLiver, FaUserMd } from 'react-icons/fa';
import { GiLiver } from 'react-icons/gi';
import {
  MdBloodtype,
  MdCoronavirus,
  MdAdd,
  MdAssignment,
} from 'react-icons/md';

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

const categories = [
  'All',
  'Pregnancy',
  'Wellness',
  'PCOS/PCOD',
  'Sexual Health',
  'Menstrual Health',
  'Cancer',
  'Infertility',
];

const packages = [
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '24 hours',
    parameters: 100,
    features: ['Heart', 'Diabetes (HbA1c)', 'Liver', 'Kidney', 'Infection', 'Thyroid'],
    originalPrice: 8700,
    discountedPrice: 2499,
    vipPrice: 2249,
    discount: '71%',
    category: 'All',
  },
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '10 hours',
    parameters: 3,
    features: ['Thyroid', 'Kidney', 'Infection', 'Thyroid',],
    originalPrice: 650,
    discountedPrice: 299,
    vipPrice: 269,
    discount: '54%',
    category: 'Wellness',
  },
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '30 hours',
    parameters: 107,
    features: ['Thyroid', 'Lipid', 'Vitamins' ,'Kidney', 'Infection', ],
    originalPrice: 13000,
    discountedPrice: 4499,
    vipPrice: 4049,
    discount: '65%',
    category: 'Pregnancy',
  },
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '12 hours',
    parameters: 1,
    features: ['Thyroid ' , 'Kidney', 'Infection', 'Lipid', ],
    originalPrice: 450,
    discountedPrice: 219,
    vipPrice: 197,
    discount: '51%',
    category: 'Menstrual Health',
  },
];

export default function Wellness() {
  const [selectedTab, setSelectedTab] = useState('All');

  const filteredPackages =
    selectedTab === 'All'
      ? packages
      : packages.filter((pkg) => pkg.category === selectedTab);

  return (
    <div className="px-3 sm:px-6 py-8 max-w-7xl mx-auto bg-white rounded-2xl xl:mb-9 xl:px-0">
      <div className="mb-5">
        <h2 className="text-xl sm:text-3xl font-bold text-[#0a2540] mb-2">
          Women's Health & Wellness
        </h2>
        <p className="text-sm text-gray-600">
          Take control of your health with our comprehensive women's health packages
        </p>
      </div>

      {/* Scrollable Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedTab === tab
                ? 'bg-[#0a2540] text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
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
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3.5 },
        }}
        className="h-full"
      >
        {filteredPackages.map((pkg, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div className="flex flex-col h-full bg-white shadow-sm border border-gray-200 xl:rounded-2xl transition hover:shadow-md">
              <div className="px-4 pt-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold text-[#8b1ed0] leading-snug mb-3">
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

                  <div className="flex flex-wrap gap-2 mb-3">
                    {pkg.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-xs bg-gray-100 px-3 py-[6px] rounded-full text-gray-800 gap-1"
                      >
                        <span className="text-sm">{iconMap[feature]}</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4 pt-3 pb-4 border-t border-gray-200 bg-[#fff4fe] rounded-b-2xl">
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
                  <span className="font-medium">VIP Price:</span> ₹{pkg.vipPrice}
                </div>

                <button className="w-full bg-[#8b1ed0] hover:bg-[#8b1ed0] text-white text-sm font-semibold py-2.5 rounded-full shadow">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
