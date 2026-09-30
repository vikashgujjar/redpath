'use client';

import { useCallback, useEffect, useState } from 'react';
import { FaTimes, FaGift, FaCheck, FaPercent, FaHome, FaClock } from 'react-icons/fa';
import { Flask, TestTube, Dna, Molecule } from './LabVectors';

const SEEN_KEY = 'rp-offer-popup-seen';
const perks = [
  { icon: FaPercent, text: 'Up to 78% off on packages' },
  { icon: FaHome, text: 'Free home sample collection' },
  { icon: FaClock, text: 'Reports in as fast as 15 hours' },
];

const isValidIndianMobile = (v) => /^[6-9]\d{9}$/.test(v);

export default function PhonePopup() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Show once per browser session, 5s after landing.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1';
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {}
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 250);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && close();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  if (!open) return null;

  const valid = isValidIndianMobile(phone);
  const showError = touched && phone.length > 0 && !valid;

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid || !agree) return;
    // TODO: send `phone` to the leads API / CRM once it exists — nothing is transmitted yet.
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="offer-title">
      <div className={`absolute inset-0 bg-brand-900/40 backdrop-blur-sm ${closing ? 'rp-fade-out' : 'rp-fade-in'}`} onClick={close} />

      <div className={`relative grid w-full max-w-3xl overflow-hidden rounded-[32px] bg-white md:grid-cols-[1fr_1.1fr] ${closing ? 'rp-modal-out' : 'rp-modal-in'}`}>
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white/80 text-gray-500 backdrop-blur transition hover:rotate-90 hover:border-brand-300 hover:text-brand-600 md:border-brand-100"
        >
          <FaTimes />
        </button>

        {/* Offer panel */}
        <div className="relative overflow-hidden bg-linear-to-br from-brand-700 via-brand-600 to-accent-500 p-6 text-white sm:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-[.12] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
          <Flask className="rp-float-in pointer-events-none absolute -right-4 -top-2 w-24 text-white/15" style={{ '--r': '16deg', '--d': '.3s' }} />
          <Dna className="rp-float-in pointer-events-none absolute bottom-4 right-8 hidden h-20 text-white/10 md:block" style={{ '--r': '-12deg', '--d': '.5s', '--dur': '9s' }} />
          <Molecule className="rp-float-in pointer-events-none absolute -bottom-4 left-4 hidden w-16 text-white/10 md:block" style={{ '--d': '.7s', '--dur': '11s' }} />

          <div className="relative">
            <span className="rp-pop inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl ring-1 ring-white/30" style={{ '--d': '.15s' }}>
              <FaGift />
            </span>
            <h2 id="offer-title" className="rp-blur-in mt-4 text-2xl font-extrabold leading-tight sm:text-3xl" style={{ '--d': '.2s' }}>
              Exclusive discounts <span className="text-pink-200">await!</span>
            </h2>
            <p className="rp-blur-in mt-2 text-sm text-white/80" style={{ '--d': '.3s' }}>
              Unlock our best prices on tests and health packages.
            </p>
            <ul className="mt-5 hidden space-y-2.5 md:block">
              {perks.map(({ icon: Icon, text }, i) => (
                <li key={text} className="rp-slide-right flex items-center gap-3 text-sm" style={{ '--d': `${0.4 + i * 0.08}s` }}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs ring-1 ring-white/25">
                    <Icon />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form panel */}
        <div className="relative p-6 sm:p-8">
          {submitted ? (
            <div className="rp-drop-in flex h-full flex-col items-center justify-center py-6 text-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-2xl text-white">
                <span className="absolute inset-0 rounded-full bg-green-500 rp-ring" />
                <FaCheck className="relative" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-gray-900">You&apos;re all set!</h3>
              <p className="mt-2 text-sm text-gray-600">
                We&apos;ll share the best offers on <span className="font-semibold text-gray-900">+91 {phone}</span>.
              </p>
              <button
                onClick={close}
                className="mt-6 flex h-12 items-center rounded-full bg-linear-to-r from-brand-600 to-accent-500 px-8 text-sm font-semibold text-white"
              >
                Start exploring
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex h-full flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Get offers on your phone</p>
              <label htmlFor="offer-phone" className="mt-4 block text-sm font-semibold text-gray-800">
                Mobile number
              </label>
              <div
                className={`mt-2 flex h-12 items-center overflow-hidden rounded-full border bg-white transition focus-within:ring-4 ${
                  showError ? 'border-red-300 focus-within:ring-red-100' : 'border-brand-200 focus-within:border-brand-400 focus-within:ring-brand-100'
                }`}
              >
                <span className="flex h-full items-center gap-2 border-r border-brand-100 bg-brand-50 px-4 text-sm font-semibold text-gray-700">
                  <img src="https://flagcdn.com/w40/in.png" alt="" width={20} height={14} className="h-3.5 w-5 rounded-sm" />
                  +91
                </span>
                <input
                  id="offer-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  onBlur={() => setTouched(true)}
                  placeholder="10-digit mobile number"
                  aria-invalid={showError}
                  aria-describedby="offer-phone-hint"
                  className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
                {valid && (
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
                    <FaCheck />
                  </span>
                )}
              </div>
              <p id="offer-phone-hint" className={`mt-1.5 min-h-[1rem] text-xs ${showError ? 'text-red-500' : 'text-gray-400'}`}>
                {showError ? 'Enter a valid 10-digit Indian mobile number.' : `${phone.length}/10 digits`}
              </p>

              <label className="mt-3 flex items-start gap-2.5 text-xs text-gray-500">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded accent-[var(--color-brand-600)]"
                />
                <span>
                  By continuing, you agree to our{' '}
                  <a href="#" className="font-semibold text-brand-700 underline underline-offset-2">T&amp;C</a> and{' '}
                  <a href="#" className="font-semibold text-brand-700 underline underline-offset-2">Privacy Policy</a>.
                </span>
              </label>

              <button
                type="submit"
                disabled={!valid || !agree}
                className="group relative mt-5 flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-brand-600 to-accent-500 text-sm font-semibold text-white transition enabled:hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <TestTube className="h-5 w-5" />
                Unlock offers
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
