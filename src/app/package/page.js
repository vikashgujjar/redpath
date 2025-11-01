"use client";
import React from "react";
import {
  FaBug,
  FaTint,
  FaMicroscope,
  FaHeartbeat,
  FaVial,
  FaArrowRight,
} from "react-icons/fa";

const iconMap = {
  "Malaria": <FaBug />,
  "Dengue Antibody": <FaTint />,
  "Blood Infection": <FaMicroscope />,
  "Inflammation": <FaHeartbeat />,
  "Platelet Count": <FaVial />,
};

const pkg = {
  title: "Fever Package Advance Plus in Delhi",
  reportsIn: "13 hours",
  parameters: "65 Parameters",
  features: [
    "Malaria",
    "Dengue Antibody",
    "Blood Infection",
    "Inflammation",
    "Platelet Count",
  ],
  discountedPrice: 1599,
  originalPrice: 3666,
  discount: "56% Off",
  vipPrice: 1439,
  savings: 2001,
  homeCollection: "Home Sample Collection in 2 Hours*",
  alsoKnownAs: "Fever Panel",
  sampleRequired: "Urine, Blood",
  fasting: "Not Required",
  gender: "Both",
  ageGroup: "Above 5 Years",
  memberOffers: [
    { discount: "5% Off", description: "on 2 members", price: "₹3038", original: "₹3198" },
    { discount: "10% Off", description: "on 3 members", price: "₹4317", original: "₹4797" },
    { discount: "15% Off", description: "on 4+ members", price: "₹5436", original: "₹6366" },
  ],
  minCartAmount: "₹800",
};

const Page = () => {
  return (
    <div className="w-full bg-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-sm text-gray-500">
            3088+ people booked this recently
          </p>

          <h2 className="text-xl font-bold text-[#d10044]">
            {pkg.title}
          </h2>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {pkg.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 text-sm rounded-full gap-1"
              >
                <span>{iconMap[feature]}</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="border-t my-4" />

          {/* Details Section */}
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Also known as:</span>{" "}
              <span className="text-gray-700">{pkg.alsoKnownAs}</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-3 border">
                <p className="text-gray-500">Includes</p>
                <p className="font-semibold">{pkg.parameters}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border">
                <p className="text-gray-500">Reports in (T&C)</p>
                <p className="font-semibold">{pkg.reportsIn}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border">
                <p className="text-gray-500">Sample Required</p>
                <p className="font-semibold">{pkg.sampleRequired}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border">
                <p className="text-gray-500">Fasting</p>
                <p className="font-semibold">{pkg.fasting}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border">
                <p className="text-gray-500">Recommended Gender</p>
                <p className="font-semibold">{pkg.gender}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border">
                <p className="text-gray-500">Age Group</p>
                <p className="font-semibold">{pkg.ageGroup}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Sticky Card */}
        <div className="lg:sticky top-6 h-fit">
          <div className="border rounded-xl shadow-md p-4 space-y-3">
            {/* Price Section */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-2xl font-bold">
                  ₹{pkg.discountedPrice}{" "}
                  <span className="text-gray-400 line-through text-base ml-1">
                    ₹{pkg.originalPrice}
                  </span>
                </p>
                <p className="text-green-600 text-sm font-semibold">
                  {pkg.discount}
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs">
                  VIP
                </span>
                ₹{pkg.vipPrice}
              </div>
            </div>

            {/* Home Collection Notice */}
            <div className="bg-[#F3F9FF] text-sm p-3 rounded-lg">
              🛵 {pkg.homeCollection}
            </div>

            {/* Savings Notice */}
            <div className="bg-green-100 text-green-700 text-sm p-3 rounded-lg font-medium">
              🎉 You will Save ₹{pkg.savings} on this Package
            </div>

            {/* Action Buttons */}
            <button className="w-full bg-blue-100 border border-blue-300 text-blue-700 font-semibold py-2 rounded-lg hover:bg-blue-200">
              + Add To Cart
            </button>
            <button className="w-full bg-[#D10044] text-white font-bold py-2 rounded-lg hover:bg-[#b8003a] flex items-center justify-center gap-2 text-sm">
              ₹{pkg.discountedPrice} Book Now <FaArrowRight />
            </button>

            {/* Member Offers */}
            <div className="bg-blue-50 rounded-lg p-4 space-y-3 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-sm">
                {pkg.memberOffers.map((offer, idx) => (
                  <div key={idx} className="bg-white rounded shadow p-3">
                    <p className="text-red-500 font-bold">{offer.discount}</p>
                    <p>{offer.description}</p>
                    <p className="font-bold">
                      {offer.price}{" "}
                      <span className="line-through text-gray-400">
                        {offer.original}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">
                Given amount is subject to change based on number of members you
                select. Applicable on minimum cart amount {pkg.minCartAmount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;