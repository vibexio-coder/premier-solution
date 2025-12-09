import React from 'react'
import AboutLandingPage from './AboutLandingPage'
import WeAre from './WeAre'
import Vision from './Vision'
import WeAreDifferent from './WeAreDifferent'
import AnimatedPage from '../../AnimatedPage'

const About = () => {
  return (
    <AnimatedPage>
        <AboutLandingPage/>
        <WeAre/>
        <Vision/>
        <WeAreDifferent/>
    </AnimatedPage>
  )
}

export default About
