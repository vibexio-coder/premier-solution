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
        <div className="bg-[#1C4746] text-white rounded-[10px] h-[162px] flex flex-col items-center justify-center text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em] text-center">
            Experienced Team
          </h3>
          <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
            10+ years in Tax, GST & Legal
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#1C4746] text-white rounded-[10px] h-[162px] flex flex-col items-center justify-center text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em] text-center">
            Reliable & Fast Service
          </h3>
          <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
            10+ years in Tax, GST & Legal
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#1C4746] text-white rounded-[10px] h-[162px] flex flex-col items-center justify-center text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em] text-center">
            Affordable & Transparent
          </h3>
          <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
            10+ years in Tax, GST & Legal
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#1C4746] text-white rounded-[10px] h-[162px] flex flex-col items-center justify-center text-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
          <h3 className="space-grotesk font-bold text-[16px] leading-[16px] tracking-[0.03em] text-center">
            100% Confidentiality
          </h3>
          <p className="poppins font-normal text-[16px] leading-[36px] tracking-[0.05em] mt-[18px] opacity-90">
            10+ years in Tax, GST & Legal
          </p>
        </div>

      </div>
    </div>
  );
};

export default ChooseUs;
