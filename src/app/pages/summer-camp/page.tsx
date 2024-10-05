import CarouselFe from '@/components/CarouselFe'
import AboutUs from '@/components/homeschooling/AboutUs'
import CardsSection from '@/components/homeschooling/CardsSection'
import ParentsCorner from '@/components/ParentsCorner'
import RightCourse from '@/components/robotics/RightCourse'
import Feature from '@/components/summer-camp/Feature'
import HeroSection from '@/components/summer-camp/HeroSection'
import TrendingCarouselFe from '@/components/TrendingCarouselFe'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection title='Robotics,STEM and programming courses for kids'/>
      <Feature />
      <RightCourse />
      <CardsSection />
      <ParentsCorner />
      <AboutUs />
      <TrendingCarouselFe />
    </div>
  )
}

export default page
