import React from 'react'
import feature_img from '../../images/feature_img.png'
import feature_card1 from '../../images/feature-card (1).png'
import feature_card2 from '../../images/feature-card (2).png'
import feature_card3 from '../../images/feature-card (3).png'
import feature_card4 from '../../images/feature-card (4).png'
import './Features.css'

const Features = () => {
  return (
      <section className='features'>
          <div className="feature-circle"></div>
          <div className="container flex-regular">
              <div className="feature-content">
                  <img src={feature_img} alt=" doctor jumping on the air happily" className="feature-img" />
              </div>
              <div className="features-info">
                  <div className="feature-title">
                      <h6 className="section-title">
                      Our Hospital Feature
                      </h6>
                      <h2 className="secondary-title">
                      Make An Appointment Easy And Fast Services 
                      </h2>
                  </div>
                  <div className="flex-regular feature-card-container">
                      <div className="feature-card">
                          <div className="feature-card-header flex-regular">
                              <h4>24 Hours Doctor Support</h4>
                              <img src={feature_card1} alt="doctor images" />
                          </div>
                          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                      </div>
                      <div className="feature-card">
                          <div className="feature-card-header flex-regular">
                              <h4>Exclusive Supports</h4>
                              <img src={feature_card2} alt="24/7 Online Support images" />
                          </div>
                          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                      </div>
                      <div className="feature-card">
                          <div className="feature-card-header flex-regular">
                              <h4>Friendly Environment </h4>
                              <img src={feature_card3} alt="world environment images" />
                          </div>
                          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                      </div>
                      <div className="feature-card">
                          <div className="feature-card-header flex-regular">
                              <h4>24 Hours Nurse Support</h4>
                              <img src={feature_card4} alt="nurse images" />
                          </div>
                          <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                      </div>
                  </div>
              </div>
              
          </div>
    </section>
  )
}

export default Features