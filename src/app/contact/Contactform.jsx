'use client';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <>
    <section
      className="w-full bg-white py-10 px-5 xl:px-20 flex flex-col lg:flex-row items-center justify-center gap-10 bg-[url('/img/contactbg.webp')] bg-no-repeat bg-right bg-contain"
    >
      {/* Image Section */}
      <div className="relative w-full max-w-md xl:max-w-[550px]">
        <div className="absolute -left-5 -bottom-5 w-full h-full border-[10px] border-dotted border-black -z-10"></div>
        <img
          alt="Contact"
          width={600}
          height={500}
          className="w-full xl:h-[460px] h-[300px] object-cover shadow-lg"
          src="/img/contact.gif"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-2xl">
        <p className="text-[#8b1ed0] font-semibold mb-2">Have Questions?</p>
        <h2 className="text-2xl md:text-4xl font-extrabold text-black leading-tight mb-6">
          Feel free to get in touch!
          <br />
          contact now
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-100 p-3 outline-none col-span-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-100 p-3 outline-none col-span-1"
          />
          <input
            type="text"
            placeholder="Phone"
            className="bg-gray-100 p-3 outline-none col-span-1"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-gray-100 p-3 outline-none col-span-1"
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="bg-gray-100 p-3 outline-none col-span-full"
          ></textarea>
          <button
            type="submit"
            className="bg-[#8b1ed0] hover:bg-[#19384b] text-white font-semibold py-3 px-6 col-span-full w-full md:w-fit"
          >
            Send us a message
          </button>
        </form>
      </div>
    </section>


        <section className="w-full px-5 xl:px-32 py-10 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1ed0] mb-6">
        Map of India
      </h2>

      <div className="w-full h-[450px] rounded-md overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25186305.258284144!2d64.25192780451484!3d20.593684241373633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff069dbd845%3A0x94d6a73f6c58f1db!2sIndia!5e0!3m2!1sen!2sin!4v1719120483169!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    </>
  );
}
