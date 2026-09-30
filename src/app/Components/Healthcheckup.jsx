'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaMale, FaFemale, FaCalendarAlt, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { Flask, TestTube, Microscope, Dna } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader } from './SectionKit';
import { PHONE } from './navConfig';

const ageGroups = [
  { range: 'Under 30', unit: 'yrs', stage: 'Baseline screening', art: TestTube },
  { range: '30 – 45', unit: 'yrs', stage: 'Preventive care', art: Flask },
  { range: '45 – 60', unit: 'yrs', stage: 'Comprehensive care', art: Microscope },
];

const genders = [
  { key: 'men', label: 'Men', icon: FaMale },
  { key: 'women', label: 'Women', icon: FaFemale },
];

function AgeCard({ range, unit, stage, art: Art, gender, index }) {
  const women = gender === 'women';
  const Icon = women ? FaFemale : FaMale;
  return (
    <Link
      href="/fullbody"
      className="rp-blur-in group relative block rounded-[28px] p-[1.5px] transition-transform duration-500 hover:-translate-y-1"
      style={{ '--d': `${0.1 + index * 0.1}s` }}
    >
      <span className="absolute inset-0 rounded-[28px] bg-brand-100" />
      <span className="absolute inset-0 rounded-[28px] bg-linear-to-br from-brand-500 via-accent-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className={`relative flex h-full flex-col overflow-hidden rounded-[26.5px] p-6 ${women ? 'bg-linear-to-br from-pink-50 via-white to-white' : 'bg-linear-to-br from-brand-50 via-white to-white'}`}>
        <Art className="pointer-events-none absolute -bottom-4 -right-4 w-28 text-brand-600/[.07] transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110" />

        <span className="relative flex items-start justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 ring-1 ring-brand-100">
            <FaCalendarAlt className="text-brand-500" /> Age group
          </span>
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-white transition-transform duration-500 group-hover:rotate-[-8deg] ${
              women ? 'bg-linear-to-br from-accent-400 to-accent-500' : 'bg-linear-to-br from-brand-500 to-brand-700'
            }`}
          >
            <Icon />
          </span>
        </span>

        <span className="relative mt-6 flex items-baseline gap-2">
          <span className="bg-linear-to-r from-brand-700 to-accent-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">{range}</span>
          <span className="text-sm font-semibold text-gray-400">{unit}</span>
        </span>
        <span className="relative mt-2 text-sm font-medium text-gray-600">
          {stage} for {women ? 'women' : 'men'}
        </span>

        <span className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-brand-700">
          View checkups
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-[10px] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-linear-to-r group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
            <FaArrowRight />
          </span>
        </span>
      </span>
    </Link>
  );
}

export default function RoutineCheckups() {
  const sectionRef = useReveal();
  const [gender, setGender] = useState('men');
  const activeIdx = genders.findIndex((g) => g.key === gender);

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-linear-to-b from-white via-brand-50/50 to-white py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-[.05] bg-[radial-gradient(var(--color-brand-600)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="rp-drift absolute -left-24 top-0 h-72 w-96 rounded-full bg-pink-100/70 blur-3xl" />
        <Dna className="rp-float-in absolute right-[5%] top-8 h-14 text-brand-600/15" style={{ '--r': '16deg', '--d': '.6s', '--dur': '9s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="Routine checkups"
          icon={FaCalendarAlt}
          title="Routine health checkups"
          highlight="for every age"
          description="Regular checkups catch problems early. Choose who it's for and pick an age group."
        >
          {/* segmented toggle with sliding pill */}
          <div className="relative flex h-11 w-60 rounded-full border border-brand-200 bg-white p-1 lg:h-12" role="tablist" aria-label="Checkups for">
            <span
              aria-hidden="true"
              className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full transition-all duration-500 ease-[cubic-bezier(.3,1.3,.5,1)] ${
                gender === 'women' ? 'bg-linear-to-r from-accent-400 to-accent-500' : 'bg-linear-to-r from-brand-600 to-brand-500'
              }`}
              style={{ transform: `translateX(${activeIdx * 100}%)` }}
            />
            {genders.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                role="tab"
                aria-selected={gender === key}
                onClick={() => setGender(key)}
                className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  gender === key ? 'text-white' : 'text-gray-600 hover:text-brand-700'
                }`}
              >
                <Icon /> {label}
              </button>
            ))}
          </div>
        </SectionHeader>

        <div key={gender} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {ageGroups.map((g, i) => (
            <AgeCard key={g.range} {...g} gender={gender} index={i} />
          ))}

          {/* advisor card */}
          <div className="rp-blur-in relative overflow-hidden rounded-[28px] bg-linear-to-br from-brand-700 via-brand-600 to-accent-500 p-6 text-white" style={{ '--d': '.4s' }}>
            <div className="pointer-events-none absolute inset-0 opacity-[.12] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
            <Flask className="pointer-events-none absolute -right-3 -top-3 w-24 text-white/10" />
            <p className="relative text-xs font-semibold uppercase tracking-widest text-white/70">Not sure where to start?</p>
            <p className="relative mt-2 text-xl font-extrabold leading-snug">Get a checkup plan from our health advisor</p>
            <a
              href={`tel:${PHONE.tel}`}
              className="relative mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5"
            >
              <FaPhoneAlt className="rp-wiggle text-xs" /> Call our advisor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
