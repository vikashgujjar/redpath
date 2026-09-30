'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import SidebarMenu from './Slidemenu';
import { TestTube } from './LabVectors';
import { navLinks, PHONE } from './navConfig';

export default function Navbar() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [pill, setPill] = useState(null);
  const headerRef = useRef(null);
  const linkRefs = useRef([]);

  const activeIdx = navLinks.findIndex((l) => l.href === pathname);
  const pillIdx = hovered ?? (activeIdx >= 0 ? activeIdx : null);

  // Floating "island" state + scroll progress (written to a CSS var to avoid re-rendering on every frame).
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        headerRef.current?.style.setProperty('--progress', max > 0 ? String(window.scrollY / max) : '0');
        setScrolled(window.scrollY > 80);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Liquid pill that glides to the hovered (or active) link.
  const measure = useCallback(() => {
    const el = pillIdx === null ? null : linkRefs.current[pillIdx];
    setPill(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
  }, [pillIdx]);

  useLayoutEffect(() => {
    measure();
  }, [measure, scrolled]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <>
      <header
        ref={headerRef}
        className={`rp-slide-down sticky top-0 z-40 transition-[padding] duration-500 ${scrolled ? 'px-2 pt-2 sm:px-4 lg:px-8' : ''}`}
        style={{ '--d': '.15s' }}
      >
        <div
          className={`relative mx-auto overflow-hidden backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
            scrolled
              ? 'max-w-7xl rounded-full border border-brand-100 bg-white/80 shadow-xl shadow-brand-200/50'
              : 'max-w-full rounded-none border-b border-brand-100 bg-white/90 shadow-sm'
          }`}
        >
          {/* faint gradient wash */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-brand-50/80 via-transparent to-pink-50/80" aria-hidden="true" />

          <div
            className={`relative flex items-center justify-between gap-3 transition-all duration-500 ${
              scrolled ? 'h-16 px-2 sm:px-3' : 'h-16 lg:h-[72px] w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'
            }`}
          >
            {/* Left: menu + mini logo (appears in island mode) */}
            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={() => setShowMenu(true)}
                aria-label="Open menu"
                className="rp-pop group flex h-11 lg:h-12 items-center gap-3 rounded-full border border-brand-200 bg-white px-4 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-brand-400 hover:shadow-md hover:shadow-brand-100"
                style={{ '--d': '.35s' }}
              >
                <span className="flex w-5 flex-col items-start gap-[5px]">
                  <span className="h-0.5 w-5 rounded-full bg-brand-600 transition-all duration-300" />
                  <span className="h-0.5 w-3 rounded-full bg-accent-500 transition-all duration-300 group-hover:w-5" />
                  <span className="h-0.5 w-4 rounded-full bg-brand-600 transition-all duration-300 group-hover:w-5" />
                </span>
                <span className="hidden sm:inline">Menu</span>
              </button>

              <Link
                href="/"
                aria-label="Redpath home"
                className={`hidden sm:block overflow-hidden transition-all duration-500 ${scrolled ? 'max-w-40 opacity-100' : 'max-w-0 opacity-0'}`}
              >
                <img src="/logo.webp" alt="Redpath Diagnostics" className="h-9 w-auto max-w-none" />
              </Link>
            </div>

            {/* Center: links with gliding pill */}
            <nav
              className="relative hidden md:flex shrink-0 items-center gap-1 rounded-full bg-brand-50/70 p-1 ring-1 ring-brand-100"
              onMouseLeave={() => setHovered(null)}
            >
              <span
                aria-hidden="true"
                className="absolute top-1 bottom-1 rounded-full bg-linear-to-r from-brand-600 to-accent-500 shadow-md shadow-brand-200 transition-all duration-400 ease-[cubic-bezier(.3,1.3,.5,1)]"
                style={{
                  left: pill?.left ?? 0,
                  width: pill?.width ?? 0,
                  opacity: pill ? 1 : 0,
                }}
              />
              {navLinks.map(({ href, label, icon: Icon }, i) => {
                const lit = pillIdx === i;
                return (
                  <Link
                    key={label}
                    href={href}
                    ref={(el) => (linkRefs.current[i] = el)}
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                    aria-current={activeIdx === i ? 'page' : undefined}
                    className={`rp-blur-in group relative z-10 flex h-9 lg:h-10 items-center gap-2 whitespace-nowrap rounded-full px-3 lg:px-4 text-sm font-semibold transition-colors duration-300 ${
                      lit ? 'text-white' : 'text-gray-700 hover:text-brand-700'
                    }`}
                    style={{ '--d': `${0.45 + i * 0.08}s` }}
                  >
                    <Icon className={`text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 ${lit ? '' : 'text-brand-600'}`} />
                    <span className={i === 3 ? (scrolled ? 'hidden 2xl:inline' : 'hidden xl:inline') : ''}>{label}</span>
                    {i === 3 && <span className={scrolled ? '2xl:hidden' : 'xl:hidden'}>Doctor</span>}
                  </Link>
                );
              })}
            </nav>

            {/* Right: open badge, phone, CTA */}
            <div className="flex shrink-0 items-center gap-3">
              <span
                className={`rp-pop ${scrolled ? 'hidden' : 'hidden 2xl:flex'} items-center gap-2 whitespace-nowrap text-xs font-semibold text-gray-500`}
                style={{ '--d': '.75s' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-green-500 rp-ring" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Open 365 days
              </span>

              <a
                href={`tel:${PHONE.tel}`}
                aria-label={`Call ${PHONE.display}`}
                title={PHONE.display}
                className="rp-pop group flex h-11 lg:h-12 shrink-0 items-center gap-2 rounded-full border border-brand-200 bg-white px-1.5 shadow-sm transition hover:border-brand-400 hover:shadow-md hover:shadow-brand-100"
                style={{ '--d': '.8s' }}
              >
                <span className="relative flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <span className="absolute inset-0 rounded-full border border-brand-400 rp-ring" />
                  <FaPhoneAlt className="rp-wiggle text-sm" />
                </span>
                <span className={`flex-col whitespace-nowrap pr-2.5 leading-tight ${scrolled ? 'flex md:hidden' : 'flex md:hidden lg:flex'}`}>
                  <span className="hidden lg:block text-[10px] uppercase tracking-wider text-gray-400">Call to book</span>
                  <span className="text-sm font-bold text-gray-800">{PHONE.display}</span>
                </span>
              </a>

              <Link
                href="/fullbody"
                className="rp-pop rp-shine group relative hidden xl:flex h-12 shrink-0 items-center gap-2 whitespace-nowrap overflow-hidden rounded-full bg-linear-to-r from-brand-600 to-accent-500 pl-2 pr-5 text-sm font-semibold text-white shadow-lg shadow-brand-200 transition hover:-translate-y-0.5 hover:shadow-xl"
                style={{ '--d': '.9s' }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <TestTube className="h-6 w-6" />
                </span>
                Book a Test
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Scroll progress */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-linear-to-r from-brand-600 via-accent-500 to-brand-400"
            style={{ transform: 'scaleX(var(--progress, 0))' }}
          />
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap the fixed drawer. */}
      {showMenu && <SidebarMenu onClose={() => setShowMenu(false)} />}
    </>
  );
}
