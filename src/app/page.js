import React from 'react'
import Header from './Components/Header'
import HealthCheckupSlider from './Components/Frequencybook'
import HealthPackages from './Components/Healthpackage'
import WhyBookTests from './Components/Whybooktest'
import Wellness from './Components/Womenwellness'
import Features from './Components/Features'
import ImageSlider from './Components/Imgaeslider'
import TestimonialsSlider from './Components/Testimonails'
import HealthConcernSlider from './Components/Healthcorner'
import MobileFooterNav from './Components/Mobilefooter'
import RoutineCheckups from './Components/Healthcheckup'
import PhonePopup from './Components/Phonepopup'
import WhyChooseRedpath from './Components/Whychoose'
import ContactAndFAQ from './Components/Faq'

const page = () => {
  return (
    <>
      <Header />
      <HealthConcernSlider />
      <HealthPackages />
      <ImageSlider />
      <WhyBookTests />
      <HealthCheckupSlider />
      <Wellness />
      <Features />
      <WhyChooseRedpath/>
      <ContactAndFAQ/>
      <RoutineCheckups />
      <TestimonialsSlider />
      <MobileFooterNav />
      <PhonePopup/>

      
    </>
  )
}

export default page
