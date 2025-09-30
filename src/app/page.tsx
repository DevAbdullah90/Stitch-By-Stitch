import React from 'react'
import HeroPreview from '@/components/widget/home/Hero'
import WhyChooseUs from '@/components/widget/home/WhyChooseUs'
import AboutUs from '@/components/widget/home/Aboutus'
import SignatureCarousel from '@/components/widget/home/SignatureCollection'
import Testimonials from '@/components/widget/home/Testimonials'
import ServicesSection from '@/components/widget/home/Services'

const page = () => {
  return (
    <div>
      <HeroPreview />
      <WhyChooseUs />
      <AboutUs />
      <SignatureCarousel />
      <Testimonials />
      <ServicesSection />
    </div>
  )
}

export default page
