import React from 'react'
import testimonial from "../../assets/images/testimonials.webp"

const Testimonials = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center py-[100px]'>
            <h1 className='text-[#496C6B] space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center mb-[30px]'>What Our Clients Says</h1>
            <img className='w-[693px]' src={testimonial} alt="" />
        </div>
    )
}

export default Testimonials
