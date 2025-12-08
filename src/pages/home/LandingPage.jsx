import React from 'react';
import landingimg from "../../assets/images/landingimg.webp";

const LandingPage = () => {
  return (
    <div className="bg-white ">
      <div className="
        bg-[#1C4746] min-h-[620px]
        flex flex-col lg:flex-row
        items-center
        lg:items-start
        px-6 sm:px-10 lg:px-16 xl:px-[90px]
        pt-15 sm:pt-14 lg:pt-[60px]
        gap-10">
        
        {/* LEFT CONTENT */}
        <div className="w-full xl:w-auto text-center lg:text-left">
          <h1 className="space-grotesk font-bold text-[24px] sm:text-[36px] xl:text-[42px] leading-[40px sm:leading-[52px] xl:leading-[66px] tracking-[0.03em] text-white">
            Professional. Reliable. Tax Solutions Done Right
          </h1>

          <p className="
            pt-4 sm:pt-[18px]
            poppins font-normal
            text-[12px] sm:text-[16px] xl:text-[18px]
            leading-7 sm:leading-8 xl:leading-9
            tracking-[0.05em]
            text-[#F8F8F8]
          ">
            Professional support for individuals, businesses, and
            <br className="hidden lg:block" />
            corporates powered by accuracy, transparency, and
            <br className="hidden lg:block" />
            deep domain expertise.
          </p>

          <div className="
            pt-8 sm:pt-10 xl:pt-[46px]
            flex flex-col sm:flex-row
            items-center justify-center lg:justify-normal
            lg:items-start
            gap-4 sm:gap-5
          ">
            <button className="space-grotesk font-bold w-[200px] sm:w-[240px] h-[50px] text-[#1C4746] bg-white rounded-[30px] cursor-pointer">
              Book Consultation
            </button>

            <button className="space-grotesk font-bold w-[200px] sm:w-[240px] h-[50px] text-[#F8F8F8] border rounded-[30px] cursor-pointer">
              WhatsApp Chat
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img
          className="
            w-[280px] sm:w-[360px] xl:w-[442px]
            h-auto
            xl:h-[401px]
            object-contain"
          src={landingimg}
          alt="Landing"
        />
      </div>
      <div className="bg-[#1C4746] h-[122px] mx-[124px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)], shadow-[0px_-4px_4px_0px_rgba(248,248,248,0.2)] -mt-16 rounded-[20px] flex justify-center items-center gap-[65px]">

        <div className="text-white">
            <p className='space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center'>2000+</p>
            <p className='poppins font-normal text-[18px] leading-[36px] tracking-[0.05em] text-center'>Filings Completed</p>
        </div>

          <div className="text-white">
            <p className='space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center'>300+</p>
            <p className='poppins font-normal text-[18px] leading-[36px] tracking-[0.05em] text-center'>Appeals Handled</p>
        </div>

          <div className="text-white">
            <p className='space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center'>23+</p>
            <p className='poppins font-normal text-[18px] leading-[36px] tracking-[0.05em] text-center'>Years of Experience</p>
        </div>

          <div className="text-white">
            <p className='space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center'>100%</p>
            <p className='poppins font-normal text-[18px] leading-[36px] tracking-[0.05em] text-center'> Confidentiality Guaranteed</p>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
