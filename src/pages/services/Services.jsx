import React from 'react'
import ServicesLandingPage from './ServicesLandingPage'
import ServicesCards from './ServicesCards'
import OurProcess from './OurProcess'

const Services = () => {
    return (
    <div className="mt-15 md:mt-0">
            <ServicesLandingPage />
            <ServicesCards />
            <OurProcess />
        </div>
    )
}

export default Services
