'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaArrowRight, FaFire, FaChevronDown, FaTimes } from 'react-icons/fa';
import { Flask, Dna, TestTube } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader } from './SectionKit';

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
];

const MOBILE_LIMIT = 9;

function CategoryTile({ label, icon, index, hiddenOnMobile, tileRef }) {
  return (
    <Link
      ref={tileRef}
      href="/fullbody"
      className={`rp-blur-in group relative block rounded-3xl p-px transition-transform duration-500 hover:-translate-y-1 ${hiddenOnMobile ? 'max-sm:hidden' : ''}`}
      style={{
        '--d': `${0.3 + Math.min(index, 15) * 0.04}s`,
        background:
          'radial-gradient(240px circle at var(--mx, -999px) var(--my, -999px), var(--color-accent-400), transparent 60%), var(--color-brand-100)',
      }}
    >
      <span className="relative flex h-full flex-col items-center overflow-hidden rounded-[23px] bg-white px-3 pb-4 pt-5 text-center">
        {/* inner spotlight wash */}
        <span
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(180px circle at var(--mx, -999px) var(--my, -999px), var(--color-brand-50), transparent 70%)' }}
        />

        {/* arrow badge */}
        <span className="absolute right-2.5 top-2.5 flex h-7 w-7 scale-50 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-accent-500 text-[10px] text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <FaArrowRight />
        </span>

        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-brand-50 to-pink-50 sm:h-[72px] sm:w-[72px]">
          <span className="absolute -inset-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="rp-spin-slow block h-full w-full rounded-full border-2 border-dashed border-brand-300" />
          </span>
          <img
            src={icon}
            alt=""
            width={70}
            height={70}
            loading="lazy"
            className="h-10 w-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:h-12 sm:w-12"
          />
        </span>

        <span className="relative mt-3 text-sm font-semibold text-gray-800 transition-colors group-hover:text-brand-700 sm:text-[15px]">
          {label}
        </span>
        <span className="relative mt-0.5 text-[11px] font-medium text-gray-400 transition-colors group-hover:text-accent-500">Explore tests</span>
      </span>
    </Link>
  );
}

export default function HealthCheckupSlider() {
  const sectionRef = useReveal();
  const tileRefs = useRef([]);
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const q = query.trim().toLowerCase();
  const visible = q ? packages.filter((p) => p.label.toLowerCase().includes(q)) : packages;
  const collapsible = !q && visible.length > MOBILE_LIMIT;

  // One spotlight for the whole grid: every tile gets the pointer position in its own coordinates.
  const onMouseMove = (e) => {
    tileRefs.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  };
  const onMouseLeave = () => {
    tileRefs.current.forEach((el) => {
      el?.style.removeProperty('--mx');
      el?.style.removeProperty('--my');
    });
  };

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-white py-12 lg:py-16">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="rp-drift absolute -left-24 top-0 h-64 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="rp-drift absolute -right-24 bottom-0 h-64 w-96 rounded-full bg-pink-100/70 blur-3xl" style={{ animationDelay: '-5s' }} />
        <Dna className="rp-float-in absolute left-[48%] top-4 hidden h-14 text-brand-600/15 lg:block" style={{ '--r': '16deg', '--d': '.6s', '--dur': '9s' }} />
        <TestTube className="rp-float-in absolute right-[3%] bottom-8 hidden w-10 text-brand-600/15 md:block" style={{ '--r': '20deg', '--d': '.8s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Popular categories"
          icon={FaFire}
          title="Frequently"
          highlight="booked tests"
          description="The categories people book most — tap one to see every test and package inside."
        >
          <label className="relative flex h-11 w-full items-center rounded-full border border-brand-200 bg-white pl-4 pr-2 transition focus-within:border-brand-400 sm:w-72 lg:h-12">
            <FaSearch className="shrink-0 text-brand-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories"
              aria-label="Search categories"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="flex h-7 w-7 items-center justify-center rounded-full text-xs text-gray-400 transition hover:bg-brand-50 hover:text-brand-600"
              >
                <FaTimes />
              </button>
            )}
          </label>
        </SectionHeader>

        {visible.length > 0 ? (
          <div
            className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 xl:grid-cols-8"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            {visible.map((p, i) => (
              <CategoryTile
                key={p.label}
                {...p}
                index={i}
                hiddenOnMobile={collapsible && !showAll && i >= MOBILE_LIMIT}
                tileRef={(el) => (tileRefs.current[i] = el)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-brand-200 bg-brand-50/40 py-10 text-center">
            <Flask className="h-12 w-12 text-brand-400" />
            <p className="mt-3 font-semibold text-gray-800">No category matches “{query}”</p>
            <p className="mt-1 text-sm text-gray-500">Try another word, or browse all packages.</p>
            <Link href="/fullbody" className="mt-4 flex h-11 items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-accent-500 px-5 text-sm font-semibold text-white">
              Browse all <FaArrowRight className="text-xs" />
            </Link>
          </div>
        )}

        {collapsible && (
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="flex h-11 items-center gap-2 rounded-full border border-brand-200 bg-white px-5 text-sm font-semibold text-brand-700 transition hover:border-brand-400"
            >
              {showAll ? 'Show less' : `View all ${packages.length} categories`}
              <FaChevronDown className={`text-xs transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
