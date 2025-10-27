import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import IconSections from '../components/IconSections'
import Services from '../components/Services'
import Specialization from '../components/Specialization'
import PartnersSection from '../components/Partners'
import Testimonials from '../components/Testimonial'
import ContactUs from '../components/ContactUs'
import GoogleMap from '../components/GoogleMAp'

function Home() {
  return (
    <div>
        <HeroSection/>
        {/* <AboutUs/> */}
        <IconSections/>
        <Specialization/>
        <Services/>
        <PartnersSection/>
        <Testimonials/>
        <ContactUs/>
        <GoogleMap/>
    </div>
  )
}

export default Home