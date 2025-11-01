'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaTruck,
  FaClipboardList,
  FaInfoCircle,
  FaLocationArrow
} from 'react-icons/fa';

export default function SidebarMenu({ onClose }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const menuItems = [
    { icon: <FaInfoCircle />, label: 'About Us', href: '/about' },
    { icon: <FaClipboardList />, label: 'Health Blog', href: '/health-blog' },
    { icon: <FaMapMarkerAlt />, label: 'Lab Locations', href: '/lab-locations' },
    { icon: <FaLocationArrow />, label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="fixed inset-0 bg-white z-50 xl:w-[25%] h-screen overflow-y-auto z-[99999]" data-aos="fade-right">
      {/* Header */}
      <div className="bg-white p-4 flex items-center space-x-2 shadow" data-aos="fade-down">
        <button onClick={onClose} className="text-xl">
          <FaArrowLeft />
        </button>
        <span className="font-semibold text-lg">My Menu</span>
      </div>

      {/* Menu Items */}
      <div className="p-4">
        <ul className="rounded-xl space-y-1" data-aos="fade-up">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-3 border-b last:border-b-0"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between w-full hover:bg-gray-50 transition rounded-md px-2 py-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 rounded-full p-2 text-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-gray-400">&gt;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
