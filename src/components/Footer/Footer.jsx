import React from 'react'
import './Footer.css'
import {BsFacebook,BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillGoogleCircle} from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import footer_logo from '../../images/logo.png'
const Footer = () => {
  return (
      <footer>
          <div className="container flex-regular">
              <div className="footer-colum col-1">
                  <img src={footer_logo} alt="company logo" className="footer-logo" />
                  <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                  <div className="social-icons">
                      <BsFacebook  className='social-icon'/>
                      <BsInstagram className='social-icon' />
                      <AiFillTwitterCircle className='social-icon' />
                      <AiFillGoogleCircle  className='social-icon'/>
                      <FaYoutube className='social-icon'/>
                  </div>
                  <small>Copyright @222 Medicom All Rights Reserved</small>
              </div>
              <div className="footer-colum col-3">
                  <h4 className="section-title">Quick Links</h4>
                  <ul className="footer-list">
                      <li className="footer-item">About Us</li>
                      <li className="footer-item">Our Pricing</li>
                      <li className="footer-item">Our Gallery</li>
                      <li className="footer-item">Appointment</li>
                      <li className="footer-item">Privacy Policy</li>
                  </ul>
              </div>
              <div className="footer-colum col-2">
                  <h4 className="section-title">Our Services</h4>
                  <ul className="footer-list">
                      <li className="footer-item">Services</li>
                      <li className="footer-item">Our Doctors</li>
                      <li className="footer-item">Our Latest News</li>
                      <li className="footer-item">Careers</li>
                      <li className="footer-item">Contact Us</li>
                  </ul>
              </div>
              <div className="footer-colum col-4">
                  <h4 className="section-title">Opening Hours</h4>
                  <ul className="footer-list">
                      <li className="footer-item"><span>Mon- Tue</span>08:00 AM- 05:00 PM</li>
                      <li className="footer-item"><span>Wed- Thu</span>09:00 AM- 06:00 PM</li>
                      <li className="footer-item"><span>Fri- Sat</span>10:00 AM- 07:00 PM</li>
                      <li className="footer-item"><span>Sunday</span>Emergency Only</li>
                      <li className="footer-item"><span>Personal</span>Mon- 05:00 PM</li>
                    
                  </ul>
              </div>
           
          
          </div>
    </footer>
  )
}

export default Footer