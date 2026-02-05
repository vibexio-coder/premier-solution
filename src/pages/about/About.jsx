import React from 'react'
import AboutLandingPage from './AboutLandingPage'
import WeAre from './WeAre'
import Vision from './Vision'
import WeAreDifferent from './WeAreDifferent'
import AnimatedPage from '../../AnimatedPage'

const About = () => {
  return (
        <div className="mt-15 md:mt-0">

    <AnimatedPage>
        <AboutLandingPage/>
        <WeAre/>
        <Vision/>
        <WeAreDifferent/>
    </AnimatedPage>
        </div>
  )
}

export default About
