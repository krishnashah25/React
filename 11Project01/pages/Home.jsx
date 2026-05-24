import React from 'react'
import Video from '../component/Home/Video'
import HeroSection from '../component/Home/Herosection'
import HomeSectionBottomText from '../component/Home/Herosectionbottomtext'

const Home = () => {
  return (
    <>
      <div className='w-full h-screen fixed'>
          <Video />
      </div>
      <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
          <HeroSection />
          <HomeSectionBottomText />
      </div>
    </>
  )
}

export default Home