import React from 'react'
import { Link } from 'react-router-dom'

const Herosectionbottomtext = () => {
  return (
    <div  className=' font-[font2] text-white flex justify-center items-center gap-5'>
        <Link className=' hover:text-[#D3FD50] hover:border-[#D3FD50] border-3 leading-[5vw] text-[6.5vw] px-8 mb-2 pt-4 uppercase rounded-full ' to={'/Projects'}>Projets</Link>
        <Link className=' hover:text-[#D3FD50] hover:border-[#D3FD50] border-3 leading-[5vw] text-[6.5vw] px-8 mb-2 pt-4 uppercase rounded-full ' to={'/Agence'} >Agence</Link>
    </div>
  )
}

export default Herosectionbottomtext