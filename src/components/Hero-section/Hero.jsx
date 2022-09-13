import React from 'react'
import './Hero.css'
import hero_img from '../../images/hero_img.png'
import doctor1 from '../../images/Ellipse 6.png'
import doctor2 from '../../images/Ellipse 7.png'
import doctor3 from '../../images/Ellipse 8.png'
import doctor4 from '../../images/Ellipse 9.png'

import {TiTickOutline} from 'react-icons/ti'
import {BsFillPlusCircleFill} from 'react-icons/bs'

const Hero = () => {
  return (
      <section className='hero'><div className="container flex-regular">
          <div className="hero-info">
              <h1 className="primary-title">
                  Your <span className='span-primary'>Health</span> Is Our Top <span className='span-secondary'>
                  Priority
              </span>
              </h1>
              <p className="section-subtitle">There are many variations of passages of lpsum available, but the majority hae suffered.</p>
              <button className="button-primary">
              Meet Our Specialist
              </button>
              <div className="hero-sub-info flex-regular">
                  <div className="hero-sub-card">
                      <h3>262k+</h3>
                      <h6>Recovered Patients</h6>
                  </div>
                  <div className="hero-sub-card">
                      <h3>96%</h3>
                      <h6>Satisfaction Rate</h6>
                  </div>
                  <div className="hero-sub-card">
                      <h3>86+</h3>
                      <h6>Expert Doctors</h6>
                  </div>
                  
              </div>
          </div>
          <div className="hero-content">
              <div className="hero-img">
              <img src={hero_img} alt="3d doctor character" loading='lazy'/>
                  
                  <div className="hero-btn"> 
                      
                      <TiTickOutline className='tick'/>
                  Regular Checkup
                  
                  </div>
                  <div className="hero-doctor-list">
                      <p>Meet Our Doctors</p>
                      <div className="doctor-image-container">
                          <img src={doctor1} alt="our doctors" loading='lazy' />
                          <img src={doctor2} alt="our doctors" loading='lazy' />
                          <img src={doctor3} alt="our doctors" loading='lazy' />
                          <img src={doctor4} alt="our doctors" loading='lazy' />
                          <BsFillPlusCircleFill size={"38px"} color="#2D89FF"/>

                      </div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                  </div>
              </div>
          </div>
      </div></section>
  )
}

export default Hero