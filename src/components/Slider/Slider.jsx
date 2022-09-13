import React from 'react'
import { slider } from '../../Data/Slider'
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Slider = () => {
   
  return (
      <section className='slider'>
          <div className="container">
              <h6 className="section-title">Testimonial</h6>
              <h2 className="secondary-title">What they say?</h2>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  {
                      slider.map((item, index) => {
                          return (
                              
                              <SwiperSlide key={index}>
                                <div className="swiper-container">
                                    
                                  <div className="slider-info">
                                      <h4 className="name">
                                          {item.name}
                                      </h4>
                                      <p>{item.title}</p>
                                      <small>{item.info}</small>
                                  </div>
                                  <img src={item.img} alt={item.name} />
                                </div>
                              </SwiperSlide>
                            
                          )
                      })
                  }
        
      </Swiper>
          </div>
    </section>
  )
}

export default Slider