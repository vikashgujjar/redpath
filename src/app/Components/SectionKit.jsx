'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Flask } from './LabVectors';

// Shared building blocks so every section reads as one system.

export function SectionHeader({ eyebrow, icon: Icon, title, highlight, description, children, dark = false }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span className={`rp-pop inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${dark ? 'border-white/20 bg-white/10 text-white backdrop-blur' : 'border-brand-200 bg-brand-50 text-brand-700'}`}>
          {Icon && <Icon className={dark ? 'text-pink-300' : 'text-accent-500'} />} {eyebrow}
        </span>
        <h2 className={`rp-blur-in mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-gray-900'}`} style={{ '--d': '.1s' }}>
          {title}{' '}
          <span className="relative inline-block">
            <span className={`bg-linear-to-r bg-clip-text text-transparent ${dark ? 'from-brand-200 to-pink-300' : 'from-brand-600 to-accent-500'}`}>{highlight}</span>
            <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0 12 L110 12 L120 5 L130 17 L140 3 L150 15 L158 12 L300 12"
                pathLength="1000"
                fill="none"
                stroke={dark ? 'var(--color-accent-400)' : 'var(--color-accent-500)'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                className="rp-draw"
                style={{ '--d': '.5s' }}
              />
            </svg>
          </span>
        </h2>
        {description && (
          <p className={`rp-blur-in mt-4 max-w-xl ${dark ? 'text-white/70' : 'text-gray-600'}`} style={{ '--d': '.2s' }}>
            {description}
          </p>
        )}
      </div>
      {children && (
        <div className="rp-pop flex flex-wrap items-center gap-2" style={{ '--d': '.3s' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export function SliderNav({ swiper, dark = false }) {
  return (
    <>
      <button
        onClick={() => swiper?.slidePrev()}
        aria-label="Previous"
        className={`flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border shadow-sm transition hover:-translate-x-0.5 ${dark ? 'border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20' : 'border-brand-200 bg-white text-brand-600 hover:border-brand-400 hover:shadow-md hover:shadow-brand-100'}`}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        aria-label="Next"
        className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-accent-500 text-white shadow-md shadow-brand-200 transition hover:translate-x-0.5 hover:shadow-lg"
      >
        <FaChevronRight />
      </button>
    </>
  );
}

// Number that counts up (Indian digit grouping) the first time it scrolls into view.
export function CountUp({ value, suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setN(value);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        let start;
        const step = (ts) => {
          start ??= ts;
          const p = Math.min(1, (ts - start) / duration);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

// Returns a ref for <SliderProgress> and an updater to pass to Swiper's onSwiper/onProgress/onBreakpoint.
export function useSliderProgress() {
  const ref = useRef(null);
  const update = useCallback((s) => {
    const perView = typeof s.params.slidesPerView === 'number' ? s.params.slidesPerView : 1;
    const visible = Math.min(1, perView / Math.max(1, s.slides.length));
    ref.current?.style.setProperty('--fill', String(visible + (1 - visible) * s.progress));
  }, []);
  return [ref, update];
}

export function SliderProgress({ progressRef, label }) {
  return (
    <div className="rp-fade-in mx-auto mt-6 flex max-w-md items-center gap-3" style={{ animationDelay: '.6s' }}>
      <Flask className="h-5 w-5 shrink-0 text-brand-500" />
      <div ref={progressRef} className="relative h-1.5 flex-1 rounded-full bg-brand-100">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-brand-600 to-accent-500 transition-[width] duration-500 ease-out"
          style={{ width: 'calc(var(--fill, 0) * 100%)' }}
        >
          <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-accent-500 shadow-md shadow-pink-200" />
        </div>
      </div>
      {label && <span className="shrink-0 text-xs font-semibold text-gray-400">{label}</span>}
    </div>
  );
}
