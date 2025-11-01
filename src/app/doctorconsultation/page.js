import React from 'react';
import HealthConcernSlider from '../Components/Healthcorner';
import HealthCheckupSlider from '../Components/Frequencybook';

import DoctorConsultationTips from './DoctorConsultationTips';
import BookingSteps from './Bookingstep';
import Banner from './Banner';

const Page = () => {
  return (
    <>
 <Banner/>

   <HealthConcernSlider/>


 {/*  */}
    <div className="flex items-center justify-center bg-white px-4 py-9 my-9">
      <div className="bg-[#edf7f7]  shadow-md  max-w-7xl w-full p-8 flex flex-col md:flex-row justify-between items-center gap-6 xl:px-10">
        <div className="flex-1">  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Get personalized <span className="text-[#007b7f]">7-day diet plan</span> from an expert dietitian @₹299 only!
          </h2>
        

          <div className="bg-[#ffc660] px-4 py-2 font-semibold text-sm text-black rounded-md inline-block mb-4 tracking-widest">
            ARE YOU STRUGGLING TO ACHIEVE YOUR HEALTH GOALS?
          </div>

          <p className="text-gray-800 font-medium mb-3">
            Our dietitian consultation service might just be what you need!
          </p>

          <ul className="text-gray-600 space-y-2 list-disc pl-5 mb-6">
            <li>With over 50+ expert Dietitians</li>
            <li>Get a customized 7-day diet plan tailored to your demographics, health and goals.</li>
         
          </ul>

          <button className="bg-[#8b1ed0] hover:bg-[#8b1ed0] text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
            Book Appointment
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/diet__banner.svg" 
            alt="Diet Plan Illustration"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
      </div>
    </div>
    {/*  */}
 
 <HealthCheckupSlider/>
<BookingSteps/>
 <DoctorConsultationTips/>


</>

  );
};

export default Page;
