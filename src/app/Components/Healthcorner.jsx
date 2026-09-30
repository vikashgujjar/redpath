'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaArrowRight, FaHeartbeat } from 'react-icons/fa';
import { Flask, Dna, Molecule } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader, SliderNav, SliderProgress, useSliderProgress } from './SectionKit';

// Titles are baked into the artwork; `label` is for alt text / screen readers.
const concerns = [
  { label: 'Bone Health', image: '/img/bodyheath.webp', href: '/heart' },
  { label: 'Diabetes', image: '/img/diabetes.webp', href: '/heart' },
  { label: 'Fever & Infection', image: '/img/fever.webp', href: '/heart' },
  { label: 'Full Body Checkups', image: '/img/fullbody.webp', href: '/heart' },
  { label: 'Hair & Skin Care', image: '/img/healthcare.webp', href: '/heart' },
  { label: 'Heart', image: '/img/heart.webp', href: '/heart' },
  { label: 'Thyroid', image: '/img/throid.webp', href: '/heart' },
  { label: 'Lifestyle', image: '/img/lifestyle.webp', href: '/heart' },
  { label: 'Vitamins', image: '/img/vitamins.webp', href: '/heart' },
  { label: 'Women Care', image: '/img/women.webp', href: '/heart' },
];

function ConcernCard({ label, image, href }) {
  return (
    <Link
      href={href}
      aria-label={`${label} tests`}
      className="group relative block rounded-3xl p-[2px] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-200"
    >
      {/* border: soft by default, gradient on hover */}
      <span className="absolute inset-0 rounded-3xl bg-brand-100" />
      <span className="absolute inset-0 rounded-3xl bg-linear-to-br from-brand-500 via-accent-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative block overflow-hidden rounded-[22px] bg-white">
        <img
          src={image}
          alt={label}
          width={420}
          height={435}
          loading="lazy"
          className="block aspect-[420/435] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />

        {/* shine sweep */}
        <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

        {/* reveal bar */}
        <span className="absolute inset-x-2 bottom-2 flex h-9 translate-y-[140%] items-center justify-between rounded-2xl bg-white/90 px-3 text-xs font-semibold text-brand-700 shadow-lg backdrop-blur transition-transform duration-500 ease-[cubic-bezier(.2,.9,.3,1.2)] group-hover:translate-y-0">
          Explore tests
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-accent-500 text-[10px] text-white">
            <FaArrowRight />
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function HealthConcernSlider() {
  const sectionRef = useReveal();
  const [progressRef, updateProgress] = useSliderProgress();
  const [swiper, setSwiper] = useState(null);

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-white py-12 lg:py-16">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="rp-drift absolute -right-24 top-0 h-64 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="rp-drift absolute -left-24 bottom-0 h-56 w-80 rounded-full bg-pink-100/70 blur-3xl" style={{ animationDelay: '-5s' }} />
        <Flask className="rp-float-in absolute right-[6%] top-6 w-10 text-brand-600/15" style={{ '--r': '12deg', '--d': '.6s' }} />
        <Dna className="rp-float-in absolute left-[46%] top-4 hidden h-14 text-brand-600/15 lg:block" style={{ '--r': '-16deg', '--d': '.8s', '--dur': '9s' }} />
        <Molecule className="rp-float-in absolute left-[2%] bottom-8 hidden w-10 text-brand-600/15 md:block" style={{ '--d': '1s', '--dur': '10s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Health concerns"
          icon={FaHeartbeat}
          title="Find the right test by"
          highlight="health concern"
          description="Pick what you're worried about — we'll show the tests and packages that matter for it."
        >
          <SliderNav swiper={swiper} />
        </SectionHeader>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(s) => {
            setSwiper(s);
            updateProgress(s);
          }}
          onProgress={updateProgress}
          onBreakpoint={updateProgress}
          rewind
          spaceBetween={14}
          slidesPerView={2.2}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            480: { slidesPerView: 2.6, spaceBetween: 16 },
            640: { slidesPerView: 3.3, spaceBetween: 18 },
            768: { slidesPerView: 4.2, spaceBetween: 20 },
            1024: { slidesPerView: 5.2, spaceBetween: 22 },
            1280: { slidesPerView: 6.2, spaceBetween: 24 },
            1536: { slidesPerView: 7, spaceBetween: 24 },
          }}
          className="mt-8"
          style={{ overflow: 'visible', paddingBlock: 12 }}
        >
          {concerns.map((c, i) => (
            <SwiperSlide key={c.label}>
              <div className="rp-blur-in" style={{ '--d': `${0.25 + Math.min(i, 7) * 0.08}s` }}>
                <ConcernCard {...c} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderProgress progressRef={progressRef} label={`${concerns.length} concerns`} />
      </div>
    </section>
  );
}
