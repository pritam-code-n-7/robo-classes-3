import { HOMESCHOOLING_FORM } from '@/constants/Images'
import { HomeSchoolingFormDemo } from '@/demo/homeschooling-demo/HomeSchoolingFormDemo'
import React from 'react'

const Feature = () => {
  return (
    <div className='flex justify-center py-20 '>
      <HomeSchoolingFormDemo src={HOMESCHOOLING_FORM} title='Register for 1 Free trial class'/>
    </div>
  )
}

export default Feature
