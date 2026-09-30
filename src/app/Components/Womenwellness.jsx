'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaVenus, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { Flask, Dna, BloodDrop } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader, SliderNav, SliderProgress, useSliderProgress } from './SectionKit';
import { PackageCard } from './Healthpackage';
import { PHONE } from './navConfig';

const categories = ['All', 'Pregnancy', 'Wellness', 'PCOS/PCOD', 'Sexual Health', 'Menstrual Health', 'Cancer', 'Infertility'];

const packages = [
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '24 hours',
    parameters: 100,
    features: ['Heart', 'Diabetes (HbA1c)', 'Liver', 'Kidney', 'Infection', 'Thyroid'],
    originalPrice: 8700,
    discountedPrice: 2499,
    vipPrice: 2249,
    category: 'All',
  },
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '10 hours',
    parameters: 3,
    features: ['Thyroid', 'Kidney', 'Infection'],
    originalPrice: 650,
    discountedPrice: 299,
    vipPrice: 269,
    category: 'Wellness',
  },
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '30 hours',
    parameters: 107,
    features: ['Thyroid', 'Lipid', 'Vitamins', 'Kidney', 'Infection'],
    originalPrice: 13000,
    discountedPrice: 4499,
    vipPrice: 4049,
    category: 'Pregnancy',
  },
  {
    title: 'Stay Fit Plus Full Body Checkup With Free RA Factor - Female',
    reportsIn: '12 hours',
    parameters: 1,
    features: ['Thyroid', 'Kidney', 'Infection', 'Lipid'],
    originalPrice: 450,
    discountedPrice: 219,
    vipPrice: 197,
    category: 'Menstrual Health',
  },
];

const inCategory = (tab) => (tab === 'All' ? packages : packages.filter((p) => p.category === tab));

export default function Wellness() {
  const sectionRef = useReveal();
  const [progressRef, updateProgress] = useSliderProgress();
  const [swiper, setSwiper] = useState(null);
  const [selectedTab, setSelectedTab] = useState('All');

  const filtered = inCategory(selectedTab);

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-linear-to-b from-white via-pink-50/60 to-white py-12 lg:py-16">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[.05] bg-[radial-gradient(var(--color-accent-500)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="rp-drift absolute -right-24 top-6 h-72 w-96 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="rp-drift absolute -left-24 bottom-0 h-64 w-96 rounded-full bg-brand-100/60 blur-3xl" style={{ animationDelay: '-6s' }} />
        <Dna className="rp-float-in absolute right-[5%] top-8 h-16 text-accent-500/15" style={{ '--r': '16deg', '--d': '.6s', '--dur': '9s' }} />
        <BloodDrop className="rp-float-in absolute left-[44%] top-6 hidden w-8 text-accent-500/15 lg:block" style={{ '--r': '-10deg', '--d': '.8s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Women's health"
          icon={FaVenus}
          title="Women's health &"
          highlight="wellness"
          description="Take control of your health with packages designed for every stage — from menstrual health to pregnancy."
        >
          <SliderNav swiper={swiper} />
        </SectionHeader>

        {/* Category tabs */}
        <div className="rp-slide-right mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-none" style={{ '--d': '.35s' }} role="tablist" aria-label="Women's health categories">
          {categories.map((tab) => {
            const on = tab === selectedTab;
            const count = inCategory(tab).length;
            return (
              <button
                key={tab}
                role="tab"
                aria-selected={on}
                onClick={() => setSelectedTab(tab)}
                className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition ${
                  on
                    ? 'bg-linear-to-r from-accent-500 to-brand-600 text-white'
                    : 'border border-pink-100 bg-white text-gray-700 hover:border-accent-400 hover:text-accent-500'
                }`}
              >
                {tab}
                {count > 0 && (
                  <span className={`rounded-full px-1.5 text-[11px] ${on ? 'bg-white/25' : 'bg-pink-50 text-accent-500'}`}>{count}</span>
                )}
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <>
            <Swiper
              key={selectedTab}
              modules={[Autoplay]}
              onSwiper={(s) => {
                setSwiper(s);
                updateProgress(s);
              }}
              onProgress={updateProgress}
              onBreakpoint={updateProgress}
              rewind
              spaceBetween={16}
              slidesPerView={1.1}
              autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              breakpoints={{
                560: { slidesPerView: 1.6, spaceBetween: 18 },
                768: { slidesPerView: 2.2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 22 },
                1280: { slidesPerView: 3.5, spaceBetween: 24 },
                1536: { slidesPerView: 4.2, spaceBetween: 24 },
              }}
              className="mt-6"
              style={{ overflow: 'visible', paddingBlock: 12 }}
            >
              {filtered.map((pkg, i) => (
                <SwiperSlide key={`${pkg.category}-${pkg.discountedPrice}`} style={{ height: 'auto' }}>
                  <div className="rp-blur-in h-full" style={{ '--d': `${0.3 + Math.min(i, 4) * 0.1}s` }}>
                    <PackageCard pkg={pkg} delay={`${0.6 + Math.min(i, 4) * 0.1}s`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <SliderProgress progressRef={progressRef} label={`${filtered.length} ${filtered.length === 1 ? 'package' : 'packages'}`} />
          </>
        ) : (
          <div className="rp-drop-in mt-8 flex flex-col items-center rounded-3xl border border-dashed border-pink-200 bg-white/70 px-6 py-12 text-center">
            <Flask className="h-12 w-12 text-accent-400" />
            <p className="mt-3 text-lg font-bold text-gray-900">{selectedTab} packages are coming soon</p>
            <p className="mt-1 max-w-md text-sm text-gray-500">Our health advisor can recommend the right tests for you today.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <a
                href={`tel:${PHONE.tel}`}
                className="flex h-11 items-center gap-2 rounded-full bg-linear-to-r from-accent-500 to-brand-600 px-5 text-sm font-semibold text-white"
              >
                <FaPhoneAlt className="text-xs" /> Talk to an advisor
              </a>
              <Link
                href="/fullbody"
                className="flex h-11 items-center gap-2 rounded-full border border-pink-200 bg-white px-5 text-sm font-semibold text-gray-700 transition hover:border-accent-400"
              >
                Browse all <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
