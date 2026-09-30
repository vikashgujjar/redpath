'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaFileAlt, FaCalendarCheck, FaUser } from 'react-icons/fa';
import { TestTube } from './LabVectors';

const items = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/login', label: 'Reports', icon: FaFileAlt },
  null, // centre action
  { href: '/login', label: 'Bookings', icon: FaCalendarCheck },
  { href: '/login', label: 'Profile', icon: FaUser },
];

export default function MobileFooterNav() {
  const pathname = usePathname();
  const activeIdx = items.findIndex((it) => it && it.href === pathname);

  return (
    <>
      {/* The footer reserves bottom space on mobile so this floating bar never covers content. */}
      <nav
        className="rp-slide-up fixed inset-x-3 bottom-3 z-50 md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)', '--d': '.6s' }}
        aria-label="Quick navigation"
      >
        <div className="relative flex h-16 items-center justify-between rounded-[26px] border border-brand-100 bg-white/85 px-2 backdrop-blur-xl">
          <span className="pointer-events-none absolute inset-0 rounded-[26px] bg-linear-to-r from-brand-50/70 via-transparent to-pink-50/70" />

          {items.map((it, i) => {
            if (!it) {
              return (
                <Link
                  key="book"
                  href="/package"
                  aria-label="Book a test"
                  className="relative -mt-8 flex flex-col items-center"
                >
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-brand-600 to-accent-500 text-white ring-4 ring-white">
                    <span className="absolute inset-0 rounded-full bg-accent-500 rp-ring" />
                    <TestTube className="relative h-7 w-7" />
                  </span>
                  <span className="mt-1 text-[11px] font-bold text-brand-700">Book</span>
                </Link>
              );
            }
            const Icon = it.icon;
            const on = i === activeIdx;
            return (
              <Link
                key={it.label}
                href={it.href}
                aria-current={on ? 'page' : undefined}
                className="relative flex h-full flex-1 flex-col items-center justify-center gap-1"
              >
                <span
                  className={`flex h-8 w-12 items-center justify-center rounded-full text-lg transition-all duration-300 ${
                    on ? 'bg-linear-to-r from-brand-600 to-accent-500 text-white' : 'text-gray-500'
                  }`}
                >
                  <Icon className="text-base" />
                </span>
                <span className={`text-[11px] font-semibold ${on ? 'text-brand-700' : 'text-gray-500'}`}>{it.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
