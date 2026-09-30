'use client';

import { FaUserCheck, FaVial, FaMapMarkedAlt, FaMap, FaFlask, FaUserNurse, FaChartLine } from 'react-icons/fa';
import { Flask, Microscope, Dna, ecgPath } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader, CountUp } from './SectionKit';

// PLACEHOLDER FIGURES — these were carried over from the previous design (copied from another lab's site).
// Replace with Redpath's real numbers before going live.
const stats = [
  { icon: FaUserCheck, value: 7000000, suffix: '+', label: 'Customers served' },
  { icon: FaVial, value: 70000, suffix: '+', label: 'Tests processed' },
  { icon: FaMapMarkedAlt, value: 220, suffix: '+', label: 'Cities' },
  { icon: FaMap, value: 2000, suffix: '+', label: 'Collection centres' },
  { icon: FaFlask, value: 80, suffix: '+', label: 'In-house labs' },
  { icon: FaUserNurse, value: 1000, suffix: '+', label: 'Home collection experts' },
];

export default function RedpathStats() {
  const sectionRef = useReveal();
  const ecg = ecgPath(1200, 240);

  return (
    <section ref={sectionRef} className="rp-reveal relative bg-white py-12 lg:py-16">
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Our impact"
          icon={FaChartLine}
          title="Redpath —"
          highlight="defining health through accuracy"
          description="We have a single goal: to give everyone access to quality diagnostics they can trust."
        />

        <div className="rp-blur-in relative mt-10 overflow-hidden rounded-[32px] bg-linear-to-br from-brand-700 via-brand-600 to-accent-500 px-4 py-8 text-white sm:px-8 lg:py-10" style={{ '--d': '.25s' }}>
          {/* backdrop */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 opacity-[.12] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
            <svg className="absolute left-0 top-1/2 h-16 w-full -translate-y-1/2" viewBox="0 0 1200 40" preserveAspectRatio="none">
              <path d={ecg} pathLength="1000" fill="none" stroke="white" strokeOpacity=".12" strokeWidth="2" vectorEffect="non-scaling-stroke" className="rp-draw" style={{ '--d': '.4s' }} />
              <path d={ecg} pathLength="1000" fill="none" stroke="white" strokeOpacity=".8" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="rp-run" style={{ '--d': '2s' }} />
            </svg>
            <Flask className="rp-float-in absolute -left-2 -top-2 w-20 text-white/10" style={{ '--r': '-14deg', '--d': '.6s' }} />
            <Microscope className="rp-float-in absolute -bottom-2 right-4 w-20 text-white/10" style={{ '--r': '6deg', '--d': '.8s', '--dur': '9s' }} />
            <Dna className="rp-float-in absolute left-1/2 -top-4 hidden h-20 text-white/10 lg:block" style={{ '--r': '20deg', '--d': '1s', '--dur': '10s' }} />
          </div>

          <ul className="relative grid grid-cols-2 gap-y-8 sm:grid-cols-3 xl:grid-cols-6">
            {stats.map(({ icon: Icon, value, suffix, label }, i) => (
              <li
                key={label}
                className={`rp-slide-right group flex flex-col items-center px-3 text-center xl:border-white/20 ${i > 0 ? 'xl:border-l' : ''}`}
                style={{ '--d': `${0.45 + i * 0.08}s` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-lg ring-1 ring-white/25 transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-8deg] group-hover:bg-white group-hover:text-brand-600">
                  <Icon />
                </span>
                <span className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  <CountUp value={value} suffix={suffix} />
                </span>
                <span className="mt-1 text-sm text-white/75">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
