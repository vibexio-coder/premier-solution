import React from 'react'
import { RightIcon3 } from '../../assets/icons/Icons'

const WeAreDifferent = () => {
  return (
    <div className="relative bg-[#1C4746] mt-8 sm:mt-[72px] h-auto pb-[60px] sm:pb-[104px] overflow-hidden flex">

      {/* Blur Effects (UNCHANGED) */}
      <div className="absolute top-[-300px] right-[-200px] w-[220px] h-[400px] bg-[#F8F8F8] rounded-full blur-[200px]"></div>
      <div className="absolute top-[-300px] left-[-200px] w-[220px] h-[400px] bg-[#F8F8F8] rounded-full blur-[200px]"></div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-[93px] text-white text-center">

        {/* Title */}
        <h2 className="space-grotesk font-bold text-[20px] sm:text-[22px] lg:text-[24px] tracking-[0.03em] pt-10 sm:pt-[84px]">
          Why We Are Different
        </h2>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30 md:gap-16 mt-[60px] md:mt-[90px] relative">

          <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2">
            <RightIcon3 />
          </div>

          <div className="md:hidden flex absolute left-1/2 max-[340px]:top-85 top-80 sm:top-90 -translate-x-1/2">
            <RightIcon3 />
          </div>

          {/* Left Column */}
          <div className="flex flex-col items-center">
            <h3 className="space-grotesk font-bold text-[14px] sm:text-[16px] leading-[1] tracking-[0.03em] text-center text-white mb-[34px]">
              Traditional Consultants
            </h3>

            <div className="h-0.5 bg-white mb-8 w-[220px] md:w-[230px] lg:w-[370px] xl:w-[447px]"></div>

            <ul className="space-y-7 sm:space-y-[34px] poppins font-light text-[13px] sm:text-[16px] leading-[1.2] tracking-[0.03em] text-center">
              <li>Limited service depth</li>
              <li>Slow follow-ups and delayed responses</li>
              <li>Only routine compliance work</li>
              <li>Advice without legal backing</li>
              <li>No structured data security</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center">
            <h3 className="space-grotesk font-bold text-[14px] sm:text-[16px] leading-[1] tracking-[0.03em] text-center text-white mb-[34px]">
              The Premier Solutions
            </h3>

            <div className="h-0.5 bg-white mb-8 w-[220px] md:w-[230px] lg:w-[370px] xl:w-[447px]"></div>

            <ul className="space-y-7 sm:space-y-[34px] poppins font-light text-[13px] sm:text-[16px] leading-[140%] tracking-[0.03em] text-center">
              <li>Full-spectrum expertise in Taxation, GST, Legal & Litigation</li>
              <li>Ultra-responsive support team</li>
              <li>Seamless documentation, Filing, Representation</li>
              <li>Strategic guidance supported by updated case laws & circulars</li>
              <li>Enterprise-grade confidentiality & data protection</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default WeAreDifferent
