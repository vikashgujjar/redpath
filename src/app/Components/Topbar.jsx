'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaUserCircle,
  FaShoppingCart,
  FaMicrophone,
  FaFileUpload,
  FaWhatsapp,
  FaCheckCircle,
  FaHome,
  FaClock,
  FaPercent,
  FaCalendarCheck,
  FaUserMd,
  FaCrosshairs,
  FaChevronDown,
} from 'react-icons/fa';
import LoginDrawer from './Logindraw';
import { Flask, TestTube, Dna, Molecule, Microscope, BloodDrop, PetriDish, ecgPath } from './LabVectors';

const tickerItems = [
  { icon: FaHome, text: 'Free home sample collection' },
  { icon: FaClock, text: 'Reports in as fast as 15 hours' },
  { icon: FaPercent, text: 'Up to 78% off on health packages' },
  { icon: FaCalendarCheck, text: 'Open 365 days a year' },
  { icon: FaUserMd, text: 'On-demand report consultation' },
];

const typedTests = ['Full Body Checkup', 'Thyroid Profile', 'CBC', 'Vitamin D', 'HbA1c', 'Lipid Profile'];

const popularSearches = ['Full Body', 'Thyroid', 'Diabetes', 'Vitamin', 'Fever Panel', 'Heart'];

// Decorative vectors: position, size, tilt, float timing. `hide` keeps small screens uncluttered.
const vectors = [
  { C: Flask, cls: 'left-[2%] top-3 w-9', r: '-12deg', d: '.9s', dur: '6s' },
  { C: Dna, cls: 'left-[14%] -top-2 w-5 hidden md:block', r: '18deg', d: '1.1s', dur: '8s' },
  { C: Molecule, cls: 'left-[27%] bottom-1 w-8 hidden lg:block', r: '0deg', d: '1.3s', dur: '9s' },
  { C: BloodDrop, cls: 'left-[46%] top-1 w-6 hidden xl:block', r: '-8deg', d: '1.5s', dur: '7s' },
  { C: PetriDish, cls: 'right-[30%] bottom-0 w-9 hidden lg:block', r: '6deg', d: '1.2s', dur: '8s' },
  { C: TestTube, cls: 'right-[17%] top-2 w-8 hidden md:block', r: '24deg', d: '1s', dur: '6.5s' },
  { C: Microscope, cls: 'right-[2%] bottom-1 w-10', r: '-6deg', d: '1.4s', dur: '7.5s' },
];

function useTypewriter(words, { typeMs = 85, deleteMs = 45, holdMs = 1400 } = {}) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = holdMs;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typeMs, deleteMs, holdMs]);

  return text;
}

