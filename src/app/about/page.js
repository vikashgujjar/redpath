import React from 'react'
import About from './About'
import WhyChooseRedpath from '../Components/Whychoose'
import Banner from '../doctorconsultation/Banner'
import WhyBookTests from '../Components/Whybooktest'

const page = () => {
  return (
    <>
    <Banner/>
     <section className=" px-4 md:px-20 bg-white xl:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/3">
          <img
            src='/img/about.gif'
            alt="Healthy people on earth"
            className="w-full h-[450px]  object-contain"
            priority
          />
        </div>
        <div className="w-full md:w-1/1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Creating a Diagnostics Revolution
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            From the start, our goal has been to empower people to take control of their health. Diagnostics shouldn’t be a privilege – it’s a lifeline, and everyone deserves it. Since 2018, we’ve touched over 7 million lives, providing not just answers, but hope. For us, every test we conduct is a step towards saving lives, supporting families, and building a healthier India. This isn’t just our job—it’s our purpose to <strong className="font-bold text-gray-900">Give India its Right to Quality Diagnostics</strong>
          </p>

          <p className="text-gray-700 text-justify leading-relaxed">
            From the start, our goal has been to empower people to take control of their health. Diagnostics shouldn’t be a privilege – it’s a lifeline, and everyone deserves it. Since 2018, we’ve touched over 7 million lives, providing not just answers, but hope. For us, every test we conduct is a step towards saving lives, supporting families, and building a healthier India. This isn’t just our job—it’s our purpose to <strong className="font-bold text-gray-900">Give India its Right to Quality Diagnostics</strong>
          </p>
        </div>
      </div>
    </section>

      <section className="px-4 md:px-20 bg-white xl:px-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
     
        <div className="w-full md:w-1/1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Creating a Diagnostics Revolution
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            From the start, our goal has been to empower people to take control of their health. Diagnostics shouldn’t be a privilege – it’s a lifeline, and everyone deserves it. Since 2018, we’ve touched over 7 million lives, providing not just answers, but hope. For us, every test we conduct is a step towards saving lives, supporting families, and building a healthier India. This isn’t just our job—it’s our purpose to <strong className="font-bold text-gray-900">Give India its Right to Quality Diagnostics</strong>
          </p>

          <p className="text-gray-700 text-justify leading-relaxed">
            From the start, our goal has been to empower people to take control of their health. Diagnostics shouldn’t be a privilege – it’s a lifeline, and everyone deserves it. Since 2018, we’ve touched over 7 million lives, providing not just answers, but hope. For us, every test we conduct is a step towards saving lives, supporting families, and building a healthier India. This isn’t just our job—it’s our purpose to <strong className="font-bold text-gray-900">Give India its Right to Quality Diagnostics</strong>
          </p>
        </div>
           <div className="w-full md:w-1/3">
          <img
            src='/img/MC_LOOP_03.gif'
            alt="Healthy people on earth"
            className="w-full h-[450px]  object-contain"
            priority
          />
        </div>
      </div>
    </section>
    <About/>
    <WhyBookTests/>
    <WhyChooseRedpath/>
    
    </>
  )
}

export default page