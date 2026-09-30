'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';
import { FaHeartbeat, FaVial, FaSyringe, FaHome, FaClock, FaShieldAlt, FaArrowRight, FaCheck } from 'react-icons/fa';
import { GiLiver, GiKidneys } from 'react-icons/gi';
import { MdBloodtype } from 'react-icons/md';
import { Flask, TestTube, Dna, Molecule, Microscope, BloodDrop, ecgPath } from './LabVectors';

const script = Dancing_Script({ subsets: ['latin'], weight: ['700'] });

const pkg = {
  name: 'HealthQuest Wellness Package',
  price: 499,
  mrp: 1599,
  discount: 70,
  tests: 67,
  params: [
    { icon: MdBloodtype, name: 'Anaemia', sub: 'CBC', tint: 'text-red-500 bg-red-50' },
    { icon: FaHeartbeat, name: 'Heart', sub: 'Cholesterol', tint: 'text-accent-500 bg-pink-50' },
    { icon: FaSyringe, name: 'Diabetes', sub: 'FBS', tint: 'text-sky-600 bg-sky-50' },
    { icon: FaVial, name: 'Urine', sub: 'RE/ME', tint: 'text-amber-600 bg-amber-50' },
    { icon: GiLiver, name: 'Liver', sub: 'Bilirubin, AST, ALT, SGOT/SGPT, ALP', tint: 'text-orange-600 bg-orange-50' },
    { icon: GiKidneys, name: 'Kidney', sub: 'Urea, Creatinine, Uric acid, BUN', tint: 'text-brand-600 bg-brand-50' },
  ],
};

const highlights = [
  { icon: FaHome, text: 'Free home collection' },
  { icon: FaClock, text: 'Reports in 15 hrs' },
  { icon: FaShieldAlt, text: 'Accurate results' },
];

const vectors = [
  { C: Flask, cls: 'left-[3%] top-10 w-12', r: '-14deg', d: '1s', dur: '7s' },
  { C: Dna, cls: 'left-[40%] top-6 w-6 hidden lg:block', r: '20deg', d: '1.2s', dur: '9s' },
  { C: Molecule, cls: 'left-[6%] bottom-10 w-12 hidden md:block', r: '0deg', d: '1.4s', dur: '10s' },
  { C: BloodDrop, cls: 'left-[45%] bottom-16 w-8 hidden lg:block', r: '-8deg', d: '1.6s', dur: '8s' },
  { C: TestTube, cls: 'right-[3%] top-8 w-10 hidden md:block', r: '22deg', d: '1.1s', dur: '6.5s' },
  { C: Microscope, cls: 'right-[4%] bottom-6 w-12 hidden lg:block', r: '-6deg', d: '1.5s', dur: '8.5s' },
];

