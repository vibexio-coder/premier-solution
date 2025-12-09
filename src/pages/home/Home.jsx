import React from 'react'
import LandingPage from './LandingPage'
import ChooseUs from './ChooseUs'
import Consultation from './Consultation'
import Testimonials from './Testimonials'
import AnimatedPage from '../../AnimatedPage'

const Home = () => {
  return (
    <AnimatedPage>
      <LandingPage/>
      <ChooseUs/>
      <Consultation/>
      <Testimonials/>
    </AnimatedPage>
  )
}

export default Home
