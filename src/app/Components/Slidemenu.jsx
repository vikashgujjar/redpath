'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import {
  FaMapMarkerAlt,
  FaClipboardList,
  FaInfoCircle,
  FaLocationArrow,
  FaChevronRight,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { navLinks, PHONE } from './navConfig';
import { Flask, Dna, Molecule, ecgPath } from './LabVectors';

const exploreItems = [
  { icon: FaInfoCircle, label: 'About Us', href: '/about' },
  { icon: FaClipboardList, label: 'Health Blog', href: '/health-blog' },
  { icon: FaMapMarkerAlt, label: 'Lab Locations', href: '/lab-locations' },
  { icon: FaLocationArrow, label: 'Contact', href: '/contact' },
];

function MenuItem({ href, label, icon: Icon, active, delay, onNavigate }) {
  return (
    <li className="rp-slide-right" style={{ '--d': delay }}>
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={active ? 'page' : undefined}
        className={`group flex h-12 items-center gap-3 rounded-2xl px-2 transition ${
          active ? 'bg-brand-50 ring-1 ring-brand-100' : 'hover:bg-brand-50/70'
        }`}
      >
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
            active
              ? 'bg-linear-to-br from-brand-600 to-accent-500 text-white shadow-md shadow-brand-200'
              : 'bg-brand-50 text-brand-600 group-hover:bg-linear-to-br group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white'
          }`}
        >
          <Icon />
        </span>
        <span className={`flex-1 text-sm font-semibold ${active ? 'text-brand-700' : 'text-gray-800'}`}>{label}</span>
        <FaChevronRight className="text-xs text-gray-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
      </Link>
    </li>
  );
}

export default function SidebarMenu({ onClose }) {
  const pathname = usePathname();
  const [closing, setClosing] = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 250);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [close]);

  const activeMain = navLinks.findIndex((l) => l.href === pathname);

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Main menu">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-brand-900/30 backdrop-blur-sm ${closing ? 'rp-fade-out' : 'rp-fade-in'}`}
        onClick={close}
      />

      {/* Panel */}
      <aside
        className={`relative flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl shadow-brand-900/20 ${
          closing ? 'rp-panel-out' : 'rp-panel-in'
        }`}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-brand-100 px-5">
          <Link href="/" onClick={close}>
            <img src="/logo.webp" alt="Redpath Diagnostics" className="h-9 w-auto" />
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-xl text-gray-700 transition hover:rotate-90 hover:border-brand-400 hover:text-brand-600"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Help card */}
        <div className="px-5 pt-5">
          <div className="rp-blur-in relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 via-brand-500 to-accent-500 p-5 text-white shadow-lg shadow-brand-200" style={{ '--d': '.15s' }}>
            <Flask className="rp-float-in absolute -right-2 -top-2 w-16 text-white/20" style={{ '--r': '14deg', '--d': '.4s' }} />
            <Molecule className="rp-float-in absolute bottom-2 right-14 w-10 text-white/15" style={{ '--d': '.6s', '--dur': '9s' }} />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70">Need help booking?</p>
            <p className="mt-1 text-lg font-bold leading-snug">Talk to our health advisor</p>
            <div className="mt-4 flex gap-2">
              <a
                href={`tel:${PHONE.tel}`}
                className="flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-brand-700 shadow-md transition hover:-translate-y-0.5"
              >
                <FaPhoneAlt className="rp-wiggle text-xs" /> Call now
              </a>
              <a
                href="https://wa.me/917056997000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-2 rounded-full bg-white/15 px-4 text-sm font-semibold ring-1 ring-white/40 transition hover:bg-white/25"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex-1 px-5 py-5">
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400">Quick access</p>
          <ul className="space-y-1">
            {navLinks.map((item, i) => (
              <MenuItem key={item.label} {...item} active={activeMain === i} delay={`${0.25 + i * 0.06}s`} onNavigate={close} />
            ))}
          </ul>

          <p className="mb-2 mt-6 px-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400">Explore</p>
          <ul className="space-y-1">
            {exploreItems.map((item, i) => (
              <MenuItem key={item.label} {...item} active={pathname === item.href} delay={`${0.5 + i * 0.06}s`} onNavigate={close} />
            ))}
          </ul>
        </nav>

        {/* Footer: ECG motif */}
        <div className="relative border-t border-brand-100 px-5 py-4">
          <Dna className="absolute right-5 top-1/2 h-10 -translate-y-1/2 text-brand-600/20" />
          <svg viewBox="0 0 600 40" className="h-6 w-2/3" preserveAspectRatio="none" aria-hidden="true">
            <path d={ecgPath(600)} pathLength="1000" fill="none" stroke="var(--color-brand-400)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="rp-draw" style={{ '--d': '.4s' }} />
          </svg>
          <p className="mt-1 text-xs text-gray-400">Defining health through accuracy</p>
        </div>
      </aside>
    </div>
  );
}
