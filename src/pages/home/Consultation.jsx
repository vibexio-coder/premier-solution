import React from "react";
import graph from "../../assets/images/graphbar.webp";
import arrow from "../../assets/images/arrow.webp";
import { ThreeIcon, MirrorThreeIcon, MissionIcon } from "../../assets/icons/Icons";

const Consultation = () => {
    return (
        <div className="w-full overflow-hidden">

            <div className="relative bg-[#E2E6E6] mt-10 lg:mt-0 py-20 px-6 sm:px-10 lg:px-16 xl:px-[90px] text-center">

                {/* LEFT ARROW */}
                <img
                    src={arrow}
                    alt="arrow"
                    className=" absolute md:left-[50px] lg:left-[150px] top-4 md:top-[50px] w-[140px] md:w-[200px]"
                />

                {/* RIGHT GRAPH */}
                <img
                    src={graph}
                    alt="graph"
                    className=" absolute -right-3 lg:right-[40px] xl:right-[140px] bottom-[0px] w-[160px] md:w-[200px]"
                />

                {/* CENTER ICON */}
                <div className="w-[100px] h-[100px] rounded-full bg-[#1C4746] flex items-center justify-center mx-auto mb-6">
                    <MissionIcon />
                </div>

                {/* HEADING */}
                <h2 className="space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center text-[#496C6B]">
                    Our Mission
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-5 poppins font-normal text-[13px] md:text-[16px] leading-[34px] tracking-[0.08em] text-center relative inline-block mx-auto">

                    To deliver precise, reliable, and trusted solutions in Tax, GST,
                    Legal, and Appeals

                    {/* ICON STAYS CLOSE TO TEXT */}
                    <span className=" absolute inline-flex align-middle ml-2 -mt-5">
                        <ThreeIcon />
                    </span>

                    <br className="hidden lg:block" />

                    matters helping individuals and businesses stay
                    compliant and stress free

                    {/* ICON STAYS CLOSE TO TEXT */}
                    <span className=" absolute flex align-middle -ml-5 -mt-5">
                        <MirrorThreeIcon />
                    </span>

                </p>

            </div>

            {/* ================= BOTTOM CTA SECTION ================= */}
            <div className="relative bg-[#1C4746] py-[70px] px-6 sm:px-10 lg:px-16 xl:px-[90px] text-center overflow-hidden">

                <div className="absolute  top-[-300px] right-[-200px] w-[220px] h-[400px] bg-[#F8F8F8] rounded-full blur-[200px]"></div>

                <div className="absolute bottom-[-300px] left-[-200px] w-[220px] h-[400px] bg-[#F8F8F8] rounded-full  blur-[200px]"></div>

                <div className="relative z-10">
                    <h3 className="space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center text-white ">
                        Book Your Consultation
                    </h3>

                    <p className="poppins font-normal text-[16px] leading-[34px] tracking-[0.08em] text-center text-[#F8F8F8] mt-8">
                        Get expert guidance today
                    </p>

                    <div className="mt-6 flex justify-center">
                        <button className="bg-white text-[#1C4746] w-[200px] sm:w-[240px] h-[50px] rounded-[30px] font-poppins font-medium text-[16px] leading-[16px] tracking-[0.03em] text-center hover:shadow-[0_10px_8px_0_#00000066] transition cursor-pointer duration-200 ease-in-out">
                            Book Consultation
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Consultation;
