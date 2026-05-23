import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <>
    <div className='container' >
        <div className='tittle' >
            <h2>Header</h2>
        </div>
        <div className='links' >
            <Link className='Links' to="/">Home</Link>
            <Link className='Links' to="/about">About</Link>
            <Link className='Links' to="/projects">Projects</Link>
            <Link className='Links' to="/contact">Contact</Link>
        </div>
    </div>
    </>

  )
}

export default Header