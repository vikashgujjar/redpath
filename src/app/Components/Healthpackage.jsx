'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaHeart, FaClock, FaBolt, FaCrown, FaArrowRight, FaBoxOpen, FaTint, FaShieldVirus, FaSun } from 'react-icons/fa';
import { GiLiver, GiKidneys } from 'react-icons/gi';
import { MdBloodtype, MdAssignment } from 'react-icons/md';
import { Flask, TestTube, Microscope, BloodDrop } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader, SliderNav, SliderProgress, useSliderProgress } from './SectionKit';

const featureIcons = {
  Heart: { icon: FaHeart, tint: 'text-accent-500 bg-pink-50' },
  Liver: { icon: GiLiver, tint: 'text-orange-600 bg-orange-50' },
  Kidney: { icon: GiKidneys, tint: 'text-brand-600 bg-brand-50' },
  'Diabetes (HbA1c)': { icon: MdBloodtype, tint: 'text-red-500 bg-red-50' },
  'Diabetes / Sugar': { icon: MdBloodtype, tint: 'text-red-500 bg-red-50' },
  Diabetes: { icon: MdBloodtype, tint: 'text-red-500 bg-red-50' },
  Lipid: { icon: FaTint, tint: 'text-amber-600 bg-amber-50' },
  Infection: { icon: FaShieldVirus, tint: 'text-emerald-600 bg-emerald-50' },
  Thyroid: { icon: MdAssignment, tint: 'text-sky-600 bg-sky-50' },
  Vitamins: { icon: FaSun, tint: 'text-yellow-600 bg-yellow-50' },
};

// Names/prices for the first three match the /fullbody catalogue.
const packages = [
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '15 hours',
    parameters: 92,
    features: ['Heart', 'Diabetes (HbA1c)', 'Lipid', 'Liver', 'Kidney'],
    originalPrice: 7614,
    discountedPrice: 1599,
    vipPrice: 1439,
  },
  {
    title: 'Fit India Full Body Checkup with Free HbA1c',
    reportsIn: '15 hours',
    parameters: 89,
    features: ['Diabetes (HbA1c)', 'Lipid', 'Liver', 'Kidney'],
    originalPrice: 5233,
    discountedPrice: 1099,
    vipPrice: 989,
  },
  {
    title: 'Advance Plus Full Body Checkup with Free HsCRP',
    reportsIn: '15 hours',
    parameters: 98,
    features: ['Heart', 'Vitamins', 'Liver', 'Kidney', 'Diabetes'],
    originalPrice: 8260,
    discountedPrice: 2199,
    vipPrice: 1979,
  },
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '24 hours',
    parameters: 120,
    features: ['Heart', 'Liver', 'Kidney', 'Thyroid', 'Vitamins'],
    originalPrice: 9500,
    discountedPrice: 2499,
    vipPrice: 2249,
  },
  {
    title: 'Fit India Full Body Checkup With Vitamin Screening with Free HsCRP',
    reportsIn: '12 hours',
    parameters: 65,
    features: ['Heart', 'Lipid', 'Liver', 'Diabetes / Sugar', 'Kidney'],
    originalPrice: 4500,
    discountedPrice: 999,
    vipPrice: 899,
  },
];

const priceFilters = [
  { key: 'all', label: 'All', test: () => true },
  { key: 'under-1k', label: 'Under ₹1,000', test: (p) => p < 1000 },
  { key: '1k-2k', label: '₹1,000 – ₹2,000', test: (p) => p >= 1000 && p <= 2000 },
  { key: '2k-plus', label: 'Above ₹2,000', test: (p) => p > 2000 },
];

const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

function DiscountRing({ pct, delay }) {
  const r = 22;
  const len = 2 * Math.PI * r;
  return (
    <div className="relative h-16 w-16 shrink-0">
      <svg viewBox="0 0 56 56" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id="rp-ring-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="var(--color-brand-600)" />
            <stop offset="1" stopColor="var(--color-accent-500)" />
          </linearGradient>
        </defs>
        <circle cx="28" cy="28" r={r} fill="white" stroke="var(--color-brand-100)" strokeWidth="5" />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="url(#rp-ring-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={len}
          strokeDashoffset={len * (1 - pct / 100)}
          className="rp-dash"
          style={{ '--len': len, '--d': delay }}
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-sm font-extrabold text-brand-700">{pct}%</span>
        <span className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-500">off</span>
      </span>
    </div>
  );
}

