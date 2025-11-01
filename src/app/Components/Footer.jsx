import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';

const Footer = () => {


      const currentYear = new Date().getFullYear();
    
  return (
    <section className="bg-[#8b1ed0] text-white">
      <div className="wed-hom-footer md:text-xs  lg:text-base pt-10">
        <div className="container mx-auto px-5 md:px-16 xl:px-32">
          <div className="flex flex-col items-center text-center mb-8 border-b-2 border-dotted border-[#ffffff51] pb-4 md:flex-row md:justify-center">
            <h2 className="md:text-base  font-bold text-white">
              <span className="text-white">Free support:</span>
              <a
                href="tel:+917056997000"
                className="text-white  ml-2"
              >
                +91-7009333-700
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-white">Email:</span>
              <a
                href="mailto:info@futureittouch.com"
                className="text-white  ml-2"
              >
                mailto:info@futureittouch.com
              </a>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border-r-2 border-dotted border-[#ffffff51]">
              <h4 className="text-xl font-bold mb-4">Top Category</h4>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Digital Products
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Spa and Facial
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Electricals
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Transportation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-r-2 border-dotted border-[#ffffff51]">
              <h4 className="text-xl font-bold mb-4">Trending Category</h4>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Hospitals
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Hotels And Resorts
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-white">
                    Electricals
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-r-2 border-dotted border-[#ffffff51]">
              <h4 className="text-xl font-bold mb-4">Help & Support</h4>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-white">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 ">
            <h4 className="text-xl font-bold text-start mb-4">
              Popular Categories
            </h4>
            <ul className="flex flex-wrap gap-4 lg:gap-6">
              <li>
                <Link href="/realestate" className="hover:text-white">
                  Wedding halls in London
                </Link>
              </li>
              <li>
                <Link href="/realestate" className="hover:text-white">
                  Schools in Chennai
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Schools in New York
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Real estate in Illinois
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                  Real estate in Chennai
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                Events in Thailand
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">
                Flat for rent in melborn
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-between gap-8 border-b-2 border-dotted border-[#ffffff51] pb-4">
            <div className="space-y-3">

                  <h4 className="text-xl font-bold mb-2">
                Download Our Free Mobile Apps
              </h4>
              <ul className="flex gap-4 ">
                <li>
                  <Link href="/">
                    <img
                      src="/img/appstore.webp"
                      className="h-[45px] w-full"
                      alt="Google Play"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/img/playstore.webp"
                      className="h-[45px] w-full"
                      alt="Apple Store"
                    />
                  </Link>
                </li>
              </ul>
                <div className="flex gap-4 xl:mt-5">
                   <a
                     href="#"
                     className="text-white bg-blue-600 transition-all duration-300 p-2 rounded-full border border-blue-600"
                   >
                     <FaFacebookF size={20} />
                   </a>
                   <a
                     href="#"
                     className="text-white bg-pink-500 transition-all duration-300 p-2 rounded-full border border-pink-500"
                   >
                     <FaInstagram size={20} />
                   </a>
                   <a
                     href="#"
                     className="text-white bg-red-600 transition-all duration-300 p-2 rounded-full border border-red-600"
                   >
                     <FaYoutube size={20} />
                   </a>
                   <a
                     href="#"
                     className=" text-white bg-green-600 transition-all duration-300 p-2 rounded-full border border-green-600"
                   >
                     <FaGoogle size={20} />
                   </a>
                 </div>
             
            </div>
            <div className="space-y-3">
              
              <img src="/logo.webp" className="bg-white rounded-md lg:h-20 lg:w-60 object-cover text-center w-40"  alt=""></img>
             
            </div>
           
              <div className="space-y-3">
              <h4 className="text-xl font-bold mb-2">Get In Touch</h4>
              <p>
                Address: Sector 34 A, Near Mukat Hospital, Chandigarh <br />
                160022
              </p>
            
              <p>
                Email:{" "}
                <a
                  href="mailto:info@futureittouch.com"

                  className="text-white "
                >
                  mailto:info@futureittouch.com
                </a>
              </p>
            </div>


          </div>

      
         
        </div>
      </div>
      <div className="text-center md:text-xs lg:text-base bg-[#8b1ed0] py-3">
          <p>
          Copyright ©️ 2017- {currentYear}{" "}
        
        . Proudly powered by{" "}
        <a href="https://futuretouch.in/" target="_blank" rel="noopener noreferrer " className="text-white font-semibold">
          Future IT Touch Pvt Lmt ❤️
        </a>
      </p>
          </div>
    </section>
    
  );
};

export default Footer;