import React from 'react'
import graph from "../../assets/images/graphbar.webp";
import arrow from "../../assets/images/arrow.webp";
import { MirrorThreeIcon, ThreeIcon, VisionIcon } from '../../assets/icons/Icons';

const Vision = () => {
    return (
        <>
            <div className="relative bg-[#E2E6E6] py-20 px-6 sm:px-10 lg:px-16 xl:px-[90px] text-center overflow-hidden mt-6 lg:mt-10 xl:mt-[100px]">

                {/* LEFT ARROW */}
                <img
                    src={arrow}
                    alt="arrow"
                    className=" absolute md:left-[50px] lg:left-[150px] top-4 md:top-[50px] w-[140px] md:w-[140px]"
                />

                {/* RIGHT GRAPH */}
                <img
                    src={graph}
                    alt="graph"
                    className=" absolute -right-3 lg:right-[40px] xl:right-[140px] bottom-[0px] w-[160px] md:w-[200px]"
                />

                {/* CENTER ICON */}
                <div className="w-[100px] h-[100px] rounded-full bg-[#1C4746] flex items-center justify-center mx-auto mb-6">
                    <VisionIcon />
                </div>

                {/* HEADING */}
                <h2 className="space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center text-[#496C6B]">
                    Our Vision
                </h2>
                <div className=" absolute right-[260px] top-[220px]">
                    <ThreeIcon />
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 poppins font-normal text-[13px] md:text-[16px] leading-[34px] tracking-[0.08em] text-center">
                    Most trusted and client centric Tax, Finance, and Legal advisory firm.
                </p>

                {/* DECORATIVE ICONS */}
                <div className=" absolute left-[270px] top-[288px]">
                    <MirrorThreeIcon />
                </div>

                <div className="absolute  top-[-200px] right-[-200px] w-[220px] h-[400px] bg-[#1C4746] rounded-full blur-[200px] z-0 overflow-hidden"></div>
            </div>

            <div className="pt-6 sm:pt-10 lg:pt-[90px] px-6 sm:px-10 lg:px-16 xl:px-[90px]">

                {/* Heading */}
                <h1 className="text-[#496C6B] space-grotesk font-bold  text-[24px] leading-6 tracking-[0.03em]  text-center mb-[40px]">
                    Our Values
                </h1>

                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">

                    {/* Card 1 */}
                    <div className="bg-[#1C4746] transition duration-200  text-white rounded-2xl w-[276px] h-[317px] pt-[74px] px-[38px] mx-auto hover:shadow-[0_4px_7px_0_#00000040] hover:bg-white hover:text-[#1C4746]">
                        <h3 className="space-grotesk font-bold text-[20px] leading-[20px] tracking-[0.03em] mb-[22px]">Integrity</h3>
                        <p className="poppins font-medium text-[14px] leading-[31px] tracking-[0.03em] opacity-90">
                            We act ethically and responsibly in every financial and legal decision.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1C4746] transition duration-200  text-white rounded-2xl w-[276px] h-[317px] pt-[74px] px-[28px] mx-auto hover:shadow-[0_4px_7px_0_#00000040] hover:bg-white hover:text-[#1C4746]">
                        <h3 className="space-grotesk font-bold text-[20px] leading-[20px] tracking-[0.03em] mb-[22px]">Transparency</h3>
                        <p className="poppins font-medium text-[14px] leading-[31px] tracking-[0.03em] opacity-90">
                            We ensure complete clarity in processes, documentation, and communication.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1C4746] transition duration-200  text-white rounded-2xl w-[276px] h-[317px] pt-[74px] pl-[20px] px-[8px] mx-auto hover:shadow-[0_4px_7px_0_#00000040] hover:bg-white hover:text-[#1C4746]">
                        <h3 className="space-grotesk font-bold text-[20px] leading-[20px] tracking-[0.03em] mb-[22px]">Professional Excellence</h3>
                        <p className="poppins font-medium text-[14px] leading-[31px] tracking-[0.03em] opacity-90">
                            We uphold the highest standards in tax compliance, financial planning, and legal advisory.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#1C4746] transition duration-200  text-white rounded-2xl w-[276px] h-[317px] pt-[74px] px-[38px] mx-auto hover:shadow-[0_4px_7px_0_#00000040] hover:bg-white hover:text-[#1C4746]">
                        <h3 className="space-grotesk font-bold text-[20px] leading-[20px] tracking-[0.03em] mb-[22px]">Client Satisfaction</h3>
                        <p className="poppins font-medium text-[14px] leading-[31px] tracking-[0.03em] opacity-90">
                            We prioritize client needs, accuracy, and timely service.
                        </p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Vision
