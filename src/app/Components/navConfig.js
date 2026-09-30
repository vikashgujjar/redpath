import { FaHome, FaStethoscope } from 'react-icons/fa';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdEventNote } from 'react-icons/md';

export const navLinks = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/login', label: 'My Bookings', icon: MdEventNote },
  { href: '/login', label: 'My Reports', icon: HiOutlineDocumentReport },
  { href: '/doctorconsultation', label: 'Doctor Consultation', icon: FaStethoscope },
];

// Single source for contact details. TODO: confirm — the old site used several different numbers/addresses.
export const PHONE = { display: '+91-898 898 8787', tel: '+918988988787' };
export const WHATSAPP = 'https://wa.me/917056997000';
export const EMAIL = 'info@futureittouch.com';
export const ADDRESS = 'Sector 34 A, Near Mukat Hospital, Chandigarh 160022';
