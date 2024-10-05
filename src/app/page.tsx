
const StudentSpeaks = dynamic(()=>import('@/components/StudentSpeaks'))
const TrendingCarouselFe = dynamic(()=>import('@/components/TrendingCarouselFe'))
const CardsSection = dynamic(()=>import('@/components/homeschooling/CardsSection'))

import AboutUs from '@/components/AboutUs'
import CarouselFe from '@/components/CarouselFe'
import HeroSection from '@/components/HeroSection'
import ParentsCorner from '@/components/ParentsCorner'
import RightCourse from '@/components/robotics/RightCourse'
import dynamic from 'next/dynamic'
import React from 'react'

function page() {
  return (
    <div>
     <HeroSection />
     <CardsSection />
     <StudentSpeaks />
     <ParentsCorner />
     <CarouselFe /> 
     <AboutUs />
     <RightCourse />
     <TrendingCarouselFe />
    </div>
  )
}

export default page
