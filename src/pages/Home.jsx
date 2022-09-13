import React from 'react'
import FaQ from '../components/FaQ/FaQ'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Service from '../components/Service/Service'
import Slider from '../components/Slider/Slider'
import Subhero from '../components/Subhero/Subhero'

const Home = () => {
  return (
    <>
      <Header />
      <Service />
      <Subhero />
      <Features />
      <FaQ />
      <Slider />
      <Footer/>
    </>
  )
}

export default Home