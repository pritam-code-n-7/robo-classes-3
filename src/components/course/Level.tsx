import { ButtonDemo } from '@/demo/ButtonDemo'
import Link from 'next/link'
import React from 'react'

const Level = () => {
  return (
    <div className='flex flex-col gap-6 items-center p-20'>
      <div className='flex flex-col gap-3 items-center'>
        <p className='text-2xl font-extrabold'>Completed Level 1 already?</p>
        <p className='font-semibold'>Learn more about other levels</p>
      </div>
      <div className='flex flex-row gap-8 items-center '>
        <Link href={''}>
        <ButtonDemo name='level 2' type='button' className='rounded-3xl py-7 px-32 bg-sky-100 text-sky-500 text-lg shadow-xl dark:text-black'/>
        </Link>
        <Link href={''}>
        <ButtonDemo name='level 3' type='button' className='rounded-3xl py-7 px-32 bg-sky-100 text-sky-500 text-lg shadow-xl dark:text-black' />
        </Link>
        <Link href={''}>
        <ButtonDemo name='level 4' type='button' className='rounded-3xl py-7 px-32 bg-sky-100 text-sky-500 text-lg shadow-xl dark:text-black'/>
        </Link>
      </div>
    </div>
  )
}

export default Level
