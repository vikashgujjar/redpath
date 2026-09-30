'use client';

import Link from 'next/link';
import {
  FaShieldAlt,
  FaShippingFast,
  FaHome,
  FaCalendarCheck,
  FaUserMd,
  FaRupeeSign,
  FaMobileAlt,
  FaMotorcycle,
  FaMicroscope,
  FaFileMedical,
  FaStar,
  FaArrowRight,
} from 'react-icons/fa';
import { Flask, TestTube, Dna, Molecule, Microscope, PetriDish, BloodDrop } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader } from './SectionKit';

const features = [
  { icon: FaShieldAlt, title: 'Quality', desc: 'Stringent quality-control practices on every sample we process.', art: Microscope },
  { icon: FaShippingFast, title: 'On-Time Services', desc: 'Punctual sample collection and reports delivered when promised.', art: TestTube },
  { icon: FaHome, title: 'Convenience', desc: 'Get tested at home or walk into a lab near you — your choice.', art: Flask },
  { icon: FaCalendarCheck, title: 'Availability', desc: 'Open 365 days a year, including weekends and holidays.', art: PetriDish },
  { icon: FaUserMd, title: 'Expert Assistance', desc: 'On-demand consultation to help you understand your report.', art: Dna, wide: true },
  { icon: FaRupeeSign, title: 'Affordable', desc: 'Transparent pricing with up to 78% off on health packages.', art: BloodDrop, wide: true },
];

const journey = [
  { icon: FaMobileAlt, title: 'Book', desc: 'Online or on call' },
  { icon: FaMotorcycle, title: 'Collect', desc: 'Sample from home' },
  { icon: FaMicroscope, title: 'Process', desc: 'In our lab' },
  { icon: FaFileMedical, title: 'Report', desc: 'On your phone' },
];

// The travelling dot takes 4s to cross; each step "beats" as the dot reaches it (peak at 10% of the cycle).
const beatDelay = (i) => `${(i / (journey.length - 1)) * 4 - 0.4}s`;

function JourneyTile() {
  return (
    <div
      className="rp-blur-in relative overflow-hidden rounded-[28px] bg-linear-to-br from-brand-700 via-brand-600 to-accent-500 p-6 text-white sm:col-span-2 sm:p-8 lg:row-span-2"
      style={{ '--d': '.25s' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[.12] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
      <TestTube className="rp-float-in pointer-events-none absolute -right-4 -top-4 w-40 text-white/10" style={{ '--r': '24deg', '--d': '.6s', '--dur': '9s' }} />
      <Molecule className="rp-float-in pointer-events-none absolute bottom-6 right-10 w-16 text-white/10" style={{ '--d': '.8s', '--dur': '11s' }} />

      <div className="relative flex h-full flex-col">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/25">
          <FaStar className="text-yellow-300" /> Simple &amp; fast
        </span>
        <h3 className="mt-4 max-w-md text-2xl font-extrabold leading-tight sm:text-3xl">
          From booking to report in <span className="text-pink-200">4 easy steps</span>
        </h3>
        <p className="mt-3 max-w-md text-sm text-white/75 sm:text-base">
          No queues, no running around. We handle everything in between — you just check your phone.
        </p>

        {/* Steps */}
        <ol className="relative mt-8 grid grid-cols-1 gap-5 sm:grid-cols-4 sm:gap-3">
          {/* connector (desktop) with travelling dot */}
          <span className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 border-t-2 border-dashed border-white/30 sm:block" aria-hidden="true">
            <span className="rp-travel absolute -top-[7px] h-3 w-3 -translate-x-1/2 rounded-full bg-white ring-4 ring-white/30" />
          </span>
          {/* connector (mobile) */}
          <span className="absolute bottom-6 left-6 top-6 w-0.5 border-l-2 border-dashed border-white/30 sm:hidden" aria-hidden="true" />

          {journey.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="rp-slide-right relative flex items-center gap-4 sm:flex-col sm:text-center" style={{ '--d': `${0.5 + i * 0.12}s` }}>
              <span className="rp-beat relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-lg text-brand-600" style={{ '--d': beatDelay(i) }}>
                <Icon />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-white ring-2 ring-white">
                  {i + 1}
                </span>
              </span>
              <span>
                <span className="block text-sm font-bold">{title}</span>
                <span className="block text-xs text-white/70">{desc}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          <Link
            href="/package"
            className="group flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5"
          >
            Book a test
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-sm text-white/75">
            Reports in as fast as <span className="font-bold text-white">15 hours</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function FeatureTile({ icon: Icon, title, desc, art: Art, wide, index }) {
  return (
    <div
      className={`rp-blur-in group relative rounded-[24px] p-[1.5px] transition-transform duration-500 hover:-translate-y-1 ${wide ? 'lg:col-span-2' : ''}`}
      style={{ '--d': `${0.35 + index * 0.08}s` }}
    >
      <span className="absolute inset-0 rounded-[24px] bg-brand-100" />
      <span className="absolute inset-0 rounded-[24px] bg-linear-to-br from-brand-500 via-accent-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className={`relative flex h-full overflow-hidden rounded-[22.5px] bg-white p-5 ${wide ? 'items-center gap-5' : 'flex-col'}`}>
        <Art className="pointer-events-none absolute -bottom-3 -right-3 w-20 text-brand-600/[.07] transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110" />
        <span className="pointer-events-none absolute right-4 top-3 text-4xl font-extrabold text-brand-50 transition-colors duration-500 group-hover:text-pink-50">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-lg text-brand-600 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-linear-to-br group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
          <Icon />
        </span>
        <div className={`relative ${wide ? '' : 'mt-4'}`}>
          <h3 className="font-bold text-gray-900 transition-colors group-hover:text-brand-700">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyBookTests() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-linear-to-b from-white via-brand-50/60 to-white py-12 lg:py-16">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[.05] bg-[radial-gradient(var(--color-brand-600)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="rp-drift absolute -right-24 top-0 h-72 w-96 rounded-full bg-pink-100/70 blur-3xl" />
        <div className="rp-drift absolute -left-24 bottom-0 h-72 w-96 rounded-full bg-brand-100/70 blur-3xl" style={{ animationDelay: '-6s' }} />
        <Flask className="rp-float-in absolute right-[5%] top-8 w-10 text-brand-600/15" style={{ '--r': '12deg', '--d': '.6s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Why Redpath"
          icon={FaShieldAlt}
          title="Why book tests"
          highlight="with us?"
          description="Accurate diagnostics shouldn't be complicated. Here's what you get every time you test with Redpath."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <JourneyTile />
          {features.map((f, i) => (
            <FeatureTile key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
