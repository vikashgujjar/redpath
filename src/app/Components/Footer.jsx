'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaArrowUp,
  FaChevronRight,
} from 'react-icons/fa';
import { Flask, TestTube, Dna, Microscope, ecgPath } from './LabVectors';
import useReveal from './useReveal';
import { PHONE, WHATSAPP, EMAIL, ADDRESS } from './navConfig';

const columns = [
  {
    title: 'Quick links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Health Packages', href: '/fullbody' },
      { label: 'Doctor Consultation', href: '/doctorconsultation' },
      { label: 'Health Blog', href: '/health-blog' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Test categories',
    links: ['Full Body', 'Heart', 'Diabetes', 'Thyroid', 'Vitamin', 'Fever', 'Pregnancy', 'Allergy'].map((label) => ({
      label: `${label} Tests`,
      href: '/fullbody',
    })),
  },
  {
    title: 'Popular packages',
    links: [
      'Fit India Full Body Checkup',
      'Advance Plus Full Body Checkup',
      'Diabetes Profile Advanced',
      'Vitamin D & B12 Combo',
      'Fever Panel Basic',
      'Wellness Screening',
    ].map((label) => ({ label, href: '/package' })),
  },
];

const socials = [
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
  { icon: FaGoogle, label: 'Google', href: '#' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'FAQ', href: '/faq' },
];

function CtaBand() {
  return (
    <div className="rp-blur-in relative overflow-hidden rounded-[32px] bg-linear-to-r from-brand-600 via-accent-500 to-brand-600 rp-gradient-pan p-6 sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-[.14] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
      <TestTube className="rp-float-in pointer-events-none absolute -right-2 -top-4 w-28 text-white/15" style={{ '--r': '24deg', '--d': '.4s' }} />
      <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/75">Your health, our priority</p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">Book your health checkup today</h2>
          <p className="mt-2 max-w-xl text-sm text-white/80">Free home sample collection · Reports in as fast as 15 hours · Open 365 days</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/package"
            className="group flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5"
          >
            Book a test <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${PHONE.tel}`}
            className="flex h-12 items-center gap-2 rounded-full bg-white/15 px-6 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/25"
          >
            <FaPhoneAlt className="rp-wiggle text-xs" /> {PHONE.display}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const ref = useReveal({ threshold: 0.05 });
  const year = new Date().getFullYear();
  const ecg = ecgPath(1200, 200);

  return (
    <footer ref={ref} className="rp-reveal relative overflow-hidden bg-brand-900 text-white">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-linear-to-b from-brand-900 via-[#2c0747] to-[#1f0433]" />
        <div className="absolute inset-0 opacity-[.06] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="rp-drift absolute -left-32 top-40 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="rp-drift absolute -right-32 bottom-20 h-96 w-[30rem] rounded-full bg-accent-500/20 blur-3xl" style={{ animationDelay: '-7s' }} />
        <Flask className="rp-float-in absolute left-[46%] top-[42%] hidden w-12 text-white/[.06] lg:block" style={{ '--r': '-12deg', '--d': '.8s' }} />
        <Microscope className="rp-float-in absolute right-[3%] top-[40%] w-14 text-white/[.06]" style={{ '--r': '6deg', '--d': '1s', '--dur': '9s' }} />
        <Dna className="rp-float-in absolute left-[2%] bottom-32 hidden h-20 text-white/[.06] md:block" style={{ '--r': '16deg', '--d': '1.2s', '--dur': '10s' }} />
        {/* giant wordmark */}
        <p className="absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap bg-linear-to-b from-white/[.07] to-transparent bg-clip-text text-[22vw] font-extrabold leading-none tracking-tighter text-transparent">
          redpath
        </p>
      </div>

      <div className="relative w-full px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16 xl:px-12 2xl:px-16">
        <CtaBand />

        {/* ECG divider */}
        <svg className="mt-12 h-10 w-full" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
          <path d={ecg} pathLength="1000" fill="none" stroke="white" strokeOpacity=".12" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="rp-draw" style={{ '--d': '.3s' }} />
          <path d={ecg} pathLength="1000" fill="none" stroke="var(--color-accent-400)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="rp-run" style={{ '--d': '2s', filter: 'drop-shadow(0 0 4px var(--color-accent-400))' }} />
        </svg>

        {/* Main grid */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr_1.4fr]">
          {/* Brand */}
          <div className="rp-slide-right col-span-2 md:col-span-3 lg:col-span-1" style={{ '--d': '.2s' }}>
            <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-2.5">
              <img src="/logo.webp" alt="Redpath Diagnostics" className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Mohali&apos;s trusted pathology lab — accurate diagnostics, home sample collection and fast digital reports for you and your family.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-linear-to-br hover:from-brand-500 hover:to-accent-500 hover:ring-transparent"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-white/45">Get the app</p>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Download on the App Store" className="transition hover:-translate-y-0.5">
                <img src="/img/appstore.webp" alt="App Store" className="h-10 w-auto rounded-lg" />
              </a>
              <a href="#" aria-label="Get it on Google Play" className="transition hover:-translate-y-0.5">
                <img src="/img/playstore.webp" alt="Google Play" className="h-10 w-auto rounded-lg" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, ci) => (
            <nav key={col.title} className="rp-slide-right" style={{ '--d': `${0.3 + ci * 0.08}s` }} aria-label={col.title}>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <span className="h-4 w-1 rounded-full bg-linear-to-b from-brand-400 to-accent-500" />
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition hover:text-white">
                      <FaChevronRight className="-ml-3 text-[9px] text-accent-400 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="rp-slide-right col-span-2 md:col-span-3 lg:col-span-1" style={{ '--d': '.55s' }}>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              <span className="h-4 w-1 rounded-full bg-linear-to-b from-brand-400 to-accent-500" />
              Get in touch
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { icon: FaMapMarkerAlt, label: 'Visit us', value: ADDRESS },
                { icon: FaPhoneAlt, label: 'Call us', value: PHONE.display, href: `tel:${PHONE.tel}` },
                { icon: FaEnvelope, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: FaClock, label: 'Hours', value: 'Open 365 days a year' },
              ].map(({ icon: Icon, label, value, href }) => {
                const body = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm text-pink-200 ring-1 ring-white/15 transition group-hover:bg-linear-to-br group-hover:from-brand-500 group-hover:to-accent-500 group-hover:text-white">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/45">{label}</span>
                      <span className="block break-words text-sm text-white/85">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="group flex items-start gap-3">
                        {body}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-3">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-green-500 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp className="text-base" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 pb-28 text-center md:pb-6 text-xs text-white/55 md:flex-row md:text-left">
          <p>
            © 2017–{year} Redpath Diagnostics. All rights reserved. Powered by{' '}
            <a href="https://futuretouch.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/80 hover:text-white">
              Future IT Touch Pvt Ltd
            </a>
          </p>
          <div className="flex items-center gap-5">
            {legal.map((l) => (
              <Link key={l.label} href={l.href} className="transition hover:text-white">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-brand-500 to-accent-500 text-white transition hover:-translate-y-1"
            >
              <FaArrowUp className="text-xs transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
