'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/Image/redpath.webp',
  '/Image/imageslider.webp',
  '/Image/imgslider2.webp',
  '/Image/imgslider3.webp',
  '/Image/imgslider4.webp',
];

export default function ImageSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Force Swiper to update navigation after refs are assigned
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto py-10 px-4 bg-white rounded-xl xl:my-8 xl:px-0">
      {/* Navigation Buttons - Positioned top right */}
      <div className="absolute top-[-20px] right-4  flex gap-2 z-0">
        <button
          ref={prevRef}
          className="p-2 rounded-sm bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 shadow-md hover:scale-105"
        >
          <FaChevronLeft className="text-lg" />
        </button>
        <button
          ref={nextRef}
          className="p-2 rounded-sm bg-[#8b1ed0] hover:bg-[#6e2e6d] text-white transition-all duration-300 shadow-md hover:scale-105"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="rounded-lg w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
