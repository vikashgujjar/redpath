'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaTags, FaArrowRight } from 'react-icons/fa';
import { Flask, TestTube, Dna, Molecule, ecgPath } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader, SliderNav } from './SectionKit';

// Name / price / discount / tests mirror what's printed on each banner.
const offers = [
  { image: '/Image/redpath.webp', name: 'Diabetes Profile Advanced', price: 2349, discount: 56, tests: 101 },
  { image: '/Image/imageslider.webp', name: 'Vitamin D & B12 Combo', price: 899, discount: 60, tests: 2 },
  { image: '/Image/imgslider2.webp', name: 'Arthritis Screening', price: 599, discount: 62, tests: 40 },
  { image: '/Image/imgslider3.webp', name: 'Fever Panel Basic', price: 999, discount: 33, tests: 64 },
  { image: '/Image/imgslider4.webp', name: 'Wellness Screening', price: 499, discount: 67, tests: 58 },
];

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

// Loop mode needs spare slides when ~2.6 are visible, so the set is rendered twice.
const loopSlides = [...offers, ...offers];

export default function ImageSlider() {
  const sectionRef = useReveal();
  const tabsRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);
  const ecg = ecgPath(1200, 300);

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-linear-to-br from-brand-900 via-brand-700 to-brand-600 py-12 text-white lg:py-16">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[.08] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="rp-drift absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="rp-drift absolute -right-24 -top-10 h-72 w-96 rounded-full bg-brand-400/40 blur-3xl" style={{ animationDelay: '-6s' }} />
        <svg className="absolute left-0 top-[58%] h-20 w-full" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d={ecg} pathLength="1000" fill="none" stroke="white" strokeOpacity=".08" strokeWidth="2" vectorEffect="non-scaling-stroke" className="rp-draw" style={{ '--d': '.3s' }} />
          <path d={ecg} pathLength="1000" fill="none" stroke="var(--color-accent-400)" strokeOpacity=".7" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="rp-run" style={{ '--d': '1.8s', filter: 'drop-shadow(0 0 4px var(--color-accent-400))' }} />
        </svg>
        <Flask className="rp-float-in absolute left-[4%] top-10 w-12 text-white/10" style={{ '--r': '-12deg', '--d': '.5s' }} />
        <Dna className="rp-float-in absolute right-[30%] top-6 hidden h-16 text-white/10 lg:block" style={{ '--r': '18deg', '--d': '.7s', '--dur': '9s' }} />
        <TestTube className="rp-float-in absolute right-[4%] bottom-10 w-10 text-white/10" style={{ '--r': '20deg', '--d': '.9s' }} />
        <Molecule className="rp-float-in absolute left-[40%] bottom-6 hidden w-12 text-white/10 md:block" style={{ '--d': '1.1s', '--dur': '10s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          dark
          eyebrow="Featured offers"
          icon={FaTags}
          title="Handpicked"
          highlight="health offers"
          description="Limited-period prices on our most-booked screenings. Tap an offer to see what's inside."
        >
          <SliderNav dark swiper={swiper} />
        </SectionHeader>
      </div>

      {/* Showcase slider: active banner centred, neighbours shrink and fade */}
      <div className="rp-blur-in relative mt-8" style={{ '--d': '.3s' }}>
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiper}
          onSlideChange={(s) => setActive(s.realIndex % offers.length)}
          onAutoplayTimeLeft={(_, __, progress) => tabsRef.current?.style.setProperty('--ap', String(1 - progress))}
          loop
          centeredSlides
          grabCursor
          spaceBetween={16}
          slidesPerView={1.15}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 1.4, spaceBetween: 20 },
            1024: { slidesPerView: 1.9, spaceBetween: 28 },
            1280: { slidesPerView: 2.3, spaceBetween: 32 },
            1536: { slidesPerView: 2.6, spaceBetween: 36 },
          }}
          style={{ paddingBlock: 16 }}
        >
          {loopSlides.map((o, i) => (
            <SwiperSlide key={`${o.name}-${i}`} className="group/slide">
              <Link
                href="/package"
                aria-label={`${o.name} — ${inr(o.price)}, ${o.discount}% off`}
                className="group relative block scale-[.86] rounded-[28px] p-[2px] opacity-45 transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-[.swiper-slide-active]/slide:scale-100 group-[.swiper-slide-active]/slide:opacity-100"
              >
                {/* gradient frame on the active slide */}
                <span className="absolute inset-0 rounded-[28px] bg-white/15 transition-opacity duration-700" />
                <span className="absolute inset-0 rounded-[28px] bg-linear-to-br from-brand-200 via-accent-400 to-brand-300 rp-gradient-pan opacity-0 transition-opacity duration-700 group-[.swiper-slide-active]/slide:opacity-100" />

                <span className="relative block overflow-hidden rounded-[26px] bg-white">
                  <img
                    src={o.image}
                    alt={o.name}
                    width={1280}
                    height={670}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="block aspect-[1280/670] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/4 -skew-x-12 bg-linear-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 group-hover:left-[130%]" />

                  {/* CTA chip, active slide only */}
                  <span className="absolute right-3 top-3 flex h-10 translate-y-[-150%] items-center gap-2 rounded-full bg-white/95 pl-4 pr-1.5 text-sm font-semibold text-brand-700 backdrop-blur transition-transform duration-500 delay-200 group-[.swiper-slide-active]/slide:translate-y-0 sm:right-4 sm:top-4">
                    Book now
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-accent-500 text-[11px] text-white">
                      <FaArrowRight />
                    </span>
                  </span>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Offer tabs with autoplay timer */}
      <div className="relative mt-6 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div ref={tabsRef} className="flex gap-3 overflow-x-auto pb-1 scrollbar-none lg:grid lg:grid-cols-5 lg:overflow-visible" role="tablist" aria-label="Featured offers">
          {offers.map((o, i) => {
            const on = active === i;
            return (
              <button
                key={o.name}
                role="tab"
                aria-selected={on}
                onClick={() => swiper?.slideToLoop(i)}
                className={`rp-slide-right group relative w-60 shrink-0 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 lg:w-auto ${
                  on ? 'border-white/40 bg-white text-gray-900' : 'border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/15'
                }`}
                style={{ '--d': `${0.5 + i * 0.07}s` }}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition ${
                      on ? 'bg-linear-to-br from-brand-600 to-accent-500 text-white' : 'bg-white/15 text-white'
                    }`}
                  >
                    {o.discount}%
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold">{o.name}</span>
                    <span className={`block text-xs ${on ? 'text-gray-500' : 'text-white/60'}`}>
                      <span className={`font-bold ${on ? 'text-brand-700' : 'text-white'}`}>{inr(o.price)}</span> · {o.tests} {o.tests === 1 ? 'test' : 'tests'}
                    </span>
                  </span>
                </span>

                {/* autoplay timer */}
                <span className={`absolute inset-x-0 bottom-0 h-1 ${on ? 'bg-brand-100' : 'bg-transparent'}`}>
                  {on && (
                    <span
                      className="block h-full bg-linear-to-r from-brand-600 to-accent-500"
                      style={{ width: 'calc(var(--ap, 0) * 100%)' }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
