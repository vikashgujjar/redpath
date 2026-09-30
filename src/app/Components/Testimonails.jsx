'use client';

import { FaQuoteLeft, FaUserMd } from 'react-icons/fa';
import { Molecule, Flask } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader } from './SectionKit';

// NOTE: these quotes were carried over unchanged from the previous design and mention another lab.
// Replace with genuine Redpath testimonials before going live.
const testimonials = [
  {
    text: 'Redcliffe Labs delivers exceptional and accurate diagnostic services with a knowledgeable and dedicated team.',
    name: 'Dr. Vykunta Raju K. N',
    designation: 'Pediatric Neurologist',
    location: 'Bengaluru',
  },
  {
    text: 'Redcliffe Labs has been an invaluable diagnostic service provider for me and my patients. Their commitment to using the latest technologies and techniques to deliver quality & timely reports is commendable.',
    name: 'Dr. Seneesh KV',
    designation: 'Fetal Medicine Specialist',
    location: 'Kerala',
  },
  {
    text: 'Redcliffe Labs is synonymous with trusted healthcare, delivering high-quality diagnostic services on time.',
    name: 'Dr. Chitra Ganesh',
    designation: 'Fetal Medicine Specialist',
    location: 'Bengaluru',
  },
  {
    text: 'For reliable diagnostics, I always recommend Redcliffe Labs.',
    name: 'Dr. Rahul Mehra',
    designation: 'Consultant Physician',
    location: 'Mumbai',
  },
];

const initials = (name) =>
  name
    .replace(/^Dr\.?\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

function TestimonialCard({ text, name, designation, location }) {
  return (
    <figure className="group relative w-[300px] shrink-0 rounded-[26px] p-[1.5px] sm:w-[360px]">
      <span className="absolute inset-0 rounded-[26px] bg-brand-100" />
      <span className="absolute inset-0 rounded-[26px] bg-linear-to-br from-brand-500 via-accent-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[24.5px] bg-white p-6">
        <Molecule className="pointer-events-none absolute -bottom-4 -right-4 w-24 text-brand-600/[.06] transition-transform duration-700 group-hover:rotate-45" />
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-accent-500 text-white">
          <FaQuoteLeft />
        </span>
        <blockquote className="relative mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">{text}</blockquote>
        <figcaption className="relative mt-6 flex items-center gap-3 border-t border-dashed border-brand-100 pt-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-100 to-pink-100 text-sm font-extrabold text-brand-700 ring-2 ring-white">
            {initials(name)}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-bold text-gray-900">{name}</span>
            <span className="block truncate text-xs text-gray-500">
              {designation} · {location}
            </span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

function MarqueeRow({ items, reverse, duration }) {
  // Two identical halves so translateX(-50%) loops seamlessly; each half repeats the set to cover wide screens.
  const half = [...items, ...items];
  return (
    <div className="flex w-max gap-5 rp-marquee" style={{ animationDuration: duration, animationDirection: reverse ? 'reverse' : 'normal' }}>
      {[...half, ...half].map((t, i) => (
        <TestimonialCard key={`${t.name}-${i}`} {...t} />
      ))}
    </div>
  );
}

export default function TestimonialsSlider() {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-linear-to-b from-white via-brand-50/50 to-white py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="rp-drift absolute -left-24 top-10 h-72 w-96 rounded-full bg-pink-100/70 blur-3xl" />
        <div className="rp-drift absolute -right-24 bottom-0 h-72 w-96 rounded-full bg-brand-100/60 blur-3xl" style={{ animationDelay: '-6s' }} />
        <Flask className="rp-float-in absolute right-[5%] top-8 w-10 text-brand-600/15" style={{ '--r': '12deg', '--d': '.6s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Testimonials"
          icon={FaUserMd}
          title="What doctors are"
          highlight="saying"
          description="Trusted by clinicians for accurate results and timely reports."
        />
      </div>

      <div
        className="rp-blur-in relative mt-10 flex flex-col gap-5"
        style={{
          '--d': '.3s',
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <MarqueeRow items={testimonials} duration="60s" />
        <MarqueeRow items={[...testimonials].reverse()} duration="70s" reverse />
      </div>
    </section>
  );
}
