import React from "react";

const ChooseUs = () => {
  return (
    <div className=" pt-10 lg:py-[90px] px-6 sm:px-10 lg:px-16 xl:px-[90px]">

      {/* SECTION TITLE */}
      <h1 className="text-[#496C6B] space-grotesk font-bold text-[24px] leading-[24px] tracking-[0.03em] text-center mb-[30px]">
        Why Clients Choose Us
      </h1>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[25px] max-w-[960px] mx-auto">

        {/* CARD 1 */}
        <div className="relative h-[162px] rounded-[10px] flex items-center justify-center group">
          <div className="absolute inset-0 bg-[#1C4746] rounded-[10px]
               shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
               transition-transform duration-300
               group-hover:-rotate-2"/>

          <div className="relative z-10 text-white flex flex-col items-center justify-center text-center">
            <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em]">
              Experienced Team
            </h3>

            <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
              10+ years in Tax, GST & Legal
            </p>
          </div>
        </div>


        {/* CARD 2 */}
        <div className="relative h-[162px] rounded-[10px] flex items-center justify-center group">
          <div className="absolute inset-0 bg-[#1C4746] rounded-[10px]
               shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
               transition-transform duration-300
               group-hover:rotate-2"/>

          <div className="relative z-10 text-white flex flex-col items-center justify-center text-center">
            <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em]">
            Reliable & Fast Service
            </h3>

            <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
              10+ years in Tax, GST & Legal
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="relative h-[162px] rounded-[10px] flex items-center justify-center group">
          <div className="absolute inset-0 bg-[#1C4746] rounded-[10px]
               shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
               transition-transform duration-300
               group-hover:-rotate-2"/>

          <div className="relative z-10 text-white flex flex-col items-center justify-center text-center">
            <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em]">
              Affordable & Transparent
            </h3>

            <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
              10+ years in Tax, GST & Legal
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="relative h-[162px] rounded-[10px] flex items-center justify-center group">
          <div className="absolute inset-0 bg-[#1C4746] rounded-[10px]
               shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]
               transition-transform duration-300
               group-hover:rotate-2"/>

          <div className="relative z-10 text-white flex flex-col items-center justify-center text-center">
            <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em]">
              100% Confidentiality
            </h3>

            <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
              10+ years in Tax, GST & Legal
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChooseUs;
