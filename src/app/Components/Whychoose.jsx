'use client';

import Link from 'next/link';
import { FaMicroscope, FaUserMd, FaFlask, FaStar, FaQuoteLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Flask, Molecule, TestTube } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader } from './SectionKit';

const features = [
  {
    icon: FaMicroscope,
    title: 'Accuracy You Can Trust',
    description:
      'As the best diagnostics centre & pathology lab in Mohali, we use the latest technology and strict quality control for precise, reliable results on every test.',
  },
  {
    icon: FaUserMd,
    title: 'Comprehensive Services',
    description: 'From routine blood tests and fever panels to specialised NIPT and FNAC — our lab testing in Mohali covers all your diagnostic needs.',
  },
  {
    icon: FaFlask,
    title: 'Convenience at Your Fingertips',
    description: 'Enjoy home sample collection — our trusted services brought right to your door in Mohali and across Punjab.',
  },
  {
    icon: FaStar,
    title: 'Experienced Professionals',
    description: 'Highly qualified pathologists, technicians and support staff dedicated to the highest standards of care.',
  },
];

const values = ['Reliable', 'Accurate', 'Affordable', 'Caring'];

const finalNote =
  'Whether you need a diabetes test, a liver function test, thyroid testing, or any other medical test in Mohali, REDPATH DIAGNOSTICS is here for you. We believe in empowering you with accurate health information. Connect with us today for a healthier tomorrow!';

function FeatureCard({ icon: Icon, title, description, side, index }) {
  return (
    <div className="rp-blur-in group relative" style={{ '--d': `${0.35 + index * 0.1}s` }}>
      {/* connector towards the centre image (desktop) */}
      <span
        className={`absolute top-1/2 hidden h-0.5 w-10 border-t-2 border-dashed border-brand-200 lg:block xl:w-14 ${side === 'left' ? '-right-10 xl:-right-14' : '-left-10 xl:-left-14'}`}
        aria-hidden="true"
      >
        <span className="rp-travel absolute -top-[5px] h-2 w-2 -translate-x-1/2 rounded-full bg-accent-500" style={{ '--d': `${index * 0.5}s`, animationDirection: side === 'right' ? 'reverse' : 'normal' }} />
      </span>

      <div className="relative rounded-[24px] p-[1.5px] transition-transform duration-500 group-hover:-translate-y-1">
        <span className="absolute inset-0 rounded-[24px] bg-brand-100" />
        <span className="absolute inset-0 rounded-[24px] bg-linear-to-br from-brand-500 via-accent-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative overflow-hidden rounded-[22.5px] bg-white p-5 sm:p-6">
          <span className="pointer-events-none absolute right-4 top-3 text-4xl font-extrabold text-brand-50 transition-colors duration-500 group-hover:text-pink-50">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="relative flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-xl text-brand-600 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-linear-to-br group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
              <Icon />
            </span>
            <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-brand-700">{title}</h3>
          </div>
          <p className="relative mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseRedpath() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} id="why-choose" className="rp-reveal relative overflow-hidden bg-linear-to-b from-white via-brand-50/60 to-white py-12 lg:py-16">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[.05] bg-[radial-gradient(var(--color-brand-600)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="rp-drift absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />
        <Molecule className="rp-float-in absolute left-[3%] top-10 w-12 text-brand-600/15" style={{ '--d': '.6s', '--dur': '10s' }} />
        <TestTube className="rp-float-in absolute right-[4%] bottom-10 w-10 text-brand-600/15" style={{ '--r': '20deg', '--d': '.8s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Why choose us"
          icon={FaCheckCircle}
          title="Why choose"
          highlight="Redpath Diagnostics?"
          description="Mohali's trusted pathology lab — built on four promises we keep with every sample."
        />

        {/* values */}
        <div className="mt-6 flex flex-wrap gap-2">
          {values.map((v, i) => (
            <span
              key={v}
              className="rp-pop inline-flex h-9 items-center gap-2 rounded-full border border-brand-200 bg-white px-4 text-sm font-semibold text-brand-700"
              style={{ '--d': `${0.3 + i * 0.08}s` }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {v}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-[1fr_minmax(280px,380px)_1fr] lg:gap-10 xl:gap-14">
          <div className="flex flex-col gap-6">
            {features.slice(0, 2).map((f, i) => (
              <FeatureCard key={f.title} {...f} side="left" index={i} />
            ))}
          </div>

          {/* centre image */}
          <div className="relative order-first mx-auto w-full max-w-sm md:col-span-2 lg:order-none lg:col-span-1">
            <div className="rp-fade-in absolute left-1/2 top-1/2 aspect-square w-[125%] -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '.4s' }} aria-hidden="true">
              <div className="rp-spin-slow h-full w-full rounded-full border-2 border-dashed border-brand-200" />
            </div>
            <div className="rp-blur-in relative rounded-[32px] bg-linear-to-br from-brand-500 via-accent-400 to-brand-600 p-[3px] rp-gradient-pan" style={{ '--d': '.3s' }}>
              <img
                src="/img/my.webp"
                alt="Redpath Diagnostics — complete prevention, expert guidance"
                width={1448}
                height={1680}
                loading="lazy"
                className="block w-full rounded-[29px]"
              />
            </div>
            <Flask className="rp-float-in absolute -left-6 top-6 w-14 text-brand-500/40" style={{ '--r': '-14deg', '--d': '.9s' }} />
            <span
              className="rp-float-in absolute -right-3 bottom-10 inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/90 px-3 py-2 text-xs font-bold text-gray-800 backdrop-blur"
              style={{ '--d': '1.1s', '--dur': '6s' }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white">
                <FaCheckCircle />
              </span>
              Trusted in Mohali
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {features.slice(2).map((f, i) => (
              <FeatureCard key={f.title} {...f} side="right" index={i + 2} />
            ))}
          </div>
        </div>

        {/* closing note */}
        <div className="rp-blur-in relative mx-auto mt-12 max-w-4xl rounded-[28px] p-[1.5px]" style={{ '--d': '.5s' }}>
          <span className="absolute inset-0 rounded-[28px] bg-linear-to-r from-brand-500 via-accent-400 to-brand-600 rp-gradient-pan" />
          <div className="relative flex flex-col items-start gap-5 rounded-[26.5px] bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-brand-600 to-accent-500 text-white">
              <FaQuoteLeft />
            </span>
            <p className="flex-1 text-gray-700 sm:text-lg">{finalNote}</p>
            <Link
              href="/contact"
              className="group flex h-12 shrink-0 items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-accent-500 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Connect with us
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
