import { FreeTrialClassForm } from '@/demo/coding-and-robotics-courses-demo/FreeTrialClassForm'
import React from 'react'

const FormSection = () => {
  return (
    <div className=' px-20 flex justify-center bg-custom-gradient relative py-20'>
       <div className="absolute top-0 right-0 w-36 h-1/5 bg-gray-200/20 rounded-bl-full "></div>
      <FreeTrialClassForm />
      <div className="absolute bottom-0 left-0 w-36 h-1/5 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  )
}

export default FormSection
