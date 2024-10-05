import { SUMMER_CAMP } from '@/constants/Images'
import { HomeSchoolingFormDemo } from '@/demo/homeschooling-demo/HomeSchoolingFormDemo'
import React from 'react'

const Feature = () => {
  return (
    <div className='flex justify-center py-20 '>
      <HomeSchoolingFormDemo src={SUMMER_CAMP} title='Register for Summer Camp'/>
    </div>
  )
}

export default Feature
