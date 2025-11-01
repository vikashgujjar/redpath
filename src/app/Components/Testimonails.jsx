'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "Redcliffe Labs delivers exceptional and accurate diagnostic services with a knowledgeable and dedicated team.",
    name: "Dr. Vykunta Raju K. N",
    designation: "Pediatric Neurologist",
    location: "Bengaluru",
    image: "/testimonials/1.png",
  },
  {
    text: "Redcliffe Labs has been an invaluable diagnostic service provider for me and my patients. Their commitment to using the latest technologies and techniques to deliver quality & timely reports is commendable.",
    name: "Dr. Seneesh KV",
    designation: "Fetal Medicine Specialist",
    location: "Kerala",
    image: "/testimonials/2.png",
  },
  {
    text: "Redcliffe Labs is synonymous with trusted healthcare, delivering high-quality diagnostic services on time.",
    name: "Dr. Chitra Ganesh",
    designation: "Fetal Medicine Specialist",
    location: "Bengaluru",
    image: "/testimonials/3.png",
  },
  {
    text: "For reliable diagnostics, I always recommend Redcliffe Labs.",
    name: "Dr. Rahul Mehra",
    designation: "Consultant Physician",
    location: "Mumbai",
    image: "/testimonials/4.png",
  },
];

export default function TestimonialsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
   <>
    <section className="py-10 px-4 relative xl:px-32">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#8b1ed0]">What Doctors Are Saying</h2>
      
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        spaceBetween={20}
        slidesPerView={1} // Show exactly one card on mobile
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#faecfc] p-6 rounded-xl shadow-sm h-full flex flex-col justify-between">
              <p className="text-gray-700 text-base mb-6">
                <span className="text-2xl text-gray-500 leading-none mr-2">“</span>
                {item.text}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.designation}</p>
                  <p className="text-sm text-gray-600">{item.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
     </>
  );
}
