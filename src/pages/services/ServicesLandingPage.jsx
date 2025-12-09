import React from 'react'
import servicesimg from "../../assets/images/servicesimg.webp"

const ServicesLandingPage = () => {
    return (
        <div className='bg-[#1C4746] min-h-[420px] px-6 sm:px-10 lg:px-16 xl:px-[90px] pt-14 lg:pt-[60px] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0'>

            <div className="text-center lg:text-left max-w-xl">
                <h1 className="space-grotesk font-bold 
          text-[24px] sm:text-[36px] xl:text-[42px] 
          leading-[40px] sm:leading-[52px] xl:leading-[66px] 
          tracking-[0.03em] text-white"
                >
                    Our Services
                            </h1>

                <p className="
          pt-4 sm:pt-[24px] lg:w-[400px] xl:w-[551px]
          poppins font-normal
          text-[12px] sm:text-[16px] xl:text-[18px]
          leading-7 sm:leading-8 xl:leading-9
          tracking-[0.05em]
          text-[#F8F8F8]
        ">
                    Professional support for individuals, businesses, and
                    corporates powered by accuracy, transparency, and
                    deep domain expertise.
                </p>
            </div>

            <img
                className='w-full max-w-[416px] h-auto lg:h-[303px] object-contain'
                src={servicesimg}
                alt=""
            />
        </div>
    )
}

export default ServicesLandingPage
