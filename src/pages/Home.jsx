import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Specialization from '../components/Specialization'
import PartnersSection from '../components/Partners'
import Testimonials from '../components/Testimonial'
import ContactUs from '../components/ContactUs'
import GoogleMap from '../components/GoogleMAp'
import Certificates from '../components/Certificates'
import AwardSection from '../components/AwardSection'
import OurTeam from '../components/OurTeam'
import SatisfactionSection from '../components/SatisfactionSection'


function Home() {
  return (
    <div>
        <HeroSection/>
        <Services/>
        <Specialization/>
        <Certificates/>
        <AwardSection/>
        <PartnersSection/>
        <OurTeam/>
        <Testimonials/>
        <SatisfactionSection/>
        <ContactUs/>
        <GoogleMap/>
    </div>
  )
}

export default Home