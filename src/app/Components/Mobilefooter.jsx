'use client';


import Link from 'next/link';
import { FaHome, FaFileAlt, FaStar, FaUser } from 'react-icons/fa';

export default function MobileFooterNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 px-6 z-50 md:hidden flex justify-between items-center text-center">
      <div className="flex flex-col items-center text-sm text-gray-700">
        <FaHome className="text-xl mb-1" />
   <Link href='/' >   <span>Home</span></Link> 
      </div>
      <div className="flex flex-col items-center text-sm text-gray-700">
        <FaFileAlt className="text-xl mb-1" />
       <Link href='/login'> <span>Reports</span></Link> 
      </div>
      <div className="flex flex-col items-center text-sm text-gray-700">
        <FaStar className="text-xl mb-1" />
     <Link href='/login'>   <span>Bookings</span>
     </Link> </div>
      <div className="flex flex-col items-center text-sm text-gray-700">
        <FaUser className="text-xl mb-1" />
     <Link href='/login'> <span>Profile</span></Link>  
      </div>
    </div>
  );
}