export default function Topbar() {
  const router = useRouter();
  const [location, setLocation] = useState('Mohali');
  const [locating, setLocating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [listening, setListening] = useState(false);
  const [prescription, setPrescription] = useState('');
  const recognitionRef = useRef(null);
  const typed = useTypewriter(typedTests);

  useEffect(() => () => recognitionRef.current?.abort(), []);

  const handleLocationClick = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        setLocation('Current location');
        setLocating(false);
      },
      () => setLocating(false)
    );
  };

  const handleVoice = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }
    const rec = new SR();
    rec.lang = 'en-IN';
    rec.interimResults = true;
    rec.onresult = (e) => setQuery(Array.from(e.results).map((r) => r[0].transcript).join(''));
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recognitionRef.current = rec;
    setListening(true);
    rec.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFocused(false);
    router.push('/fullbody');
  };

  const ecg = ecgPath();

  return (
    <>
      <div className="relative w-full bg-white">
        {/* Announcement ticker */}
        <div className="rp-slide-down relative z-10 overflow-hidden bg-linear-to-r from-brand-700 via-accent-500 to-brand-700 rp-gradient-pan text-white text-[12px] sm:text-[13px]">
          <div className="flex w-max rp-marquee py-1.5">
            {[...tickerItems, ...tickerItems].map(({ icon: Icon, text }, i) => (
              <span key={i} className="flex items-center gap-2 px-6 whitespace-nowrap font-medium tracking-wide">
                <Icon className="text-white/80" />
                {text}
                <span className="ml-6 h-1 w-1 rounded-full bg-white/50" />
              </span>
            ))}
          </div>
        </div>

        {/* Main bar */}
        <div className="relative">
          {/* Backdrop: lab grid, colour blobs, floating vectors */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 opacity-[.07] bg-[radial-gradient(var(--color-brand-600)_0.8px,transparent_0.8px)] [background-size:14px_14px]" />
            <div className="rp-drift absolute -left-10 -top-16 h-40 w-72 rounded-full bg-brand-100 blur-3xl opacity-70" />
            <div className="rp-drift absolute -bottom-20 right-10 h-40 w-80 rounded-full bg-pink-100 blur-3xl opacity-70" style={{ animationDelay: '-7s' }} />
            {vectors.map(({ C, cls, r, d, dur }, i) => (
              <C
                key={i}
                className={`rp-float-in absolute text-brand-600/25 ${cls}`}
                style={{ '--r': r, '--d': d, '--dur': dur }}
              />
            ))}
          </div>

          <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-3 pb-4 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
            {/* Logo + location (+ WhatsApp on mobile) */}
            <div className="flex items-center justify-between gap-3 lg:justify-start lg:gap-5">
              <Link href="/" className="rp-blur-in rp-shine relative block overflow-hidden rounded-md" style={{ '--d': '.25s' }}>
                <img src="/logo.webp" alt="Redpath Diagnostics" className="h-10 lg:h-12 w-auto" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleLocationClick}
                  className="rp-pop group flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 backdrop-blur h-11 lg:h-12 px-3 text-sm text-gray-700 shadow-sm transition hover:border-brand-400 hover:shadow-md hover:shadow-brand-100"
                  style={{ '--d': '.45s' }}
                  title="Use my current location"
                >
                  <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    {locating ? <FaCrosshairs className="animate-spin" /> : <FaMapMarkerAlt />}
                    <span className="absolute inset-0 rounded-full border border-brand-400 rp-ring" />
                  </span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="hidden lg:block text-[10px] uppercase tracking-wider text-gray-400">Collect from</span>
                    <span className="font-semibold text-gray-800 max-w-28 truncate">{locating ? 'Locating…' : location}</span>
                  </span>
                  <FaChevronDown className="hidden lg:block text-[10px] text-gray-400 transition group-hover:translate-y-0.5" />
                </button>

                <a
                  href="https://wa.me/917056997000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="rp-pop relative flex lg:hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500 text-white text-lg shadow-md shadow-green-200"
                  style={{ '--d': '.55s' }}
                >
                  <span className="absolute inset-0 rounded-full bg-green-500 rp-ring" />
                  <FaWhatsapp className="relative" />
                </a>
              </div>
            </div>

            {/* Search */}
            <form onSubmit={handleSubmit} className="relative w-full lg:flex-1 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl lg:mx-auto">
              <div
                className={`rp-expand h-11 lg:h-12 rounded-full p-[1.5px] bg-linear-to-r from-brand-600 via-accent-400 to-brand-600 rp-gradient-pan transition-shadow ${
                  focused ? 'shadow-lg shadow-brand-200' : 'shadow-sm'
                }`}
                style={{ '--d': '.55s' }}
              >
                <div className="flex h-full items-center rounded-full bg-white pl-4 pr-1">
                  <FaSearch className="shrink-0 text-brand-600" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={listening ? 'Listening…' : `Search for ${typed}`}
                    aria-label="Search tests"
                    className="min-w-0 h-full flex-1 bg-transparent px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                  />

                  <div className="flex items-center gap-1 border-l border-gray-200 pl-2">
                    <button
                      type="button"
                      onClick={handleVoice}
                      aria-label="Voice search"
                      title="Voice search"
                      className={`relative flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full transition ${
                        listening ? 'bg-accent-500 text-white' : 'text-accent-500 hover:bg-pink-50'
                      }`}
                    >
                      {listening && <span className="absolute inset-0 rounded-full bg-accent-500 rp-ring" />}
                      <FaMicrophone className="relative" />
                    </button>

                    <label
                      title={prescription ? `Uploaded: ${prescription}` : 'Upload prescription'}
                      className="relative flex h-9 w-9 lg:h-10 lg:w-10 cursor-pointer items-center justify-center rounded-full text-brand-600 transition hover:bg-brand-50"
                    >
                      <FaFileUpload />
                      {prescription && <FaCheckCircle className="absolute -right-0.5 -top-0.5 text-[11px] text-green-500 bg-white rounded-full" />}
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="sr-only"
                        onChange={(e) => setPrescription(e.target.files?.[0]?.name ?? '')}
                      />
                    </label>

                    <button
                      type="submit"
                      className="hidden sm:flex h-9 lg:h-10 items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-accent-500 px-5 text-sm font-semibold text-white shadow-md shadow-brand-200 transition hover:brightness-110 active:scale-95"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>

              {/* Popular searches dropdown */}
              {focused && !query && (
                <div className="rp-drop-in absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-brand-100 bg-white/95 backdrop-blur p-4 shadow-xl shadow-brand-100">
                  <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    <Flask className="h-4 w-4 text-brand-500" /> Popular searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((s) => (
                      <Link
                        key={s}
                        href="/fullbody"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setFocused(false)}
                        className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-600 hover:text-white"
                      >
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </form>

            {/* Cart + Profile */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className="rp-pop group relative flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 backdrop-blur h-12 px-5 text-sm font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md hover:shadow-brand-100"
                style={{ '--d': '.75s' }}
              >
                <FaShoppingCart className="text-brand-600 transition group-hover:-rotate-12" />
                Cart
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="rp-pop group flex items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-brand-500 h-12 px-5 text-sm font-semibold text-white shadow-md shadow-brand-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-200"
                style={{ '--d': '.85s' }}
              >
                <FaUserCircle className="text-lg transition group-hover:scale-110" />
                Profile
              </button>
            </div>
          </div>

          {/* ECG baseline: draws in on load, then a pulse keeps running along it */}
          <svg
            className="absolute bottom-0 left-0 h-5 w-full"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="rp-ecg" x1="0" x2="1">
                <stop offset="0" stopColor="var(--color-brand-600)" />
                <stop offset="1" stopColor="var(--color-accent-500)" />
              </linearGradient>
            </defs>
            <path
              d={ecg}
              pathLength="1000"
              fill="none"
              stroke="url(#rp-ecg)"
              strokeOpacity=".3"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              className="rp-draw"
              style={{ '--d': '.2s' }}
            />
            <path
              d={ecg}
              pathLength="1000"
              fill="none"
              stroke="url(#rp-ecg)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="rp-run"
              style={{ '--d': '2s', filter: 'drop-shadow(0 0 3px var(--color-accent-400))' }}
            />
          </svg>
        </div>
      </div>

      <LoginDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
