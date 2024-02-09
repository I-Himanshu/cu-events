import React from 'react'
import HackLanding from '../component/Hackentine/HackLanding'
import HackAbout from '../component/Hackentine/HackAbout'
import Schedule from '../component/Hackentine/Schedule'

export default function Hackentine() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#55141F] '>
        <HackLanding/>
        <HackAbout/>
        <Schedule/>
    </div>
  )
}