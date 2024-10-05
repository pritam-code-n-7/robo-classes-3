import Competition from '@/components/community/Competition'
import EducationNews from '@/components/community/EducationNews'
import HeroSection from '@/components/community/HeroSection'
import SpotLight from '@/components/community/SpotLight'
import CarouselFe from '@/components/CarouselFe'
import TrendingCarouselFe from '@/components/TrendingCarouselFe'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <SpotLight />
      <TrendingCarouselFe />
      <CarouselFe />
      <Competition />
      <EducationNews />
    </div>
  )
}

export default page
