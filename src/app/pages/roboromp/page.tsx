import AboutUs from '@/components/roboromp/AboutUs'
import Challenge from '@/components/roboromp/Challenge'
import Courses from '@/components/roboromp/Courses'
import FaqSection from '@/components/roboromp/FaqSection'
import Feature from '@/components/roboromp/Feature'
import Guidelines from '@/components/roboromp/Guidelines'
import HeroSection from '@/components/roboromp/HeroSection'
import HowToParticipate from '@/components/roboromp/HowToParticipate'
import Organize from '@/components/roboromp/Organize'
import OurCommunity from '@/components/roboromp/OurCommunity'
import Prizes from '@/components/roboromp/Prizes'
import Themes from '@/components/roboromp/Themes'
import WhyParticipate from '@/components/roboromp/WhyParticipate'
import { ROBO_ROMP_YT, WE_DO_YT } from '@/constants/videos'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
      <AboutUs src={ROBO_ROMP_YT}/>
      <Prizes />
      <Organize />
      <Themes />
      <Challenge />
      <WhyParticipate />
      <HowToParticipate />
      <Guidelines />
      <AboutUs src={WE_DO_YT}/>
      <OurCommunity />
      <Courses />
      <FaqSection />
    </div>
  )
}

export default page