export function PackageCard({ pkg, delay }) {
  const pct = Math.floor((1 - pkg.discountedPrice / pkg.originalPrice) * 100);
  const features = [...new Set(pkg.features.map((f) => f.trim()))];
  const shown = features.slice(0, 4);
  const more = features.length - shown.length;

  return (
    <article className="group relative h-full rounded-[28px] p-[1.5px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-200">
      <span className="absolute inset-0 rounded-[28px] bg-brand-100" />
      <span className="absolute inset-0 rounded-[28px] bg-linear-to-br from-brand-500 via-accent-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[27px] bg-white">
        {/* Top */}
        <div className="relative bg-linear-to-br from-brand-50 via-white to-pink-50 px-5 pt-5 pb-4">
          <div className="pointer-events-none absolute inset-0 opacity-[.07] bg-[radial-gradient(var(--color-brand-600)_1px,transparent_1px)] [background-size:12px_12px]" />
          <Flask className="pointer-events-none absolute -bottom-4 right-16 w-16 text-brand-600/[.07] transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-brand-100">
                  <FaClock className="text-brand-500" /> {pkg.reportsIn}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-700 ring-1 ring-brand-100">
                  <TestTube className="h-3.5 w-3.5 text-brand-500" /> {pkg.parameters} params
                </span>
              </div>
              <h3 className="mt-3 line-clamp-2 min-h-[2.75rem] text-[15px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand-700">
                {pkg.title}
              </h3>
            </div>
            <DiscountRing pct={pct} delay={delay} />
          </div>
        </div>

        {/* Includes */}
        <div className="flex-1 px-5 py-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400">Includes</p>
          <div className="flex flex-wrap gap-1.5">
            {shown.map((f) => {
              const meta = featureIcons[f] ?? { icon: FaBoxOpen, tint: 'text-gray-500 bg-gray-100' };
              const Icon = meta.icon;
              return (
                <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-gray-100 bg-white py-1 pl-1 pr-2.5 text-xs font-medium text-gray-700">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${meta.tint}`}>
                    <Icon />
                  </span>
                  {f}
                </span>
              );
            })}
            {more > 0 && (
              <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">+{more} more</span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="border-t border-dashed border-brand-100 px-5 pt-4 pb-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-accent-500">
                <FaBolt /> Limited time deal
              </p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-gray-900">{inr(pkg.discountedPrice)}</span>
                <span className="text-sm text-gray-400 line-through">{inr(pkg.originalPrice)}</span>
              </p>
              <p className="text-xs font-semibold text-emerald-600">You save {inr(pkg.originalPrice - pkg.discountedPrice)}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-linear-to-r from-amber-50 to-yellow-50 px-2.5 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
              <FaCrown className="text-amber-500" /> VIP {inr(pkg.vipPrice)}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-[auto_1fr] gap-2">
            <Link
              href="/package"
              className="flex h-11 items-center justify-center rounded-full border border-brand-200 px-4 text-sm font-semibold text-gray-700 transition hover:border-brand-400 hover:text-brand-700"
            >
              Details
            </Link>
            <Link
              href="/package"
              className="group/btn relative flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-brand-600 to-accent-500 text-sm font-semibold text-white shadow-md shadow-brand-200 transition hover:brightness-110"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/40 transition-all duration-700 group-hover/btn:left-[130%]" />
              Book Now
              <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HealthPackages() {
  const sectionRef = useReveal();
  const [progressRef, updateProgress] = useSliderProgress();
  const [swiper, setSwiper] = useState(null);
  const [filter, setFilter] = useState('all');

  const active = priceFilters.find((f) => f.key === filter);
  const visible = packages.filter((p) => active.test(p.discountedPrice));

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-linear-to-b from-white via-brand-50/50 to-white py-12 lg:py-16">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[.05] bg-[radial-gradient(var(--color-brand-600)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="rp-drift absolute -left-24 top-10 h-64 w-96 rounded-full bg-pink-100/70 blur-3xl" />
        <div className="rp-drift absolute -right-20 bottom-0 h-72 w-96 rounded-full bg-brand-100/70 blur-3xl" style={{ animationDelay: '-7s' }} />
        <Microscope className="rp-float-in absolute right-[5%] top-8 w-12 text-brand-600/15" style={{ '--r': '-8deg', '--d': '.6s', '--dur': '8s' }} />
        <BloodDrop className="rp-float-in absolute left-[42%] top-6 hidden w-8 text-brand-600/15 lg:block" style={{ '--r': '10deg', '--d': '.8s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Health packages"
          icon={FaBoxOpen}
          title="Top"
          highlight="health packages"
          description="Comprehensive checkups at up to 78% off — with free home sample collection and fast digital reports."
        >
          <Link
            href="/fullbody"
            className="group mr-1 flex h-11 lg:h-12 items-center gap-2 rounded-full px-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            View all <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
          <SliderNav swiper={swiper} />
        </SectionHeader>

        {/* Price filters */}
        <div className="rp-slide-right mt-6 flex gap-2 overflow-x-auto scrollbar-none" style={{ '--d': '.35s' }} role="tablist" aria-label="Filter by price">
          {priceFilters.map((f) => {
            const count = packages.filter((p) => f.test(p.discountedPrice)).length;
            const on = f.key === filter;
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(f.key)}
                className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition ${
                  on
                    ? 'bg-linear-to-r from-brand-600 to-accent-500 text-white shadow-md shadow-brand-200'
                    : 'border border-brand-100 bg-white text-gray-700 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                {f.label}
                <span className={`rounded-full px-1.5 text-[11px] ${on ? 'bg-white/25' : 'bg-brand-50 text-brand-600'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <Swiper
          key={filter}
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
          {visible.map((pkg, i) => (
            <SwiperSlide key={`${pkg.title}-${pkg.discountedPrice}`} style={{ height: 'auto' }}>
              <div className="rp-blur-in h-full" style={{ '--d': `${0.3 + Math.min(i, 4) * 0.1}s` }}>
                <PackageCard pkg={pkg} delay={`${0.6 + Math.min(i, 4) * 0.1}s`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderProgress progressRef={progressRef} label={`${visible.length} packages`} />
      </div>
    </section>
  );
}
