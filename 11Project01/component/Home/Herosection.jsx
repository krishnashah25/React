import React from 'react'
import Video from './Video'
const HeroSection = () => {
  return (
    <div  className=' text-center pt-3 font-[font1] text-white'>
        <div className='text-[9.5vw] leading-[8.5vw] flex justify-center items-center uppercase'>L'étincelle</div>
        <div className='text-[9.5vw] leading-[8.5vw] flex justify-center items-start uppercase'>qui<div className='h-[7vw] w-[16vw] rounded-full overflow-hidden object-cover '><Video /></div>génère</div>
        <div className='text-[9.5vw] leading-[8.5vw] flex justify-center items-center uppercase'>la créativité</div>
    </div>
  )
}

export default HeroSection