function useCountUp(target, { duration = 1400, delay = 0 } = {}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf;
    let start;
    const step = (ts) => {
      start ??= ts;
      const p = Math.min(1, (ts - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const t = setTimeout(() => (raf = requestAnimationFrame(step)), delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay]);
  return value;
}

// Subtle 3D tilt that follows the pointer.
function useTilt(max = 6) {
  const ref = useRef(null);
  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`;
  };
  const onMouseLeave = () => {
    ref.current.style.transform = '';
  };
  return { ref, onMouseMove, onMouseLeave };
}

function PackageCard() {
  const discount = useCountUp(pkg.discount, { delay: 1300 });
  const price = useCountUp(pkg.price, { delay: 1300 });
  const tests = useCountUp(pkg.tests, { delay: 1300 });
  const tilt = useTilt();

  return (
    <div className="rp-blur-in w-full max-w-md mx-auto lg:mx-0 lg:ml-auto" style={{ '--d': '.8s' }}>
      <div
        {...tilt}
        className="relative rounded-[28px] p-[1.5px] bg-linear-to-r from-brand-600 via-accent-400 to-brand-600 rp-gradient-pan shadow-2xl shadow-brand-200 transition-transform duration-300 ease-out will-change-transform"
      >
        <div className="relative overflow-hidden rounded-[27px] bg-white/95 backdrop-blur-xl p-5 sm:p-6">
          <Flask className="absolute -right-3 -top-3 w-20 text-brand-600/10" />

          <p className={`${script.className} text-3xl leading-none text-gray-800`}>Introducing</p>
          <h2 className="mt-2 inline-block rounded-xl bg-linear-to-r from-brand-700 to-brand-500 px-3 py-1.5 text-base sm:text-lg font-extrabold uppercase tracking-wide text-white shadow-md shadow-brand-200">
            {pkg.name}
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Starting from <span className="text-lg font-extrabold text-brand-700">₹{pkg.price}</span>
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-2">
            {pkg.params.map(({ icon: Icon, name, sub, tint }, i) => (
              <li
                key={name}
                className="rp-slide-right group flex items-start gap-2.5 rounded-2xl border border-brand-100 bg-white p-2.5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md hover:shadow-brand-100"
                style={{ '--d': `${1 + i * 0.07}s` }}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-base transition group-hover:scale-110 ${tint}`}>
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-gray-800">{name}</span>
                  <span className="block truncate text-[11px] text-gray-500" title={sub}>{sub}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-3 divide-x divide-brand-100 rounded-2xl bg-linear-to-r from-brand-50 to-pink-50 py-3 text-center">
            <div>
              <p className="text-2xl font-extrabold text-brand-700">{discount}%</p>
              <p className="text-[11px] font-medium text-gray-500">Discount</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-900">₹{price}</p>
              <p className="text-[11px] font-medium text-gray-500">
                MRP <span className="line-through">₹{pkg.mrp}</span>
              </p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-accent-500">{tests}</p>
              <p className="text-[11px] font-medium text-gray-500">Tests</p>
            </div>
          </div>

          <Link
            href="/package"
            className="rp-shine group relative mt-4 flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-accent-500 to-brand-600 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-pink-200 transition hover:brightness-110"
            style={{ '--d': '2.2s' }}
          >
            Book Now
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function DoctorVisual() {
  return (
    <div className="relative hidden md:flex h-full min-h-[420px] items-end justify-center self-end">
      {/* rotating dashed ring */}
      <div className="rp-fade-in absolute left-1/2 top-4 aspect-square w-[108%] -translate-x-1/2" style={{ animationDelay: '.6s' }}>
        <div className="rp-spin-slow h-full w-full rounded-full border-2 border-dashed border-brand-200" />
      </div>
      {/* arch */}
      <div
        className="rp-grow-up absolute bottom-0 left-1/2 h-[72%] w-[82%] -translate-x-1/2 overflow-hidden rounded-t-full bg-linear-to-b from-brand-500 via-brand-600 to-accent-500 shadow-2xl shadow-brand-300/40"
        style={{ '--d': '.35s' }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px]" />
        <Dna className="absolute left-4 top-1/4 h-24 text-white/25" />
        <Molecule className="absolute right-4 bottom-1/3 w-12 text-white/20 rp-spin-slow" />
      </div>

      <img
        src="/Image/hero-doctor-cutout.webp"
        alt="Redpath Diagnostics doctor"
        width={591}
        height={833}
        className="rp-blur-in relative z-10 h-[400px] lg:h-[470px] xl:h-[500px] w-auto max-w-none drop-shadow-[0_20px_30px_rgba(58,10,92,0.25)]"
        style={{ '--d': '.6s' }}
      />

      {/* floating glass chips */}
      <div
        className="rp-float-in absolute left-0 top-[30%] z-20 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/85 px-3 py-2 shadow-xl shadow-brand-200/60 backdrop-blur-md"
        style={{ '--d': '1.3s', '--dur': '6s' }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <FaHome />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-bold text-gray-800">Home Collection</span>
          <span className="block text-[10px] text-gray-500">At your doorstep</span>
        </span>
      </div>

      <div
        className="rp-float-in absolute -right-2 bottom-[18%] z-20 w-44 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl shadow-brand-200/60 backdrop-blur-md"
        style={{ '--d': '1.6s', '--dur': '7s' }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
            <FaCheck />
          </span>
          <span className="leading-tight">
            <span className="block text-xs font-bold text-gray-800">Report ready</span>
            <span className="block text-[10px] text-gray-500">Sent to your phone</span>
          </span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-50">
          <div className="rp-fill h-full w-full rounded-full bg-linear-to-r from-brand-600 to-accent-500" style={{ '--d': '2s' }} />
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  const headline = ['Your', 'path', 'to'];
  const ecg = ecgPath(1200, 240);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-pink-50">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[.06] bg-[radial-gradient(var(--color-brand-600)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="rp-drift absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-200/60 blur-3xl" />
        <div className="rp-drift absolute right-0 -bottom-24 h-80 w-[28rem] rounded-full bg-pink-200/60 blur-3xl" style={{ animationDelay: '-6s' }} />
        <svg className="absolute left-0 top-1/2 h-24 w-full -translate-y-1/2" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d={ecg} pathLength="1000" fill="none" stroke="var(--color-brand-400)" strokeOpacity=".18" strokeWidth="2" vectorEffect="non-scaling-stroke" className="rp-draw" style={{ '--d': '.3s' }} />
          <path d={ecg} pathLength="1000" fill="none" stroke="var(--color-accent-400)" strokeOpacity=".5" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="rp-run" style={{ '--d': '2.2s' }} />
        </svg>
        {vectors.map(({ C, cls, r, d, dur }, i) => (
          <C key={i} className={`rp-float-in absolute text-brand-600/20 ${cls}`} style={{ '--r': r, '--d': d, '--dur': dur }} />
        ))}
      </div>

      <div className="relative grid w-full grid-cols-1 items-center gap-8 px-4 pt-10 pb-10 sm:px-6 md:grid-cols-2 md:pb-0 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pt-12 xl:px-12 2xl:px-16">
        {/* Copy */}
        <div className="md:col-span-2 lg:col-span-5 lg:pb-12">
          <span className="rp-pop inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur" style={{ '--d': '.3s' }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent-500 rp-ring" />
              <span className="relative h-2 w-2 rounded-full bg-accent-500" />
            </span>
            New · HealthQuest Wellness Packages
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
            <span className="rp-blur-in block text-2xl font-semibold text-brand-700 sm:text-3xl xl:text-4xl" style={{ '--d': '.4s' }}>
              Redpath Diagnostics:
            </span>
            <span className="mt-2 block">
              {headline.map((w, i) => (
                <span key={w} className="rp-blur-in mr-3 inline-block" style={{ '--d': `${0.55 + i * 0.1}s` }}>
                  {w}
                </span>
              ))}
            </span>
            <span className="relative inline-block">
              <span className="rp-blur-in inline-block bg-linear-to-r from-brand-600 via-accent-500 to-brand-600 rp-gradient-pan bg-clip-text text-transparent" style={{ '--d': '.9s' }}>
                Complete Health
              </span>
              <svg className="absolute -bottom-3 left-0 h-4 w-full" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M0 12 L90 12 L100 4 L110 18 L120 2 L130 16 L138 12 L300 12"
                  pathLength="1000"
                  fill="none"
                  stroke="var(--color-accent-500)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  className="rp-draw"
                  style={{ '--d': '1.2s' }}
                />
              </svg>
            </span>
          </h1>

          <p className="rp-blur-in mt-6 max-w-xl text-base text-gray-600 sm:text-lg" style={{ '--d': '1.1s' }}>
            Accurate lab tests with free home sample collection and fast digital reports — trusted diagnostics for you and your family.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/package"
              className="rp-pop rp-shine group relative flex h-12 items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-brand-600 to-accent-500 px-6 text-sm font-semibold text-white shadow-lg shadow-brand-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              style={{ '--d': '1.25s' }}
            >
              Book Now
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/fullbody"
              className="rp-pop flex h-12 items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-6 text-sm font-semibold text-gray-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md hover:shadow-brand-100"
              style={{ '--d': '1.35s' }}
            >
              <TestTube className="h-5 w-5 text-brand-600" />
              Explore Packages
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map(({ icon: Icon, text }, i) => (
              <li key={text} className="rp-slide-right flex items-center gap-2 text-sm font-medium text-gray-700" style={{ '--d': `${1.45 + i * 0.1}s` }}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm ring-1 ring-brand-100">
                  <Icon className="text-xs" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Doctor */}
        <div className="hidden md:block lg:col-span-3 self-end">
          <DoctorVisual />
        </div>

        {/* Package card */}
        <div className="lg:col-span-4 md:pb-10 lg:pb-12">
          <PackageCard />
        </div>
      </div>
    </section>
  );
};

export default Header;
