import React from 'react'
import sub_hero from '../../images/sub_hero.png'
import './Subhero.css'
const Subhero = () => {
  return (
      <section className='sub-hero'>
          <div className="sub-hero-circle"></div>
          <div className="container flex-regular">
              <div className="sub-hero-info">
                  <h5 className="section-title">16+ Years Experiences </h5>
                  <h2 className="secondary-title">
                  We Are Always ensure Best Medical Treatment For Your Health
                  </h2>
                  <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like</p>
              </div>
              <div className="sub-hero-content">
                  <img src={sub_hero} alt="3d doctor character walking" className="sub-hero-img" />
              </div>
          </div>
    </section>
  )
}

export default Subhero