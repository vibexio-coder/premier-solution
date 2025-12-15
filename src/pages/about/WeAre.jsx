import React from 'react'
import aboutimg2 from "../../assets/images/aboutimg2.webp"
import founder from "../../assets/images/founder.webp"
import circle from "../../assets/images/circle.webp"
import { RightIcon, TickIcon } from '../../assets/icons/Icons'

const WeAre = () => {
    return (
        <>
            <div className='pt-[70px] px-6 sm:px-10 lg:px-16 xl:px-[90px]'>
                <h1 className='text-[#496C6B] space-grotesk font-bold text-[24px] leading-6 tracking-[0.03em]   text-center mb-[15px]'
                >
                    Who We Are
                </h1>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">

                    <p className='poppins font-normal  text-[14px] sm:text-[16px] leading-[32px] sm:leading-[45px] tracking-[0.08em] w-full lg:w-[560px] text-center lg:text-left'
                    >
                        The Premier Solutions is a professional consultancy firm offering end-to-end services in Taxation, GST, Legal Documentation, Appeals, Tribunal Representation, and Financial Advisory. We support individuals, SMEs, and corporates with accuracy and confidence.
                    </p>

                    <img
                        className='w-[300px] sm:w-[386px] h-auto object-contain'
                        src={aboutimg2}
                        alt=""
                    />
                </div>
            </div>

            <div className="w-full overflow-hidden -mt-10">
                <h1 className='space-grotesk font-bold text-[15.5vw] tracking-[0.03em] text-center text-[#C3CDCD] w-full whitespace-nowrap'>
                    Our Founder
                </h1>
            </div>

            <div className="px-6 sm:px-10 lg:px-16 xl:px-[90px] mt-1 lg:-mt-10 xl:-mt-16">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-[146px]">

                    <div className="w-full lg:w-[498px]">
                        <img
                            src={founder}
                            alt="Founder"
                            className="w-full h-auto rounded-[20px] object-cover"
                        />
                    </div>

                    {/*  RIGHT CONTENT */}
                    <div className="flex-1 relative">

                        {/*  Floating Circle */}
                        <img
                            src={circle}
                            alt="circle"
                            className="absolute -top-6 -left-15 lg:-left-20 xl:-left-46 "
                        />

                        {/*  Title Row */}
                        <div className="flex items-center gap-3 xl:-ml-34 mb-4">
                            <span className="-space-grotesk font-bold text-[16px] leading-[1] tracking-[0.03em]">
                                <span className='text-[24px] text-[#1C4746]'>Meet</span> The Founder
                            </span>
                        </div>

                        {/*  Name */}
                        <h3 className="space-grotesk font-bold text-[24px] xl:-ml-11 text-[#1C4746] mb-3 flex items-center gap-[18px]">
                            <RightIcon />
                            Adv. R. Sridaran
                        </h3>

                        {/*  Description */}
                        <p className="poppins text-[13px] md:text-[16px] leading-[32px] mb-6 max-w-[520px]">
                            A dedicated professional with years of expertise in taxation,
                            legal drafting, compliance management, and representation
                            before authorities.
                        </p>

                        {/*  Bullet Points */}
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 poppins text-[12px] md:text-[14px] ">
                                <TickIcon /> Expert in Tax & GST Compliance
                            </li>
                            <li className="flex items-center gap-3 poppins text-[12px] md:text-[14px] ">
                                <TickIcon /> Experienced Tribunal Representative
                            </li>
                            <li className="flex items-center gap-3 poppins text-[12px] md:text-[14px] ">
                                <TickIcon /> Specialized in Legal Documentation
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}

export default WeAre
