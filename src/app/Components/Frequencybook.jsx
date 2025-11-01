'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

const packages = [
  { label: 'Full Body', icon: '/Image/fullbody.webp' },
  { label: 'Heart', icon: '/Image/heart.webp' },
  { label: 'Fever', icon: '/Image/fever.webp' },
  { label: 'Vitamin', icon: '/Image/vitamin.webp' },
  { label: 'Diabetes', icon: '/Image/daibities.webp' },
  { label: 'Thyroid', icon: '/Image/thyroid.webp' },
  { label: 'Hormone', icon: '/Image/hormone.webp' },
  { label: 'Cancer', icon: '/Image/cancer.webp' },
  { label: 'Lifestyle', icon: '/Image/fitnes.webp' },
  { label: 'Pregnancy', icon: '/Image/pregnancy.webp' },
  { label: 'Fertility', icon: '/Image/ferlity.webp' },
  { label: 'Allergy', icon: '/Image/Alergy.webp' },
  { label: 'STD', icon: '/Image/std.webp' },
  { label: 'Combo', icon: '/Image/combo.webp' },
  { label: 'Arthritis', icon: '/Image/arthritis.webp' },
  { label: 'Anemia', icon: '/Image/anenmia.webp' },
]

export default function HealthCheckupSlider() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const visiblePackages = isMobile
    ? showAll
      ? packages
      : packages.slice(0, 6)
    : packages

  return (
    <div className="w-full px-4 py-10 bg-white relative xl:px-30 my-5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#8b1ed0]">Frequently Booked</h2>
        {!isMobile && (
          <div className="flex items-center gap-2">
            <button className="swiper-button-prev-custom p-2 bg-gray-200 hover:bg-gray-300 text-[#8b1ed0] rounded-sm shadow-md">
              <FaChevronLeft />
            </button>
            <button className="swiper-button-next-custom p-2 bg-[#8b1ed0] hover:bg-blue-800 text-white rounded-sm shadow-md">
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* Desktop Swiper */}
      {!isMobile && (
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            1280: { slidesPerView: 6, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 16 },
          }}
          className="w-full"
        >
          {packages.map((item, index) => (
            <SwiperSlide key={index}>
          <Link href="/fullbody">   <div className="bg-white shadow-sm rounded-xl border border-red-200 px-4 py-4 flex flex-col sm:flex-row items-center justify-center text-center min-h-[100px] gap-2 sm:gap-4">
                <img src={item.icon} alt={item.label} className="w-12 h-12 mb-2 sm:mb-0" />
                <span className="text-[16px] font-medium text-gray-800">{item.label}</span>
              </div></Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Mobile Grid */}
      {isMobile && (
        <>
    <Link href='/fullbody'>     <div className="grid grid-cols-3 gap-3">
            {visiblePackages.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-xl border border-red-200 px-4 py-4 flex flex-col items-center justify-center text-center min-h-[100px] gap-2"
              >
                <img src={item.icon} alt={item.label} className="w-12 h-12" />
                <span className="text-[14px] font-medium text-gray-800">{item.label}</span>
              </div>
            ))}
          </div></Link> 

          {/* View More / View Less */}
          {packages.length > 6 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#8b1ed0] border border-[#8b1ed0] px-4 py-2 text-sm rounded hover:bg-[#8b1ed0] hover:text-white transition"
              >
                {showAll ? 'View Less' : 'View More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
