'use client';

import { useState } from 'react';
import { FaPlus, FaQuestionCircle, FaPhoneAlt, FaWhatsapp, FaHeadset } from 'react-icons/fa';
import { Flask, Molecule, Dna } from './LabVectors';
import useReveal from './useReveal';
import { SectionHeader } from './SectionKit';
import { PHONE } from './navConfig';

const faqs = [
  {
    question: 'What does RedPath do?',
    answer:
      'RedPath is the fastest-growing network of diagnostic services offering Integrated radiology and pathology services to identify Communicable and Non-Communicable Diseases (NCDs) altering your health conditions.',
  },
  {
    question: 'What is The Procedure for Booking a Test with RedPath?',
    answer:
      'Being a client-oriented diagnostic center, we have made online health packages or test booking fast and easy. Simple steps to book a health test or package.',
  },
  {
    question: 'How Can I Make Payment for The Booking?',
    answer:
      'We at RedPath support all reliable online payment options: internet banking, debit/credit card, UPI (Paytm, GPay, PhonePe), and wallets.',
  },
  {
    question: 'How does my prescription get validated?',
    answer:
      'We validate every prescription: ensuring it’s prescribed by a certified practitioner, checking date & patient details before proceeding.',
  },
  {
    question: 'Why is Redpath the best Pathology Lab?',
    answer:
      'RedPath is the fastest-growing diagnostic network offering integrated services to identify Communicable and Non-Communicable Diseases.',
  },
];

function HelpCard() {
  return (
    <div className="rp-blur-in relative overflow-hidden rounded-[32px] bg-linear-to-br from-brand-700 via-brand-600 to-accent-500 p-6 text-white sm:p-8" style={{ '--d': '.25s' }}>
      <div className="pointer-events-none absolute inset-0 opacity-[.12] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
      <Molecule className="rp-float-in pointer-events-none absolute -right-4 bottom-10 w-24 text-white/10" style={{ '--d': '.6s', '--dur': '11s' }} />
      <Dna className="rp-float-in pointer-events-none absolute left-6 top-6 h-20 text-white/10" style={{ '--r': '18deg', '--d': '.8s', '--dur': '9s' }} />

      <div className="relative flex flex-col items-center text-center">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-white/20 rp-ring" />
          <span className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white sm:h-44 sm:w-44">
            <img src="/img/faq.gif" alt="" width={640} height={640} loading="lazy" className="h-28 w-28 sm:h-32 sm:w-32" />
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-extrabold">Still have questions?</h3>
        <p className="mt-2 max-w-xs text-sm text-white/80">Our health advisors are happy to help you pick the right test or understand your report.</p>

        <div className="mt-6 flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
          <a
            href={`tel:${PHONE.tel}`}
            className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5"
          >
            <FaPhoneAlt className="rp-wiggle text-xs" /> {PHONE.display}
          </a>
          <a
            href="https://wa.me/917056997000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/15 px-5 text-sm font-semibold ring-1 ring-white/40 transition hover:bg-white/25"
          >
            <FaWhatsapp /> WhatsApp us
          </a>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs text-white/70">
          <FaHeadset /> Available 365 days a year
        </p>
      </div>
    </div>
  );
}

function FaqItem({ faq, index, open, onToggle }) {
  const id = `faq-${index}`;
  return (
    <div className="rp-slide-right" style={{ '--d': `${0.35 + index * 0.08}s` }}>
      <div className={`relative rounded-[22px] p-[1.5px] transition-colors duration-500 ${open ? 'bg-linear-to-r from-brand-500 via-accent-400 to-brand-600' : 'bg-brand-100 hover:bg-brand-200'}`}>
        <div className={`rounded-[20.5px] transition-colors duration-500 ${open ? 'bg-linear-to-br from-white to-brand-50' : 'bg-white'}`}>
          <button
            id={`${id}-btn`}
            aria-expanded={open}
            aria-controls={`${id}-panel`}
            onClick={onToggle}
            className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition-all duration-500 ${
                open ? 'bg-linear-to-br from-brand-600 to-accent-500 text-white' : 'bg-brand-50 text-brand-600'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className={`flex-1 font-semibold transition-colors ${open ? 'text-brand-700' : 'text-gray-800'}`}>{faq.question}</span>
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-500 ${
                open ? 'rotate-45 border-accent-400 bg-accent-500 text-white' : 'border-brand-200 text-brand-600'
              }`}
            >
              <FaPlus />
            </span>
          </button>

          {/* grid-rows trick animates to the content's natural height */}
          <div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <div className="overflow-hidden">
              <p className="px-4 pb-5 pl-[4.25rem] text-sm leading-relaxed text-gray-600 sm:px-5 sm:pl-[4.5rem]">{faq.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactAndFAQ() {
  const sectionRef = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={sectionRef} className="rp-reveal relative overflow-hidden bg-white py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="rp-drift absolute -right-24 top-10 h-72 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <Flask className="rp-float-in absolute right-[4%] top-8 w-10 text-brand-600/15" style={{ '--r': '12deg', '--d': '.6s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeader
          eyebrow="FAQs"
          icon={FaQuestionCircle}
          title="Frequently asked"
          highlight="questions"
          description="Everything you need to know about booking, payments and reports."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(320px,420px)_1fr] lg:gap-10">
          <HelpCard />
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
