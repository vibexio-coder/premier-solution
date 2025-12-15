import React from 'react'

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Initial discussion to understand your requirements",
  },
  {
    num: "02",
    title: "Document Collection",
    desc: "Gather all necessary documents and information",
  },
  {
    num: "03",
    title: "Filing & Execution",
    desc: "Professional processing and submission",
  },
  {
    num: "04",
    title: "Delivery & Ongoing Support",
    desc: "Completion and continued assistance",
  },
];

const OurProcess = () => {
  return (
    <>
      <div className="w-full overflow-hidden pt-[20px] ">
           <div className="w-full overflow-hidden">
                <h1 className='space-grotesk font-bold text-[16vw] tracking-[0.03em] text-center text-[#C3CDCD] w-full whitespace-nowrap'>
                    Our Process
                </h1>
            </div>
      </div>

      <div className="px-6 sm:px-10 lg:px-6 xl:px-[40px] pt-5">
        <div className="h-px bg-[#1C4746] w-full mb-4 " />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[100px] justify-items-center">
          {steps.map((item) => (
            <div
              key={item.num}
              className="group transition-transform duration-500 ease-in-out hover:-translate-y-[40px] w-full flex justify-center"
            >
              <div className="flex flex-col items-center">
                {/* Number */}
                <div
                  className="space-grotesk font-bold text-[40px] sm:text-[80px] md:text-[50px] lg:text-[50px] leading-none tracking-[0.03em] text-center mb-6 text-[#496C6B] group-hover:[-webkit-text-stroke:1px_#f8f8f8]"
                >
                  {item.num}
                </div>

                {/* Card */}
                <div className="bg-[#E6E7E7] xl:px-4 group-hover:bg-[#1C4746] rounded-2xl h-[233px] w-[85vw] sm:w-[260px] md:w-[280px] lg:w-[237px] xl:w-[297px] text-center shadow-[0_3px_4px_0_#00000040]">
                  <h3 className="space-grotesk font-bold text-[18px] sm:text-[20px] leading-[120%] tracking-[0.03em] text-[#1C4746] pt-12 sm:pt-10 lg:pt-[30px] xl:pt-[58px] group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="poppins font-normal text-[16px] sm:text-[16px] leading-8 tracking-[0.03em] pt-[23px] px-10  sm:px-6 xl:px-10 text-center text-[#1C4746] group-hover:text-white">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProcess;
