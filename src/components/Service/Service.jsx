import React from 'react'
import {FaHeartbeat,FaTooth} from 'react-icons/fa'
import { BsCalendarCheckFill, BsBagPlusFill } from 'react-icons/bs'
import './Service.css'
const Service = () => {
  return (
      <section className='service'><div className="container">
          <div className="service-title">     
          <h5 className="section-title">Our Services</h5>
          <h2 className="secondary-title">Services For Your Health</h2>
          </div>
          <div className="service-container flex-regular">
              <div className="card">
                  <FaHeartbeat className="card-icon"/>
                  <h4>Cardiology</h4>
                  <p>Seduahag perspiciati under omnised atused error.</p>
                  <button>Explore Now</button>
              </div>
              <div className="card">
                  <BsCalendarCheckFill className="card-icon"/>
                  <h4>Cardiology</h4>
                  <p>Seduahag perspiciati under omnised atused error.</p>
                  <button>Explore Now</button>
              </div>
              <div className="card">
                  <FaTooth className="card-icon"/>
                  <h4>Cardiology</h4>
                  <p>Seduahag perspiciati under omnised atused error.</p>
                  <button>Explore Now</button>
              </div>
              <div className="card">
                  <BsBagPlusFill className="card-icon"/>
                  <h4>Cardiology</h4>
                  <p>Seduahag perspiciati under omnised atused error.</p>
                  <button>Explore Now</button>
              </div>
          </div>
      </div></section>
  )
}

export default Service