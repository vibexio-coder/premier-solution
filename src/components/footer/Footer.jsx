import React from "react";
import logo from "../../assets/images/logo.webp";
import { MailIcon, PhoneIcon2, WhatsappIcon } from "../../assets/icons/Icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#496C6B] min-h-[420px] flex flex-col items-center px-6 sm:px-10 xl:px-0">

      {/* LOGO */}
      <img className="w-[91px] pt-[23px]" src={logo} alt="logo" />

      {/* SERVICES LIST */}
      <ul className="
        flex flex-col sm:flex-row 
        text-white 
        gap-6 sm:gap-[60px] xl:gap-[130px]
        space-grotesk font-bold 
        text-[16px] sm:text-[18px] xl:text-[20px] 
        leading-[20px] tracking-[0.03em] 
        mt-6 text-center sm:list-disc">
        <li>Tax Services</li>
        <li>Finance & Investment Advisory</li>
        <li>Legal Advisory</li>
      </ul>

      {/* DIVIDER */}
      <div className="w-full h-px bg-[#F8F8F8]/50 mt-[35px] mb-[26px]" />

      {/* NAV LINKS */}
      <ul className="
        flex flex-col sm:flex-row 
        text-white 
        gap-6 sm:gap-[50px] xl:gap-[90px]
        space-grotesk font-bold 
        text-[16px] sm:text-[18px] xl:text-[20px] 
        leading-[20px] tracking-[0.03em]
        text-center
      ">
        {["/", "/about", "/services", "/contact"].map((path, i) => {
          const labels = ["Home", "About", "Services", "Contact"];
          return (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `cursor-pointer pb-[10px] ${isActive ? "active-link font-bold" : ""}`
                }

              >
                {labels[i]}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* SOCIAL ICONS */}
      <div className="flex gap-[30px] sm:gap-[45px] pt-6">
        {/* Phone */}
        <a
          href="tel:+7708566732"
          aria-label="Call us"
        >
          <PhoneIcon2 />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/7708566732?text=Hello%20I%20would%20like%20to%20know%20more"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <WhatsappIcon />
        </a>

        {/* Email */}
        <a
          href="mailto:info@yourcompany.com?subject=Service%20Enquiry"
          aria-label="Send email"
        >
          <MailIcon />
        </a>
      </div>


      {/* LEGAL TEXT */}
      <p className="
        space-grotesk font-normal 
        text-[14px] sm:text-[16px] 
        leading-[16px] tracking-[0.03em] 
        text-center text-white pt-[38px]
      ">
        Terms and Conditions | Privacy Policy
      </p>

      <p className="
        space-grotesk font-normal 
        text-[14px] sm:text-[16px] 
        leading-[26px] tracking-[0.03em] 
        text-center text-white pt-[20px] pb-6
      ">
        @2025 The Premier Solutions. Powered by vibexio
      </p>
    </div>
  );
};

export default Footer;
