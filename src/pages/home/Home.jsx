import React from 'react'
import LandingPage from './LandingPage'
import ChooseUs from './ChooseUs'
import Consultation from './Consultation'
import Testimonials from './Testimonials'
import AnimatedPage from '../../AnimatedPage'

const Home = () => {
  return (
    <div className="mt-15 md:mt-0">
      <AnimatedPage>
        <LandingPage/>
        <ChooseUs/>
        <Consultation/>
        <Testimonials/>
      </AnimatedPage>
    </div>
  )
}

export default Home
