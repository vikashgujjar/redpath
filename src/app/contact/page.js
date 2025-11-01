import React from 'react'
import Banner from '../doctorconsultation/Banner'
import ContactSection from './Contactform';
import Link from 'next/link';


const page = () => {
  return (
    <>
      <Banner />

      <div className="flex flex-col text-white md:flex-row justify-between gap-6 p-6 xl:px-32">

        {/* Phone */}
        <div className="flex-1 bg-[#edf7f7] p-6 rounded-md shadow-md">
          <h3 className="text-lg  text-[#8b1ed0] font-semibold flex items-center gap-2">
            <span>📞</span> Phone:
          </h3>
          <p className="mt-2 text-black">Assistance hours: Monday – Friday, 9 am to 6 pm</p>
          <p className="mt-2 font-bold">
            <Link href="tel:+917709790881" className="hover:underline text-black">+91-7709790881</Link>
          </p>
        </div>

        {/* Email */}
        <div className="flex-1 bg-[#edf7f7] p-6 rounded-md shadow-md">
          <h3 className="text-lg text-[#8b1ed0] font-semibold flex items-center gap-2">
            <span>✉️</span> Email:
          </h3>
          <p className="mt-2 text-black">
            Our support team will get back to you in 24h during standard business hours.
          </p>
          <p className="mt-2 font-bold break-all text-black">
            <span>info@domain.com</span>
          </p>
        </div>

        {/* Address */}
        <div className="flex-1 bg-[#edf7f7] p-6 rounded-md shadow-md">
          <h3 className="text-lg  text-[#8b1ed0] font-semibold flex items-center gap-2">
            <span>📍</span> Office Address:
          </h3>
          <p className="mt-2 text-black">
            Plot No 88-A Basement, vill. Saramgpur, Chandigarh 160014
          </p>
        </div>
      </div>


      <ContactSection />



    </>
  )
}

export default page