'use client'
import Link from 'next/link'
import React from 'react'
import { FaApple, FaGoogle } from 'react-icons/fa'

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[350px] h-[500px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] p-5 flex flex-col justify-center">
        <div>
          <p className="text-center font-extrabold text-[28px] font-sans mb-2">Create account</p>
          <form className="flex flex-col gap-[18px] mb-[15px] w-full">
            <input type="text" placeholder="Name" className="rounded-[20px] border border-gray-300 px-[15px] py-[12px] outline-none" />
            <input type="email" placeholder="Email" className="rounded-[20px] border border-gray-300 px-[15px] py-[12px] outline-none" />
            <input type="password" placeholder="Password" className="rounded-[20px] border border-gray-300 px-[15px] py-[12px] outline-none" />
            <button type="submit" className="bg-[#9632d0] text-white rounded-[20px] px-[15px] py-[10px] font-sans shadow-md hover:shadow-none transition-all duration-150">Create account</button>
          </form>
          <p className="text-[12px] text-[#747474] font-sans">
            Already have an account?
      <Link href='/login'>     <span className="ml-1 text-[#9632d0] font-extrabold underline cursor-pointer text-[11px]">Log in</span>
     </Link>     </p>
        </div>

        <div className="flex flex-col gap-[15px] pt-1">
          <div className="flex items-center justify-center gap-2 px-[15px] py-[10px] rounded-[20px] bg-black text-white border-2 border-black text-[11px] font-sans shadow-md cursor-pointer">
            <FaApple className="text-[18px]" />
            <span>Sign up with Apple</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-[15px] py-[10px] rounded-[20px] border-2 border-[#747474] text-[11px] font-sans shadow-md cursor-pointer">
            <FaGoogle className="text-[18px]" />
            <span>Sign up with Google</span>
          </div>
        </div>
      </div>
    </div>
  )
}
