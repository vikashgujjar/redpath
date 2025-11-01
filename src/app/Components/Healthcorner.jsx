'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


const images = [
  { image: "/img/bodyheath.webp" },
  { image: "/img/diabetes.webp" },
  { image: "/img/fever.webp" },
  { image: "/img/fullbody.webp" },
  { image: "/img/healthcare.webp" },
  { image: "/img/heart.webp" },
  { image: "/img/throid.webp" },
  { image: "/img/lifestyle.webp" },
  { image: "/img/vitamins.webp" },
  { image: "/img/women.webp" },
];

export default function HealthConcernSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState({});

  useEffect(() => {
    setNavigation({
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 mt-6 sm:mt-10 py-10 bg-white rounded-xl xl:px-0">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={16}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 7 },
        }}
        navigation={navigation}
        className="pb-10" // Adds space for dots below
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
        <Link href='/heart'>   <img
              src={img.image}
              alt={`Slide ${i + 1}`}
              className="rounded-lg w-full h-32 sm:h-40 md:h-48 object-cover"
            /></Link> 
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Style pagination bullets to sit below */}
      <style jsx>{`
        :global(.swiper-pagination) {
          position: static !important;
          margin-top: 12px;
          text-align: center;
        }
        :global(.swiper-pagination-bullet) {
          background-color: #999;
          opacity: 1;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: #000;
        }
      `}</style>
    </div>
  );
}
