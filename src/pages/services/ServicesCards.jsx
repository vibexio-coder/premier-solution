import React, { useState } from "react";
import { FinanceIcon, LegalIcon, TaxIcon } from "../../assets/icons/Icons";

const services = [
  {
    id: 1,
    title: "Tax Services",
    short:
      "Accurate filing, compliance support, and strategic tax planning for individuals and businesses.",
    icon: <TaxIcon />,
    details: {
      heading: "GST Services",
      list: [
        "GST Registration",
        "Monthly/Quarterly/Annual GST Filing",
        "GST Audit & Compliance",
        "Reply to GST Notices",
        "GSTR-9 / GSTR-9C Filing ",
      ],
      heading2: "Income Tax Services",
      list2: [
        "Individual & Business IT Filing ",
        "Scrutiny / Reassessment Replies",
        "Notice Clarifications (143(1), 143(2), 148, etc.) ",
        "Capital Gains Tax Assistance",
        "Tax Planning & Advisory ",
      ],
      heading3: "TDS Services ",
      list3: [
        "TDS Filing (Monthly/Quarterly)",
        "TDS Corrections",
        "TAN Application Documentation",
        "PAN Services",
        "Digital Signature Certificates (DSC)",
      ],
    },
  },
  {
    id: 2,
    title: "Finance & Investment Advisory",
    short:
      "Expert financial guidance, investment planning, and wealth building strategies tailored to your goals.",
    icon: <FinanceIcon />,
    details: {
      heading: "Approved Advisory",
      list: [
        "Business Financial Planning ",
        "Budgeting & Cash Flow Advisory ",
      ],
    },
  },
  {
    id: 3,
    title: "Legal Advisory, Counseling & Appeals Representation",
    short:
      "Comprehensive legal support from expert advisory and counseling to dedicated representation in appeals.",
    icon: <LegalIcon />,
    details: {
      heading2: "Appeals & Tribunal Representation",
      desc: "We provide complete drafting, filing, documentation, and representation support for:",
      list2: [
        "Income Tax Appeals",
        "GST Appeals",
        "Tribunal & High Court Matters ",
      ],
      heading1: "Income Tax Appeals",
      list1: [
        "Preparing & filing appeal petitions",
        "Representation before CIT(A)",
        "Appeals before ITAT",
        "Replies for scrutiny, reassessment, and penalty cases",
        "Drafting detailed written submissions with case laws",
      ],
      heading3: "GST Appeals",
      list3: [
        "Filing GST APL-01 / APL-03",
        "Representation before Appellate Authorities",
        "Assistance with stay petitions, rectification, & follow-ups",
      ],
      heading4: "Tribunal & High Court Support",
      list4: [
        "Preparation of Write Petitions",
        "Filing & coordination before High Court",
        "Drafting affidavits, grounds, and prayer formats",
        "Support for stay, quash, and interim petitions",
        "End-to-end case preparation & legal compliance",
      ],
    },
  },
];

const ServicesCards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const expandedHeights = {
    1: "lg:h-[1400px] xl:h-[1180px]", 
    2: "md:h-[600px] lg:h-[660px] xl:h-[560px]", 
    3: "xl:h-[1630px]",
  };

  return (
    <div className="pt-[70px] px-6 sm:px-10 lg:px-16 xl:px-[90px]">
      <h1 className="text-[#496C6B] space-grotesk font-bold text-[24px] leading-6 tracking-[0.03em] text-center mb-[40px]">
        Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-[#496C6B] rounded-2xl text-white px-6 xl:pl-[52px] xl:pr-[23px] pt-[52px] pb-[32px] transition-all duration-300 overflow-hidden ${isOpen ? expandedHeights[service.id] : "h-auto xl:h-[454px]"
              }`}
          >
            <div className="w-20 h-20 rounded-[10px] bg-white flex items-center justify-center mb-[35px]">
              {service.icon}
            </div>

            <h3 className="font-space-grotesk font-bold text-[20px] leading-[140%] tracking-[0.03em] mb-9">
              {service.title}
            </h3>

            <p className="font-poppins font-normal text-[16px] leading-8 tracking-[0.03em] text-[#F8F8F8]">
              {service.short}
            </p>

            {isOpen && (
              <div className="mt-3 space-y-4">
                {service.details.heading && (
                  <div>
                    <h4 className="space-grotesk font-bold text-[16px] mb-2">
                      {service.details.heading}
                    </h4>
                    <ul className="list-disc pl-5 poppins text-[16px] leading-[34px] tracking-[0.03em]">
                      {service.details.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.details.heading2 && (
                  <div>
                    <h4 className="space-grotesk font-bold text-[16px] mb-2">
                      {service.details.heading2}
                    </h4>
                    {service.details.desc && (
                      <p className="poppins text-[16px] leading-[34px] mb-2">
                        {service.details.desc}
                      </p>
                    )}
                    <ul className="list-disc pl-5 poppins text-[16px] leading-[34px] tracking-[0.03em]">
                      {service.details.list2?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.details.heading1 && (
                  <div>
                    <h4 className="space-grotesk font-bold text-[16px] mb-2">
                      {service.details.heading1}
                    </h4>
                    <ul className="list-disc pl-5 poppins text-[16px] leading-[34px] tracking-[0.03em]">
                      {service.details.list1?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.details.heading3 && (
                  <div>
                    <h4 className="space-grotesk font-bold text-[16px] mb-2">
                      {service.details.heading3}
                    </h4>
                    <ul className="list-disc pl-5 poppins text-[16px] leading-[34px] tracking-[0.03em]">
                      {service.details.list3?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.details.heading4 && (
                  <div>
                    <h4 className="space-grotesk font-bold text-[16px] mb-2">
                      {service.details.heading4}
                    </h4>
                    <ul className="list-disc pl-5 poppins text-[16px] leading-[34px] tracking-[0.03em]">
                      {service.details.list4?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* ONE BUTTON CONTROLS ALL CARDS */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mt-[26px] space-grotesk font-medium text-[14px] leading-[14px] tracking-[0.03em] border border-white rounded-[20px] px-9 py-[15px] hover:shadow-[0_10px_8px_0_#00000066] transition cursor-pointer duration-200 ease-in-out"
            >
              {isOpen ? "View Less" : "View Details"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
