'use client';
import Image from 'next/image';
import { FaMicroscope, FaUserMd, FaFlask, FaStar } from 'react-icons/fa';

const features = [
  {
    icon: <FaMicroscope className="text-[#8a21ce] text-3xl" />,
    title: 'Accuracy You Can Trust',
    description:
      'As the best Diagnostics center & pathology lab in Mohali, we employ the latest technology and adhere to strict quality control measures to ensure precise and reliable results for every medical test Punjab.',
  },
  {
    icon: <FaUserMd className="text-[#8a21ce] text-3xl" />,
    title: 'Comprehensive Services',
    description:
      'From routine blood testing and Fever panel to specialized NIPT and FNAC, our wide range of lab testing Mohali covers all your diagnostic needs.',
  },
  {
    icon: <FaFlask className="text-[#8a21ce] text-3xl" />,
    title: 'Convenience at Your Fingertips',
    description:
      'Enjoy the ease of home sample collection, bringing our trusted services right to your home in Mohali and across Punjab.',
  },
  {
    icon: <FaStar className="text-[#8a21ce] text-3xl" />,
    title: 'Experienced Professionals',
    description:
      'Our team of highly qualified pathologists, technicians, and support staff are dedicated to providing the highest standards of care.',
  },
];

const finalNote = {
  description:
    'Whether you need a diabetes test, a liver function test, thyroid testing, or any other medical test Mohali, REDPATH DIAGNOSTICS is here for you. We are the best Diagnostics center & pathology lab in Mohali because we believe in empowering you with accurate health information. Connect with us today for a healthier tomorrow!',
};

export default function WhyChooseRedpath() {
  const leftFeatures = features.slice(0, 2);
  const rightFeatures = features.slice(2);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 md:px-4 xl:px-32" id="why-choose">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Why Choose <span className="text-[#8a21ce]">REDPATH DIAGNOSTICS?</span>
        </h2>
        <p className="text-gray-600 mt-3 text-base md:text-lg">
          Reliable | Accurate | Affordable | Caring
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {leftFeatures.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-sm hover:shadow-md rounded-2xl transition duration-300 bg-white border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/img/my.webp"
            alt="Redpath Diagnostics"
            width={320}
            height={320}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {rightFeatures.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-sm hover:shadow-md rounded-2xl transition duration-300 bg-white border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Description */}
      <div className="mt-14 max-w-4xl mx-auto text-center text-gray-700 text-base md:text-lg">
        {finalNote.description}
      </div>
    </section>
  );
}
