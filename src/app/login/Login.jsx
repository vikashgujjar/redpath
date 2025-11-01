'use client';
import Link from 'next/link';
import React from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';


export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] mx-4 md">
      <div className="w-[370px] h-auto bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-xl p-6 md:p-8">
        <p className="text-center font-bold text-[28px] font-sans ">👋  Hello Again! </p>
        <p className='mb-8 text-center'>Please Log in to continue</p>

        <form className="flex flex-col gap-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-full border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-full border border-gray-300 px-4 py-3 outline-none"
          />
          <p className="text-end text-[10px] text-gray-500 underline cursor-pointer hover:text-black">
            Forgot Password?
          </p>
          <button className="bg-[#9632d0] text-white rounded-full py-3 font-semibold shadow-md active:shadow-none">
            Log in
          </button>
        </form>

        <p className="text-[10px] text-gray-500 text-center">
          Don&apos;t have an account?
    <Link href='/signup'>     <span className="ml-1 text-[12px] font-bold text-[#9632d0] underline cursor-pointer">Sign up</span>
    </Link>     </p>

        <div className="flex flex-col mt-6 gap-4">
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-black text-white text-xs font-sans border-2 border-black cursor-pointer shadow-md">
            <FaApple className="text-lg" />
            <span>Log in with Apple</span>
          </div>

          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-sans border-2 border-gray-500 cursor-pointer shadow-md">
            <FaGoogle className="text-lg text-gray-700" />
            <span>Log in with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
