'use client';
import React, { useState } from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa';

const packages = [
  {
    title: "Fit India Full Body Checkup with Free HbA1c",
    price: 1099,
    oldPrice: 5233,
    tags: ["Diabetes (HbA1c)", "Lipid", "Liver", "Kidney", "Infection", "Thyroid"],
    tests: 89,
  },
  {
    title: "Fit India Full Body Checkup With Vitamin Screening with Free HsCRP",
    price: 1599,
    oldPrice: 7614,
    tags: ["Heart", "Diabetes (HbA1c)", "Lipid", "Liver", "Kidney", "Infection", "Thyroid", "Vitamin"],
    tests: 92,
  },
  {
    title: "Advance Plus Full Body Checkup with Free HsCRP",
    price: 2199,
    oldPrice: 8260,
    tags: ["Heart", "Vitamins", "Liver", "Kidney", "Diabetes / Sugar", "Bone / Joints", "Thyroid"],
    tests: 98,
  },
  {
    title: "Smart Full Body Checkup",
    price: 799,
    oldPrice: 2199,
    tags: ["Sugar", "Lipid", "Liver", "Kidney", "Infection", "Thyroid"],
    tests: 87,
  },
];

const categories = [
  'Full Body', 'Heart', 'Fever', 'Vitamin', 'Diabetes', 'Thyroid', 'Hormone', 'Cancer',
  'Lifestyle', 'Pregnancy', 'Fertility', 'Allergy', 'STD', 'Combo', 'Arthritis', 'Anemia'
];

const categoryImages = {
  'Full Body': '/Image/fullbody.webp',
  'Heart': '/Image/heart.webp',
  'Fever': '/Image/fever.webp',
  'Vitamin': '/Image/vitamin.webp',
  'Diabetes': '/Image/daibities.webp',
  'Thyroid': '/Image/thyroid.webp',
  'Hormone': '/Image/hormone.webp',
  'Cancer': '/Image/cancer.webp',
  'Lifestyle': '/Image/fitnes.webp',
  'Pregnancy': '/Image/pregnancy.webp',
  'Fertility': '/Image/ferlity.webp',
  'Allergy': '/Image/Alergy.webp',
  'STD': '/Image/std.webp',
  'Combo': '/Image/combo.webp',
  'Arthritis': '/Image/arthritis.webp',
  'Anemia': '/Image/anenmia.webp',
};

export default function FullBodyPage() {
  const [selectedCategory, setSelectedCategory] = useState('Full Body');

  const filteredPackages = packages.filter(pkg =>
    selectedCategory === 'Full Body' ||
    pkg.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
  );

  return (
    <section className="px-4 py-6 sm:px-5 md:px-8 xl:px-28">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-6">
        Showing results for <span className="text-[#8b1ed0] font-extrabold">"{selectedCategory}"</span> package
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        {/* Category Sidebar */}
        <div className="border border-gray-200 rounded p-4 bg-white shadow-sm sticky top-4 h-fit">
          <img src='/img/bannnercatagory.webp' className='rounded-md mb-4' alt='banner' />
          <h4 className="font-bold text-base sm:text-lg mb-4">Categories</h4>
          <ul className="grid grid-cols-2 gap-3">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-200 border text-sm ${
                  selectedCategory === cat
                    ? 'bg-[#8b1ed0] text-white border-[#8b1ed0]'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-200'
                }`}
              >
                <img
                  src={categoryImages[cat]}
                  alt={cat}
                  className="w-6 h-6 object-contain"
                />
                <span className="font-medium">{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filteredPackages.length === 0 ? (
            <p className="text-gray-500 col-span-full">No packages found for "{selectedCategory}"</p>
          ) : (
            filteredPackages.map((pkg, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 shadow-sm hover:shadow-md transition duration-200 bg-white rounded-lg flex flex-col justify-between h-full"
              >
                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#8b1ed0] mb-2">
                  {pkg.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {pkg.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#f3f4f6] text-gray-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1"
                    >
                      <FaCheck className="text-gray-400 text-xs" /> {tag}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="flex items-center text-xs text-gray-500 mb-2 flex-wrap gap-2">
                  <span>Reports in</span>
                  <span className="underline underline-offset-2 decoration-dotted cursor-pointer">T&C</span>
                  <span className="bg-[#e7f9fb] text-black font-semibold px-2 py-0.5 rounded">15 Hours</span>
                  <span className="text-gray-300">|</span>
                  <span>Tests</span>
                  <span className="bg-[#f3f4f6] text-black font-semibold px-2 py-0.5 rounded">{pkg.tests}</span>
                </div>

                {/* Price + Add Button */}
                <div className="flex justify-between items-center pt-1">
                  <div>
                    <p className="text-sm font-semibold text-black">₹{pkg.price}</p>
                    <p className="text-xs line-through text-gray-400">₹{pkg.oldPrice}</p>
                  </div>
                  <button className="flex items-center gap-1 text-white bg-[#8b1ed0] px-3 py-1.5 rounded hover:bg-[#6d0db7] transition text-xs">
                    Add <FaPlus />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
