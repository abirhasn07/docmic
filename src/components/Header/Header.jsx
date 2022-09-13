import React from 'react'
import Hero from '../Hero-section/Hero'
import Navbar from '../Navbar/Navbar'
import './Header.css'
const Header = () => {
  return (
      <header>
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <Navbar />
      <Hero/>
    </header>
  )
}

export default Header