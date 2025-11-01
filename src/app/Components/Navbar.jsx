'use client';

import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaBars, FaHome, FaStethoscope } from 'react-icons/fa';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdEventNote } from 'react-icons/md';
import Link from 'next/link';
import SidebarMenu from './Slidemenu';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [isSticky]);

  return (
    <header
      className={`bg-[#f7f7f7] xl:py-3 shadow-md sticky top-0 z-9 transition-all duration-300 ${
        isSticky ? 'aos-animate' : ''
      }`}
      data-aos={isSticky ? 'fade-left' : 'fade-down'}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
          isSticky
            ? 'py-2 px-4'
            : 'xl:py-4 xl:px-0 lg:px-6 py-2 px-4'
        }`}
      >
        {/* Left: Menu Button */}
        <div
          className="flex items-center space-x-2 text-[18px] text-black font-medium"
          data-aos="fade-right"
        >
          <button
            onClick={() => setShowMenu(true)}
            className="text-xl"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
          <span>Menu</span>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[16px] font-semibold md:">
          <Link href="/" className="flex items-center gap-1 text-[#e91e63]">
            <FaHome />
            Home
          </Link>
          <Link href="/login" className="flex items-center gap-1 text-black hover:text-[#e91e63]">
            <MdEventNote />
            My Bookings
          </Link>
          <Link href="/login" className="flex items-center gap-1 text-black hover:text-[#e91e63]">
            <HiOutlineDocumentReport />
            My Reports
          </Link>
          <Link href="/doctorconsultation" className="flex items-center gap-1 text-black hover:text-[#e91e63] ">
            <FaStethoscope />
            Doctor Consultation
          </Link>
        </nav>

        {/* Right: Phone Button */}
        <div
          className="flex items-center space-x-2 bg-[#e6f0f7] px-4 py-2 rounded-full text-[15px] font-semibold shadow-sm md:hidden"
          data-aos="fade-left"
        >
          <FaPhoneAlt className="text-[#144873]" />
          <span className="text-[#144873]">+91-898 898 8787</span>
        </div>
      </div>

      {/* Sidebar */}
      {showMenu && <SidebarMenu onClose={() => setShowMenu(false)} />}
    </header>
  );
}
